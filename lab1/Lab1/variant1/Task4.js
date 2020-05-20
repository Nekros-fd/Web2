let max = 0;
exports.maximum = (arr) => {

    let resultProc = {};
    arr.forEach(value => resultProc[value] = resultProc[value] + 1 || 1);
    for (let prop in resultProc)
        if (resultProc[prop] > max)
            max = prop;

    return max;
};