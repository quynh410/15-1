let number = prompt("Nhập vào số nguyên dương bất kì");

let sum = 0;
let count = 0;

for(let i = 2; sum < number;i += 2 ){
    console.log( i * i);
    sum += i * i;
    count ++;
}