import { INotificationService } from "@domain/interfaces/INotificationService";

export class NotificationService implements INotificationService {
    notify(message: string) {
        alert(message);
    }
}
