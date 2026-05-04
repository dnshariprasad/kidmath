import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slice/AlphabetSlice";
import { useNavigate } from "react-router-dom";
import KidButton from "../../components/KidButton";
import { TRANSLATIONS } from "../../constants/translations";
import {
  LoginContainer,
  LoginCard,
  Title,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  SwitchText,
  Divider,
  GoogleButton,
} from "./styles";
import { LogIn, UserPlus } from "lucide-react";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const t = TRANSLATIONS.en;

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: name,
          }),
        );
      }
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }),
      );
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    }
  };

  return (
    <LoginContainer>
      <LoginCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Title>{isLogin ? t.auth_welcomeBack : t.auth_join}</Title>
        <form
          onSubmit={handleAuth}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {!isLogin && (
            <InputGroup>
              <Label>{t.auth_kidsName}</Label>
              <Input
                type="text"
                placeholder={t.auth_enterName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
          )}
          <InputGroup>
            <Label>{t.auth_email}</Label>
            <Input
              type="email"
              placeholder={t.auth_enterEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label>{t.auth_password}</Label>
            <Input
              type="password"
              placeholder={t.auth_enterPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <KidButton
            title={loading ? t.auth_pleaseWait : isLogin ? t.auth_login : t.auth_signUp}
            onClick={() => {}}
            variant="primary"
            type="submit"
            icon={isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
            disabled={loading}
          />
        </form>

        <Divider>
          <span>{t.auth_or}</span>
        </Divider>

        <GoogleButton type="button" onClick={handleGoogleSignIn}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {t.auth_googleSignIn}
        </GoogleButton>

        <SwitchText>
          {isLogin ? t.auth_noAccount : t.auth_hasAccount}
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? t.auth_signUp : t.auth_login}</span>
        </SwitchText>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
