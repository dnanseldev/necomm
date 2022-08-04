import { Guid } from "guid-typescript";


import { ProductCategory } from "./product-category.js";
import { InvalidDescritionError } from "./validation/application-error.js";
import { Result } from "./validation/result-error.js";

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
