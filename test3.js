//Printing Hi, name!

let names = ["AA", "BB", "CC","DD"];

names.forEach((x) => {
    console.log("Hi, %s!", x);
});


//finding product of these numbers

let numbers = [1, 2, 3, 4, 5, 6];
product = 1;

numbers.forEach((x) => {
  product = product * x;
});

console.log("Product: ", product);
