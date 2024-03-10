function createCar(i_manufacturer: string, i_model_no: string, keys: string[], values: any[]): any {
    let car: {
        manufacturer: string,
        model_no: string,
        [key: string]: any
    };

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

export {};
