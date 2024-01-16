let number = +prompt("Nhập vào số nguyên dương bât kì:");
let sum = 0;

for(let i = 0; i <= number; i++){
    sum += i;
    console.log(i);
}
if(sum % 2 ===0){
    sum += 1;
}

console.log("Tổng các số nguyên dương từ 1 đến", number, "là", sum);