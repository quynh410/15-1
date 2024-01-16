let n = prompt("Nhập n bất kì:");
let a = 0;
let b = 1;
let fibonacci;

for(let i = 1; i <= n; i++){
    fibonacci = a + b;
    b = a;
    a = fibonacci;
}

console.log("Fibonacci:" +fibonacci);