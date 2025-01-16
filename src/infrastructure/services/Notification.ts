import { INotificationService } from "@domain/interfaces/INotificationService";
import {toast} from '../utils'
export class NotificationService implements INotificationService {
    notify(message: string) {
        toast(message);
    }
}
