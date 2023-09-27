export declare class Fighter {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    type: string;
}
export declare abstract class IQuery {
    abstract getFighters(): Nullable<Fighter>[] | Promise<Nullable<Fighter>[]>;
}
type Nullable<T> = T | null;
export {};
