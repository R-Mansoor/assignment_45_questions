var names:string[] = [
    "Motorcycle",
    "Car",
    "Ship"
];

names.forEach((name:string,index:number)=>{
    if(name == "Motorcycle"){
        console.log(index+": I would like to own a : "+name);
    }else if(name == "Car"){
        console.log(index+": I would like to drive a : "+name);
    }else if(name == "Ship"){
        console.log(index+": I would like to sail a: "+name);
    }
});