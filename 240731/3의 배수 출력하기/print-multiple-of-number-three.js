let i = 1;
let result = "";

const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

while(i<=n) {
    if(i%3==0) {
        result += i + " ";
    }

    i++;
}

console.log(result);