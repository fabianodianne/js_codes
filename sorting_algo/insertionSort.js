function insertionSort(list) {
    const size = list.length;
    for (var i = 1; i < size; i++) {
        let key = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > key) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = key;
    }
    return list;
}

const list = [6, 2, 4, 1, 0, 5];
console.log(insertionSort(list));