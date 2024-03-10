"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(city + " is in " + country);
}
describe_city("Karachi", "Pakistan");
describe_city("Lahore", undefined);
describe_city("Bombay", undefined);
