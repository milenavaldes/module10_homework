/*
Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

let str = 'А роза упала на лапу Азора'

let polindrome = str.split('').reverse().join('');
console.log(polindrome);