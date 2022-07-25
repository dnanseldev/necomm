import { TEntity } from "./interfaces/base-entity.js";

export class ProductCategory extends TEntity
{
    
    constructor( Eid: any
                ,private _description: string
                ,private _active: boolean )
    {
        super()
        this.ID = Eid
        this._active = false;        
        

        try  {
            this.isvalidDescription(_description)            
        } catch (error) {
            console.log(error)
        }
    }
    
    /*
    
    private isvalidDescription(p_description: string): boolean {
       
        let re = /\w{3,}/g
    
        return re.exec(p_description) ? true : false
    }  
    
    */

    private isvalidDescription(p_description: string): void {
       
        let re = /\w{3,}/g
    
        if (!re.exec(p_description)) 
          throw new Error("Invalid product description")
        else 
          this._description = p_description;
    }  
   
   
    activate(): void {
        this._active = true;
    }

    inactivate(): void {
        this._active = false;
    }

    get info() {
        return `ID: ${this.EntityID}
                Desc: ${this._description}
                Active: ${this._active}`
    }
}