import { useEffect, useState } from "react";
import { User } from "../domain/userType";

export const useCreateUser = (data: User) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    createUser(data).catch(setError);
  }, [data]);

  const createUser = async (userData: User) => {
    const response = (await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })) as any;
    const data = await response.json();
    setUser(data);
  };

  return { loading, user, error };
};
