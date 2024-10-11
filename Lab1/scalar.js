`use strict`;

inc1 = (n) => (n += 1);
inc2 = (obj) => {
    obj.n += 1;
};

let a = 42;
let testObj = { n: 15 };

let b = inc1(a);
inc2(testObj);

console.dir(b);
console.dir(testObj);
