/*
let arr = [];
for (let i = 1; i <= 10000000; i++) {
    arr.push({
        id: i,
        name: `person ${i}index`
    });
}
console.time("search time - array");
const target = arr.find(value => value.id === 8000000);
console.timeEnd("search time - array");
// 57ms timeout
*/

/*
const obj = {};
for (let i = 1; i <= 10000000; i++) {
    obj[i] = {
        id: i,
        name: `사람 ${i}번`
    };
}

console.time("search time - object");
const target = obj["8000000"];
console.timeEnd("search time - object");
// 0.05ms timeout
*/
