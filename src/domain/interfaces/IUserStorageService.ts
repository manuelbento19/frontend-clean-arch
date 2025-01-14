import { User } from "@/domain/entities";
import { IStorage } from "./IStorage";

export interface IUserStorageService extends IStorage<User> {

}