export interface IStore<T>{
    setState: (data: T | null) => void;
    state: T;
}