
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Fighter {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    type: string;
}

export abstract class IQuery {
    abstract getFighters(): Nullable<Fighter>[] | Promise<Nullable<Fighter>[]>;
}

type Nullable<T> = T | null;
