/**
 * Задание 6
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.
 */

const arr = ["1", "2", "32", 33, 1, 2, 3, null, true, false];

const firstItemType = typeof arr[0];
let allSameType = true;

for (let item of arr) {
    if (typeof item !== firstItemType) {
        allSameType = false;
        break;
    }
}

if (allSameType) {
    console.log(`Все элементы в массиве: ${firstItemType}`);
} else {
    console.log('Массив содержит разные типы элементов');
}



