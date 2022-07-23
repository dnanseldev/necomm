import { TEntity } from "./interfaces/base-entity";
import { TProductCategory } from "./interfaces/base-prod-category";

export class Product extends TEntity{

    constructor( readonly description: string
                ,readonly price: number                
                ,readonly category: TProductCategory
                ,readonly expirationDate?: Date
                ,readonly unit?: number
                ,readonly urlImage?: string ) {
        super();
    }

}