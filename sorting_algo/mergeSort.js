function mergeSort(list) {
    let len = list.length;
    if (len <= 1)
        return list;
    let mid = len / 2;
    let left = list.slice(0, mid);
    let right = list.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left[0]);
            left.splice(0, 1);
        } else {
            result.push(right[0]);
            right.splice(0, 1);
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}

const list = [6, 2, 4, 1, 0, 5];
console.log(mergeSort(list, 0, list.length - 1));
