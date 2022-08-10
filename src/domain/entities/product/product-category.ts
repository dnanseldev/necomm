import { TEntity } from "../interfaces/base-entity";


export class ProductCategory extends TEntity
{ 
    private _active: boolean = false

    constructor( Eid: any
                ,private _description: string )
    {
        super()
        this.ID = Eid           
    }    
    
    public static isvalidDescription(p_description: string): boolean
    {       
        const re = /^[\w\s]+$/g    
        return re.exec(p_description) && p_description.length >= 3 ? true : false
    }   
   
    activate(): void {
        this._active = true;
    }

    inactivate(): void {
        this._active = false;
    }

    get description(): string {
        return this._description;
    }

    get info()
    {
        return `ID: ${this.EntityID} Desc: ${this._description} Active: ${this._active}`
    }
}