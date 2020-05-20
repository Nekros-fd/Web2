class Ticket {
    constructor(train, number, date, sit) {
        this.train = train;
        this.number = number;
        this.date = date;
        this.sit = sit;
    }
}
let byeTicket = (collection,pass, ticket) => {
    pass.ticket = ticket.number;
    console.log(`Пасажир ${pass.name} купує квиток № ${pass.ticket}`)
};

module.exports = {
    Ticket,
    byeTicket
};
