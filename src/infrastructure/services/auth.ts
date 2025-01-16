import { User } from "@/domain/entities";
import { IAuthService } from "@/application/ports/IAuthService";
import { fakeAPI } from "../api";

export class AuthService implements IAuthService{
    async login(email: string, password: string): Promise<User> {
        const user: User = {
            id: "1212",
            name: "Developer",
            email,
            password,
        }
        return await fakeAPI(user);
    }
    logout(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}