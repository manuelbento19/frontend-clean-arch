import { IAuthService } from "@/application/ports/IAuthService";
import { INotificationService } from "../ports/INotificationService";
import { IUserStorageService } from "../ports/IUserStorageService";

export class AuthCase{
    constructor(
        private authService: IAuthService,
        private useStorageService: IUserStorageService,
        private notificationService: INotificationService
    ){}

    async login(email: string, password: string){
        const user = await this.authService.login(email,password);
        if(!user)
        return this.notificationService.notify("E-mail or password incorrect");
        
        this.useStorageService.save(user);
        return user;
    }

    async logout(){
        await this.authService.logout();
        this.useStorageService.clear();
    }
}