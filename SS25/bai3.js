let n = +prompt("nhập vào số nguyên dương bất kì:");
let m= findMaxSum(n);


function findMaxSum(n) {
    let sum = 0;
    let m = 0;
  
    while (sum < n) {
      m++;
      sum += m;
    }
  
    return m;
  }
  
// for(let i = n; sum < m; i++){
//     m++;
//     sum += m;
// }



console.log("Số nguyên dương m lớn nhất là: " + m);