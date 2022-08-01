import { Guid } from "guid-typescript";


import { ProductCategory } from "./product-category.js";
import { InvalidDescritionError } from "./validation/application-error.js";

const pc = new ProductCategory(
    Guid.create()
    ,'Bo'
    ,true
)

//console.log(pc.info)


function mysimulateError (input: string): (boolean|null)  {
    let re = /\w{3,}/g
    if ( !re.exec(input) )
      return null
      //throw new InvalidDescritionError('Format description is incorrect')      

    console.log(input)
    return true;

}


try {
    if ( !mysimulateError('Bo7') ) //'@Bk$5'
      console.log('Format description is incorrect')
       //throw new InvalidDescritionError('Format description is incorrect')
} catch (error) {
    console.log(error)

}
