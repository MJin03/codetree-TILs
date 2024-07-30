const fs = require("fs");;
let n = fs.readFileSync(0).toString().trim().split(" ");

let h = Number(n[0]) / 100;
let w = Number(n[1]);

let b = parseInt(w / h**2);

if (b < 25) {
    console.log(b)
}
else {
    console.log(`${b}\nObesity`)
}