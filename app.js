
const readline = require("readline-sync");
class Coffee{
    price=0;
    quantity=1;
    itemName=null;
    itemType=null;
    getQuantity(){
        return this.quantity;
    }
    setQuantity(){
        console.log(`Enter Quantity:`);
        let input=parseInt(readline.question());
        this.quantity=input;
        console.log(`Quantity Input: ${this.getQuantity()}`);
    }
    getPrice(){
        return this.price;
    }
    getName(){
        return this.itemName;
    }
    getType(){
        return this.itemType;
    }
    constructor(){
        console.log(`Choose options:
        1. Milk
        2. Cream
        3.Latte
        `)
        let input = parseInt(readline.question());
        if(input===1){this.itemType=`Milk`;this.Milk();}
        else if(input===2){this.itemType=`Cream`;this.Cream();}
        else if(input===3){this.itemType=`Latte`;this.Latte();}
        else console.log(`Error!!`);
        this.setQuantity();     
    }
}
class Espresso extends Coffee{
    constructor(){
        super();
        this.itemName= `Espresso`;
    }
    Milk(){
        this.price=60;
    }
    Cream(){
        this.price= 75;
    }
    Latte(){
        this.price= 100;
    }
}
class Cappuccino extends Coffee{
    constructor(){
        super();
        this.itemName= `Cappuccino`;
    }
    Milk(){
        this.price=80;
    }
    Cream(){
        this.price= 90;
    }
    Latte(){
        this.price= 125;
    }
}
class Latte extends Coffee{
    constructor(){
        super();
        this.itemName= `Latte`;
    }
    Milk(){
        this.price=100;
    }
    Cream(){
        this.price= 125;
    }
    Latte(){
        this.price= 150;
    }
}

function init(){
    const arr=[];
    let input;
    console.log(`======Menu======`);
    console.log(`1. Espresso`);
    console.log(`2. Cappuccino`);
    console.log(`3. Latte`);
    while(true){
        console.log(`Enter your choice:`);
        input=parseInt(readline.question());
        if(!(input>0 && input<=3)){
            console.log(`Error!! Try again`);
        }
        if(input===1)arr.push(new Espresso());
        if(input===2)arr.push(new Cappuccino());
        if(input===3)arr.push(new Latte());
        
        console.log(`Would you like to add somthing more?
1. Yes
2. No
`)
        input=parseInt(readline.question());
        if(input===2)break;
    }
    console.log(`=========== Bill ===========`);
    const bill=[];
    let totalQuantity=0;
    let totalAmount=0;
    for(let i=0;i<arr.length;i++){
        totalQuantity+=arr[i].getQuantity();
        totalAmount+=arr[i].getPrice()*arr[i].getQuantity();
        bill[i]={'Item Name': arr[i].getName() , 'Item Type': arr[i].getType() , 'Amount': arr[i].getPrice() , 'Quantity': arr[i].getQuantity() , 'Total Amount per Item': arr[i].getPrice()*arr[i].getQuantity()};
    }
    console.table(bill);
    console.table({'Total Quantity': totalQuantity,'Total Amount': totalAmount});
}

init();