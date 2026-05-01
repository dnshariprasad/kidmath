import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from "firebase/firestore";
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
    const q = query(
      collection(db, "testHistory"),
      where("userId", "==", userId),
      orderBy("timestamp", "desc"),
    );
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
