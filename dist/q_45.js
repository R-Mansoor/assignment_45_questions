"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(i_manufacturer, i_model_no, keys, values) {
    let car;
    car = {
        manufacturer: i_manufacturer,
        model_no: i_model_no
    };
    for (let i = 0; i < keys.length; i++) {
        car[keys[i]] = values[i];
    }
    return car;
}
let car_obj = createCar('asd', 'asd', ['color', 'type'], ['red', 'heavy']);
console.log(car_obj);
