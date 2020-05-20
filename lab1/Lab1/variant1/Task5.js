exports.calendar = (month, year) => {
    let days = new Date(year, month, 0).getDate();

        return days;
};