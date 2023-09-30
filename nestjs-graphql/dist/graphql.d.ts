export declare class Fighter {
    id: string;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    type: string;
}
export declare abstract class IQuery {
    abstract getFighters(): Nullable<Fighter>[] | Promise<Nullable<Fighter>[]>;
    abstract getFighterById(id: number): Fighter | Promise<Fighter>;
}
type Nullable<T> = T | null;
export {};
