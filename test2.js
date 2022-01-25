//finding leap year
function is_leap_year(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_leap_year(2022));

//using callback function
function A(x, Y) { // Y is a callback function
  // x==12; Y==B
  console.log("Received value: %s", x);
  Y(x); // B(12)
}

function B(c) {
  // c == 12;
  console.log(2 * c); // 24
}

function C()

A(12, B);