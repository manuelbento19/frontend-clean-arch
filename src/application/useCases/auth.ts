import { IAuthService } from "@/application/services/IAuthService";
import { IStorageService } from "@/application/services/IStorageService";
import { INotificationService } from "../services/INotificationService";

export class AuthCase{
    constructor(
        private authService: IAuthService,
        private storageService: IStorageService,
        private notificationService: INotificationService
    ){}

    async login(email: string, password: string){
        const user = await this.authService.login(email,password);
        if(!user)
        return this.notificationService.notify("E-mail or password incorrect");
        
        this.storageService.save(user);
        return user;
    }

    async logout(){
        await this.authService.logout();
        this.storageService.clear();
    }
}