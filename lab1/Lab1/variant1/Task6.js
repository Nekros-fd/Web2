exports.func = function QuickSort(A) {
    if (A.length === 0) return [];
    let a = [], b = [], p = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] < p) a[a.length] = A[i];
        else b[b.length] = A[i];
    }
    return QuickSort(a).concat(p, QuickSort(b));
}