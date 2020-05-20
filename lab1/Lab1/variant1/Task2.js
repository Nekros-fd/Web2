function make(arr, el) {
    let i, i_m, item;
    let len = arr.length;
    let res = [];

    for (i = len; i >= 0; i--) {
        res.push(
            ([]).concat(
                arr.slice(0, i),
                [el],
                arr.slice(i, i_m)
            )
        );
    }



    return res;
}

exports.combinations = (arr) => {
    let prev, curr, el, i;
    let len = arr.length;
    curr = [[arr[0]]];

    for (i = 1; i < len; i++) {
        el = arr[i];
        prev = curr;
        curr = [];

        prev.forEach(function (item) {
            curr = curr.concat(
                make(item, el)
            );
        });
    }

    curr.forEach(value => {
        value = value.join()
        console.log(value);
    })
    return curr;
}
