import { TCreator } from "../interfaces/base-factory";
import { ProductCategory } from "./product-category";
import { Result } from "../../validation/result-error";

export class ProductCategoryFactory implements TCreator<ProductCategory, Result<ProductCategory>>
{
    factoryMethod( id: any
                  ,description: string ): Result<ProductCategory>
    {        
        if( !id )
          return Result.fail<ProductCategory>('Error to create ID')
        
        if( !ProductCategory.isvalidDescription(description) )
          return Result.fail<ProductCategory>('Error: Invalid Category Description')

        return Result.ok<ProductCategory>( new ProductCategory(id, description) )
    }    
}

//module.exports = ProductCategoryFactory