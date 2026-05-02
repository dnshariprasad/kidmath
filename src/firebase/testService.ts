import { collection, addDoc, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./config";

export interface TestResult {
  userId: string;
  testId: string;
  testTitle: string;
  score: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  timestamp: Timestamp;
  category: string;
  difficulty: number;
  userName?: string;
  scorePercentage?: number;
}

export const saveTestResult = async (result: Omit<TestResult, "timestamp">) => {
  try {
    const docRef = await addDoc(collection(db, "testHistory"), {
      ...result,
      timestamp: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving test result:", error);
    throw error;
  }
};

export const getUserTestHistory = async (userId: string) => {
  try {
    const q = query(collection(db, "testHistory"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as (TestResult & { id: string })[];
  } catch (error) {
    console.error("Error fetching test history:", error);
    throw error;
  }
};
export const getGlobalLeaderboard = async (testId?: string, limitCount: number = 50) => {
  try {
    let q;
    if (testId) {
      q = query(collection(db, "testHistory"), where("testId", "==", testId));
    } else {
      q = query(collection(db, "testHistory"));
    }

    // Note: This might require a Firestore index for (testId + score + timeTaken)
    const querySnapshot = await getDocs(q);

    // Aggregate by user to show only their best score for this category
    const bestResults: Record<string, TestResult & { id: string }> = {};

    querySnapshot.docs.forEach((doc) => {
      const data = doc.data() as TestResult;
      const key = `${data.userId}_${data.testId}`;

      const isNewBest =
        !bestResults[key] ||
        data.score > bestResults[key].score ||
        (data.score === bestResults[key].score && data.timeTaken < bestResults[key].timeTaken) ||
        (data.score === bestResults[key].score &&
          data.timeTaken === bestResults[key].timeTaken &&
          !bestResults[key].userName &&
          data.userName);

      if (isNewBest) {
        bestResults[key] = { id: doc.id, ...data };
      }
    });

    return Object.values(bestResults)
      .map((item) => ({
        ...item,
        scorePercentage:
          item.scorePercentage ?? Math.round((item.score / item.totalQuestions) * 100),
      }))
      .sort(
        (a, b) => (b.scorePercentage || 0) - (a.scorePercentage || 0) || a.timeTaken - b.timeTaken,
      )
      .slice(0, limitCount);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
