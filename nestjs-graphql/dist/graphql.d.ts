export declare class CreateFighterInput {
    hp: number;
    cp: number;
    name: string;
    picture: string;
    type: string;
}
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
export declare abstract class IMutation {
    abstract createFighter(createFighterInput: CreateFighterInput): Fighter | Promise<Fighter>;
}
type Nullable<T> = T | null;
export {};
