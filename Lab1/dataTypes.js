`use strict`;

const manyTypesArr = [`Hello World!`, 7845, -87, true, false, Infinity, `your advert could be here!`, 0, 65, ``, 0.00001, NaN]
const typeCounter = new Map ()
typeCounter.set(`string`, 0);
typeCounter.set(`number`, 0);
typeCounter.set(`boolean`, 0);

// I know it's inefficent
for (let item of manyTypesArr) {
    if (typeof item === `number`) typeCounter.set(`number` , typeCounter.get(`number`) + 1);
    if (typeof item === `string`) typeCounter.set(`string` , typeCounter.get(`string`) + 1);
    if (typeof item === `boolean`)typeCounter.set(`boolean`, typeCounter.get(`boolean`) + 1)
}

console.dir(typeCounter)





for (const key of typeCounter.keys()) {typeCounter.delete(key)}
console.dir(typeCounter)


for (let item of manyTypesArr) {
    let itemTypeStr = typeof item;
    if (!typeCounter.has(itemTypeStr)) typeCounter.set(itemTypeStr, 0)
    typeCounter.set(itemTypeStr, typeCounter.get(itemTypeStr) + 1)
    
}

console.dir(typeCounter)