import { User } from "../../domain/entities";

export interface IAuthService{
    login(email: string, password: string): Promise<User>;
    logout(): Promise<void>;
}