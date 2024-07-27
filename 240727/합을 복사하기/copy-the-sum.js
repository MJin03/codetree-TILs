let [a, b, c] = [1, 2, 3];
let d = a+b+c;

a = b = c = d;

console.log("%d %d %d", a, b, c);