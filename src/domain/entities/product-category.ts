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
    
    private isvalidDescription(p_description: string): boolean {
       
        let re = /\w{3,}/g
    
        return re.exec(p_description) ? true : false
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