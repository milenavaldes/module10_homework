/**
 * Задание 5
 * 
 * Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
 * 
 */


const arr = [1, '6', 'Hello, world!', true, '', null, NaN, undefined, 100500];

console.log(arr.length);

for (let item of arr) {
    console.log(item);
}

