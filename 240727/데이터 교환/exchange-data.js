let [a, b, c] = [5, 6, 7];
temp = b;
b = a;
a = c;
c = temp;

console.log("%d\n%d\n%d", a, b, c);