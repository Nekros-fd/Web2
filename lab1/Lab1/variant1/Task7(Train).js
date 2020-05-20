class Train {
    constructor(number, wagons, way) {
        this.number = number;
        this.wagons = wagons;
        this.way = way;
    }
}

let sellsTickets = (collection,trains, tickets) => {
    let allTrains = {};
    let fin = {MaxTrain: '', MinTrain: '', min: 0, max: 0};


    trains.forEach(value => {

        allTrains[value.number] = 0;

        tickets.forEach(ticket => {

            if (value.number === ticket.train) allTrains[value.number] = allTrains[value.number] + 1;
        })
    });
    console.log(allTrains);

    let max = Object.values(allTrains)[0];
    let min = Object.values(allTrains)[0];

    for (let key in allTrains) {
        if (allTrains[key] > max) {
            fin.max = allTrains[key];
            fin.MaxTrain = key;
        }
        if (allTrains[key] < min) {
            fin.min = allTrains[key];
            fin.MinTrain = key;
        }
    }

    console.log(`Найбільше квитків (${fin.max}) продали на поїзд ${fin.MaxTrain}`);
    console.log(`Найменше квитків (${fin.min}) продали на поїзд ${fin.MinTrain}`);

};

module.exports = {
    Train,
    sellsTickets
};