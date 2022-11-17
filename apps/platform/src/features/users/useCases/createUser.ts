import { User } from "../domain/userType";

export const createUser = async (user: User) => {
  fetch("http://localhost:3000/users");
  // ...
};
