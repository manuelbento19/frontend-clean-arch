import { User } from "@/domain/entities";

export interface IStorageService {
    save: (user: User) => void;
    get: () => User;
    clear: () => void;
}