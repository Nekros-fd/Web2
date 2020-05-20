'use strict';

const {combinations} = require('./Task2');
const {sFact} = require('./Task3');
const {maximum} = require('./Task4');
const {calendar} = require('./Task5');
const {func} = require('./Task6');
const { Passenger } = require('./Task7(Passenger)');
const { Ticket } = require('./Task7(Ticket)');
const { Train } = require('./Task7(Train)');
const {findPass} = require("./Task7(Passenger)");
const {byeTicket} = require("./Task7(Ticket)");
const {sellsTickets} = require("./Task7(Train)");


//Task 1
console.log('---------------Task 1---------------');

let mas = "Текст для розбиття";

let newMas = mas.split(' ');

console.log(newMas);

//Task 2
console.log('---------------Task 2---------------');
combinations('Пара')

//Task 3
console.log('---------------Task 3---------------');


let userNum = 5;
console.log(`${userNum}! = ${sFact(userNum)}`);

//Task 4
console.log('---------------Task 4---------------');

let qwerty = [1, 2, 3, 5, 5, 8, 9, 9, 1, 2, 3, 9, 5, 8, 9,9,9,9];

console.log(maximum(qwerty));

//Task 5
console.log('---------------Task 5---------------');

let month =3;
let year=1996;
console.log(`Year ${year} has 365 days and ${month} month has ${calendar(month,year)} days!!`);

//Task 6
console.log('---------------Task 6---------------');

let mass = [12, 40, 35, 12, 1, 8, 9, 52];

console.log(func(mass));

//task 7

console.log('---------------Task 7---------------');

let Passengers = [new Passenger('Roman', 1, 12389), new Passenger('Ylia', 2, 86976),
    new Passenger('Arsen', 21, 12343), new Passenger('Andrii', undefined, 876434)];

let Tikets = [new Ticket(10, 3, new Date(2020, 2, 12, 10, 30), 99),
    new Ticket(69, 21, new Date(202, 3, 13, 10, 30), 99),
    new Ticket(15, 2, new Date(2020, 4, 14, 10, 30), 99),
    new Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99),
    new Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99),
    new Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99)];

let Trains = [new Train(10, 5, 15), new Train(69, 8, 11),
    new Train(15, 7, 13), new Train(18, 3, 19)];

// Додавання нового пасажира в колекцію
console.log('\nДодавання нового пасажира в колекцію');

let addNewPass = (pass) => {
    Passengers.push(pass);
};

console.log(Passengers);

addNewPass(new Passenger('Ivan', 15, 75463));

console.log(Passengers);

// Редагування пасажира в колекції
console.log('\nРедагування пасажира в колекції');

let newInfoPass = (pass, ticket, document) => {
    pass.ticket = ticket;
    pass.document = document;
};

console.log(Passengers[0]);

newInfoPass(Passengers[0], 18, 24323);

console.log(Passengers[0]);

// Видалення пасажира з колекції
console.log('\nВидалення пасажира з колекції');

let deletePass = (pass) => {
    Passengers.forEach((value, index, array) => {
        if (pass.name === value.name &&
            pass.ticket === value.ticket &&
            pass.document === value.document) array.splice(index, 1)
    })
};

console.log(Passengers);

deletePass(Passengers[2]);

console.log(Passengers);

// Пошук одного пасажира в колекції
console.log('\nПошук одного пасажира в колекції');

findPass(Passengers,Passengers[0]);

// Додавання потяга в колекцію
console.log('\nДодавання потяга в колекцію');

let addNewTrain = (train) => {
    Trains.push(train);
};

console.log(Trains);

addNewTrain(new Train(45, 16, 7));

console.log(Trains);
// Редагування потяга в колекції
console.log('\nРедагування потяга в колекції');

let editTrain = (train, newWagons, newWay) => {
    train.wagons = newWagons;
    train.way = newWay;
};

editTrain(Trains[2], 44, 22);
console.log(Trains);

// Видалення потяга з колекції
console.log('\nВидалення потяга з колекції');

let deleteTrain = (train) => {
    Trains.forEach((value, index, array) => {
        if (train.number === value.number &&
            train.wagons === value.wagons &&
            train.way === value.way) array.splice(index, 1)

    })
};

deleteTrain(Trains[0]);

console.log(Trains);

// Пошук одного потяга в колекції
console.log('\nПошук одного потяга в колекції');


let findTrain = (train) => {
    let oveTrain;

    Trains.forEach((value, index) => {

        if (value.number === train.number &&
            value.wagons === train.wagons &&
            value.way === train.way) oveTrain = value;
    });
    if (oveTrain !== undefined) console.log(`Наш потяг номер ${train.number} з шляхом ${train.way}`);
    else console.log('Такого потяга не існує у колекції!')

};

findTrain(Trains[3]);

// Покупка пасажиром квитка на потяг
console.log('\nПокупка пасажиром квитка на потяг');


byeTicket(Passengers,Passengers[3], Tikets[0]);

// Зміна квитка із одного потяга на інший
console.log('\nЗміна квитка із одного потяга на інший');

let changeTicket = (pass, ticket) => {
    let oldTicket = pass.ticket;
    pass.ticket = ticket.number;
    if (oldTicket === ticket.number) console.log('Ми не можемо замінити квиток на такий же! Виберіть інший квиток.');
    else console.log(`Пасажир ${pass.name} змінює квиток № ${oldTicket} на квиток №${pass.ticket}!`)
};

changeTicket(Passengers[2], Tikets[0]);

// Скасування покупки квитка
console.log('\nСкасування покупки квитка');
let cancelTicket = (pass) => {
    let oldTicket = pass.ticket;
    pass.ticket = undefined;
    if (oldTicket === undefined) console.log(`Пасажир ${pass.name} ітак не має квитка!!!`)
    else console.log(`Пасажир ${pass.name} відміняє квиток № ${oldTicket}!!!`)
    console.log(pass);
}

cancelTicket(Passengers[0]);

//Пошук потяга на який продали найбільше/найменше квитків
console.log('\nПошук потяга на який продали найбільше/найменше квитків');


sellsTickets(Trains,Trains, Tikets);