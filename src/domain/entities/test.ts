import { Guid } from "guid-typescript";
import { Result } from "../validation/result-error";
import { ProductCategory } from "./product/product-category";
import { ProductCategoryFactory } from "./product/product_factories";



//#region Test01
/*
const pc = new ProductCategory(
    Guid.create()
    ,'Boo'
    ,true
)

//console.log(pc.info)


function mysimulateError (pc: ProductCategory): Result<ProductCategory> {
    let re = /^\w{3,}$/g

    if ( !re.exec(pc.description) )
      return Result.fail<ProductCategory>('Format description is incorrect')     

    return Result.ok<ProductCategory>(pc)
}


try {
    const pcOrFail = mysimulateError(pc)
    
    if ( pcOrFail.isFailure )
      console.log(pcOrFail.error)

    console.log(pcOrFail)
} catch (error) {
    console.log(error)

}
*/
//#endregion Test01

const catOrErr: Result<ProductCategory> = new ProductCategoryFactory() 
                                               .factoryMethod( Guid.create()
                                                               ,'Marmita Executiva Grande')

 if ( catOrErr.isFailure ) 
   console.log(catOrErr.error)
 else {
    const cat: ProductCategory = catOrErr.getValue() 
    console.log(cat)
 }
   
