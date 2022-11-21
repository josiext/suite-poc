import { useEffect, useState } from "react";
import { User } from "../domain/userType";

export interface UserResponseType {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}


export const useCreateUser = (data: User) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    createUser(data).catch(setError);
  }, [data]);

  const createUser = async (userData: User) : Promise<UserResponseType> => {
    const response = service...
    const data : UserResponseType = response.map() 
    setUser(data);
  };

  return { loading, user, error };
};
