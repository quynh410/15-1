let n = +prompt("Nhập vào một số nguyên dương n:");
let sum = 1;

for (let i = 2; i <= n; i++) {
  sum += 1 / (i ** 3);
}

let ketQua = sum;
console.log("Kết quả: " + ketQua);