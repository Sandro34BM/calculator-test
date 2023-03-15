export class Calculator{
    public add(a:number, b:number):number{
        return a + b;
    }

    public substract(a:number, b:number):number{
        return a - b;
    }

    public multiply(a:number, b:number):number{
        return a * b;
    }

    public divide(a:number, b:number):any{
        let res:any;
        if(b != 0){
            res = a / b;
        }
        else{
            res = null;
        }

        return res;
        
    }
}