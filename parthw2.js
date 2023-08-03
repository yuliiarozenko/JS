// Exercise 1

const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];
const sumOfNumbers = nums1.reduce((acc, number) => acc + number, 0);
console.log(sumOfNumbers);

// Exercise 2 Напишите программу которая добавит в массив namesObject объекты
// с двумя парами { name: "имя с большой буквы", nameLength: "длина имени"}
const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
// const namesObject = [
    // {
    //     name: 'Jack', 
    //     nameLenght: {
    //         const string = 'Jack';
    //         console.log(string.length);
    //     }
    // }
    // {
    //     name: 'Sarah',
    //     nameLenght: 
    // },
    // {
    //     name: 'Mary',
    //     nameLenght:
    // },
    // {
    //     name: 'Joey',
    //     nameLenght:
    // },
    // {
    //     name: 'Chris',
    //     nameLenght:
    // },
    // {
    //     name: 'Samanta',
    //     nameLenght:
    // }
// ];
// console.log(namesObject);



// Exercise 3 Напишите программу которая в массив numsRes добавит объекты
// с тремя парами { number: "само число", square: "число в квадрпате", cube: "число в кубе"}
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numsRes = [
//     {
//         number: {console.log(nums2[0])}
//     }
// ];
// console.log(numsRes);


// Exercise 4  Используйте forEach чтобы в массив 'reversedNumberRow'
// добавить те же числа, но в обратном порядке.
const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];


// Exercise 5  Для каждой машины в массиве используйте "forEach"
// что-бы вывести в консоль строку типа:
// This is green Jaguar. It costs 7000€.

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    } 
];

cars.forEach(infoCar => {
    console.log(`This is ${infoCar.color} ${infoCar.make}. It costs ${infoCar.price}€`);
    });


// Exercise 6  напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];

const evens = numsArray.filter(num => num % 2 === 0);
const sumOfEvensNumbers = evens.reduce((acc, number) => acc + number, 0);
console.log(sumOfEvensNumbers);



// Exercise 7  Напишите программу которая проанализирует данный массив с объектами
// и добавит в новый массив только имена тех людей кому 18 и старше

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

const adult = people.filter(person => person.age >= 18);
console.log(adult);



// Exercise 8  напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];



// Exercise 9  напишите программу которая возьмёт из данного массива наисенования книг которые вышли в этом году
// и добавит их в новый массив

const books = [
    {
        author: 'Jeremy Brook',
        title: 'My childhood',
        release: 2023
    },
    {
        author: 'Samantha Jhones',
        title: 'Living with ten cats',
        release: 2020
    },
    {
        author: 'Bob Summers',
        title: 'Exploring far space',
        release: 2021
    },
    {
        author: 'Bill Brown',
        title: 'Insects in our garden',
        release: 2023
    },
    {
        author: 'Jessica Love',
        title: 'Programming for begginers',
        release: 2023
    }
];

const newBooks = books.filter(infoBook => infoBook.release === 2023);
console.log(newBooks);



// Exercise 10  Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

const maxValue = Math.max(...numbers);
console.log(maxValue);


// Exercise 11  напишите программу которая найдёт самого старшего человека в данном массиве с объектами
// и сохранит его в переменную oldestPerson
const people2 = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

const oldestPerson = people2.filter(person => person.age > 50);
console.log(oldestPerson);
