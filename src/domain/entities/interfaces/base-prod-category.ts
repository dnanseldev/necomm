import { TEntity } from "./base-entity";

export abstract class TProductCategory extends TEntity{
     protected description!: string
     protected active: boolean = false;
}