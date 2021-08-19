import { Role } from "./role";

export interface User {
  id: number;
  first_name: number;
  last_name: number;
  email: string;
  role: Role;
}
