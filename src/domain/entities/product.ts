import { TEntity } from "./interfaces/base-entity.js";
import { ProductCategory } from "./product-category.js";

export class Product extends TEntity
{            

    constructor( readonly _description: string
                ,readonly  price: number                
                ,readonly  category: ProductCategory
                ,readonly registerCriationDate: Date
                ,readonly  expirationDate?: Date
                ,readonly  measureUnit?: number
                ,readonly  urlImage?: string )
    {
        super();
        this.registerCriationDate = new Date();
    }
}