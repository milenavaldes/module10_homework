/**
 * Задание 7

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
 */


const arr = [1,2,3,0,4,5,6,0,'Hi there!', '&', null, NaN];

let arrOdd = [];

let arrEven = [];

let arrZero = [];

let arrOthers = [];

for (let item of arr) {
    
    if (typeof item === 'number'){
            if (isNaN(item)) {
            arrOthers.push(item);
        } else if (item === 0) {
            arrZero.push(item);
        } else {
            item % 2 === 0 ? arrEven.push(item) : arrOdd.push(item);
        }
    }
    else {
        arrOthers.push(item);
    }
}
console.log("В массиве найдено:")
console.log(`Четных чисел: ${arrEven.length} `)
console.log(`Нечетных чисел: ${arrOdd.length} `)
console.log(`Нулей ${arrZero.length}`)
console.log(`Других элементов ${arrOthers.length}`)