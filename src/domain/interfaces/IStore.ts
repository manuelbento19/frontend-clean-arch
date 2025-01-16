export interface IStore<T>{
    setState: (data: T) => void;
    state: T | null;
}