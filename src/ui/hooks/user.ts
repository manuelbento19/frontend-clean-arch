import { AuthService } from "@/infrastructure/services/auth";
import { NotificationService } from "@/infrastructure/services/notification";
import { UserStorageService } from "@/application/services/user";
import { useUserStore } from "@/ui/stores"
import { AuthCase } from "@/application/useCases/auth";
const authService = new AuthService();
const notificationService = new NotificationService();

export const useUser = () => {
    const store = useUserStore();
    const userStorage = new UserStorageService(store);
    
    const authenticate = new AuthCase(authService,userStorage,notificationService);
    
    return {
        user: store.state,
        authenticate
    }
}