import BinarySearchTree from "../data/BinarySearchTree";

export const bubbleSort = (arr) => {
    const array = [...arr];
    let n = array.length;
    let swapped;
    let startTime = performance.now();

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    let endTime = performance.now();
    return {sortedArray: array, time: endTime - startTime};
};

export const treeSort = (arr) => {
    const bst = new BinarySearchTree();
    let startTime = performance.now();

    // Вставляем каждый элемент из массива в двоичное дерево поиска
    arr.forEach((value) => {
        bst.insert(value);
    });

    const sortedArray = [];
    bst.inOrder(bst.root, (value) => {
        sortedArray.push(value);
    });

    let endTime = performance.now();
    return {sortedArray, time: endTime - startTime};
};

export const fillArrayWithRandomNumbers = (size, min, max) => {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arr;
}