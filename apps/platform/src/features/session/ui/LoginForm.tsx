export interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit("something", "something");
      }}
    >
      Login
      <input placeholder="user" />
      <input placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};
