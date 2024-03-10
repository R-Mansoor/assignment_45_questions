function city_country(city:string,country:string):string{
    return city+", "+country;
}

let first_pair:string = city_country("Karachi","Pakistan");
console.log(first_pair);
let second_pair:string = city_country("Lahore","Pakistan");
console.log(second_pair);
let third_pair:string = city_country("Rawalpindi","Pakistan");
console.log(third_pair);