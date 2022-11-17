import { useState } from "react";
import { login } from "./login";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    login: loginHandler,
  };
};
