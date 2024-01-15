function partition(list, low, high) {
    let pivot = list[high];
    let i = low - 1;
    for(let j = low; j < high; j++) {
        if(list[j] <= pivot) {
            i++;
            [list[i], list[j]] = [list[j], list[i]];
        }
    }
    [list[i+1], list[high]] = [list[high], list[i+1]];
    return i+1;
}

function quickSort(list, low, high) {
    if(low < high) {
        let pi = partition(list, low, high);
        quickSort(list, low, pi-1);
        quickSort(list, pi+1, high);
    }
    return list;
}

const list = [6, 2, 4, 1, 0, 5];
console.log(quickSort(list, 0, list.length-1));


