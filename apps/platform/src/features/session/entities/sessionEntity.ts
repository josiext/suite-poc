import { User } from "../../users/domain/userType";

export interface SessionEntity {
  id: string;
  user: User;
}
