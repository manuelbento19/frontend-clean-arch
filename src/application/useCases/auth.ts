import { IAuthService } from "@/domain/services/IAuthService";

export class AuthenticateCase{
    constructor(private authService: IAuthService){}

    async execute(email: string, password: string){
        const user = await this.authService.login(email,password);
        return user;
    }
}

export class LogoutCase{
    constructor(private authService: IAuthService){}

    async execute(){
        await this.authService.logout();
    }
}