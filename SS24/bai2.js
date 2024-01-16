let a = +prompt("NHập vào số nguyên a:");
let b = +prompt("Nhập vào số nguyên b:");

let sum = 0;

for (let i = a; i < b; i++) {
  sum += i;
  console.log(i);
}

console.log("Tổng các số nguyên trong khoảng giữa", a, "và", b, "là:", sum);