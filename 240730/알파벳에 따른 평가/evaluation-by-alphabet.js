const fs = require("fs");
let n = fs.readFileSync(0).toString().trim();

if (n == "S") {
    console.log("Superior")
}
else if (n == "A") {
    cnosole.log("Excellent")
}
else if (n == "B") {
    console.log("Good")
}
else if (n == "C") {
    console.log("Usually")
}
else if (n == "D") {
    console.log("Effort")
}
else {
    console.log("Failure")
}