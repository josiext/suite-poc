import { LoginForm } from "./LoginForm";

export interface LoginViewProps {
  onLogin: (email: string, password: string) => void;
}

export const LoginFormCard = ({ onLogin }: LoginViewProps) => {
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #ccc",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};
