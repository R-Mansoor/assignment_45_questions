function describe_city(city:string,country:string = "Pakistan"){
    console.log(city+" is in "+country);
}

describe_city("Karachi","Pakistan");
describe_city("Lahore",undefined);
describe_city("Bombay",undefined);


export {};