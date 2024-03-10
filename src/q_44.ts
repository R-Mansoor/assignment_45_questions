let sandwich_item:string[] = [
    "tomato",
    "chicken",
    "onion",
    "cheese",
];

function order(items:string[],no_of_item:number){

    if(no_of_item <=4 &&no_of_item >=1){
        for(let i=1;i<= no_of_item;i++ ){
            console.log(items[i-1]);
        }
    }else{
        console.log("Invalid no of items")
    }

}

order(sandwich_item,1);