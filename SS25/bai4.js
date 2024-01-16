let n = +prompt("Nhập vào số nguyên dương bất kì:");
let S = 0;
let P = 1;

if(n < 0){
    console.log("không hợp lệ:")
}else{
    for(let i = 1; i <= n; i++){
        P = P * i;
        S = S + P;
      }
      console.log("Giá trị của biểu thức là:" +S);
}




//   console.log("Giá trị của biểu thức là:" +S);