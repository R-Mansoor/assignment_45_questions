var locations:string[] = [
    "Japan",
    "Canada",
    "America",
    "Switzerland",
];


var sorted_locations:string[] = [...locations].sort();

console.log("sorted Locations");
console.log(sorted_locations);
console.log("Unsorted Locations");
console.log(locations);

var reverse_sorted_locations:string[] = [...locations].sort().reverse();
console.log("reverse sorted Locations");
console.log(reverse_sorted_locations);
console.log("Unsorted Locations");
console.log(locations);

locations.reverse();
console.log("locations array reversed");
console.log(locations);
console.log("locations array reversed again to original array");
locations.reverse();
console.log(locations);
locations.sort();
console.log("locations original array sorted in alphabetical order");
console.log(locations);
locations.reverse();
console.log("locations original array sorted in alphabetical order and reversed");
console.log(locations);

