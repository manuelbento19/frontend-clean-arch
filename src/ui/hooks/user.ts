import { AuthCase } from "@/domain/useCases/auth";
import { AuthService } from "@/infrastructure/services/Auth";
import { NotificationService } from "@/infrastructure/services/Notification";
import { UserStorageService } from "@/infrastructure/services/UserStorage";
import { useUserStore } from "@/ui/stores"
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