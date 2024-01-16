let a = +prompt("Nhập vào số nguyên dương a");
let b = +prompt("Nhâp vào số nguyên dương b");

let sum = 0;

for( let i = a; i < b; i++){
    console.log(i);
    sum += i;
}

console.log("Tổng tất cả các số nguyên là ", +sum);