import { useLogin } from "../useCases/useLogin";
import { LoginFormCard } from "./LoginFormCard";

export const LoginPage = () => {
  const { login, isLoading, error } = useLogin();

  return (
    <div>
      <main>
        <LoginFormCard onLogin={login} />
      </main>
    </div>
  );
};
