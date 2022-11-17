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
      Login Form
      <input></input>
      <input></input>
      <input></input>
      <button type="submit">Login</button>
    </form>
  );
};
