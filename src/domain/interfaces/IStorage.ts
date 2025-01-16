export interface IStorage<T>{
    save: (data: T) => void;
    get: () => T | null;
    clear: () => void;
}