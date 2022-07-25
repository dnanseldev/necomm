import { Guid } from "guid-typescript";

import { ProductCategory } from "./product-category.js";

const pc = new ProductCategory(
    Guid.create()
    ,'Bo'
    ,true
)

console.log(pc.info)