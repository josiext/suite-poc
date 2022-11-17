import { User } from "../../users/domain/userType";

export interface Session {
  id: string;
  user: User;
}
