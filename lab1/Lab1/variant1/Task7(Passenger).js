class Passenger {
	constructor(name, ticket, document) {
		this.name = name;
		this.ticket = ticket;
		this.document = document;
	}

}

let findPass = (Collection,pass) => {
	let ovePass;

	Collection.forEach((value, index) => {

		if (value.name === pass.name &&
			value.ticket === pass.ticket &&
			value.document === pass.document) ovePass = value;
	});
	if (ovePass !== undefined) console.log(`Наш пасажир: ${ovePass.name} з квитком ${ovePass.ticket}`);
	else console.log('Такого пасажира не існує у колекції!')

};

module.exports = {
	Passenger,
	findPass
};
