let n = +prompt("Nhập vào số nguyên dương bất kì");
let sum = 0;

if(n < 0){
    console.log("Không hợp lệ");
}else{
    for(let i = 0; i <= n; i++);
        console.log(i);
        if(i % 2 === 0){
            sum ++;
        }
}
console.log("Số chẵn là " +sum);