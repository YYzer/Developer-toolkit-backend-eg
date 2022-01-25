//independent functions using callback
function A(x, Y) {
  //x==12; Y==B function A is taking function Y as a parameter where Y is a callback function
  console.log("Received value: %s", x);
  Y(x); //B(12)
}

function B(c) {
  //c==12;
  console.log(2 * c); //24
}

A(12, B);

//independent functions using callback
function print(x, power) {
  console.log("Value of x: ", x);
  power(x);
}

function square(a) {
  comsole.log("Square: ", a * a);
}

function cube(a) {
  console.log("cube: ", a * a * a);
}

print(2, cube);
