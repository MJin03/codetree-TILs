const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if (n>=3 && n<=5) {
    console.log("Spring")
}
else if (n>=6 && n<=8) {
    console.log("Summer")
}
else if (n>=9 && n<=11) {
    console.log("Fall")
}
else {
    console.log("Winter")
}