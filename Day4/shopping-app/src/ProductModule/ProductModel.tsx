export class ProductModel{
    // public id = 0;
    // public title = "";
    // public price = 0;
    // public stock = 0;

    // constructor(pid:number,ptitle:string,pprice:number,pstock:number){
    //     this.id = pid;
    //     this.title = ptitle;
    //     this.price=pprice;
    //     this.stock = pstock;
    // }
    constructor(public id:number =0,public title:string="",public price:number=0,
    public stock:number=0,public thumbnail:string=""){
        
    }
}