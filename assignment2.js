/***********************************
Задание 2

Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно.
При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 
 *************************************/

const x = false;

let value = typeof x

switch (value) {
    case 'undefined':
        console.log(x + ' это Undefined');
        break;
    case 'object':
        if (value === null) {
            console.log(x + ' это Null');
        } else {
            console.log(x + ' это Object');
        }
        break;
    case 'boolean':
        console.log(x + ' это Boolean');
        break;
    case 'number':
        console.log(x + ' это Number');
        break;
    case 'string':
        console.log(x + ' это String');
        break;
    case 'symbol':
        console.log(x + ' это Symbol');
        break;
    case 'bigint':
        console.log(x + ' BigInt');
        break;
    default:
        console.log('Неизвестный тип данных');
}





/* 

Этот код я использовала для тестирования, мне кажется для проверки тоже удобно :)

const types = [
    undefined,      // Undefined
    null,           // Null
    true,           // Boolean
    42,             // Number
    "Hello",        // String
    Symbol("id"),   // Symbol
    123n,           // BigInt
    { name: "John" } // Object
];

for (let i in types) {
    switch (typeof types[i]) {
        case 'undefined':
            console.log('Это Undefined');
            break;
        case 'object':
            if (types[i] === null) {
                console.log('Это Null');
            } else {
                console.log('Это Object');
            }
            break;
        case 'boolean':
            console.log('Это Boolean');
            break;
        case 'number':
            console.log('Это Number');
            break;
        case 'string':
            console.log('Это String');
            break;
        case 'symbol':
            console.log('Это Symbol');
            break;
        case 'bigint':
            console.log('Это BigInt');
            break;
        default:
            console.log('Неизвестный тип данных');
    }
}
*/
