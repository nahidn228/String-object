let computer = {
  brand: "accer",
  price: 35000,
  processor: "intel",
  hdd: "512gb",
};

//for of = array
//for in = object

for ( let prop in computer){
  //console.log(prop)
// brand
// price
// processor
// hdd

console.log(prop)
console.log(computer[prop])
// brand
// accer
// price
// 35000
// processor
// processor
// intel
// hdd
// 512gb

}