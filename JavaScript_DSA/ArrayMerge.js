//Input arr1 = [1,2,3,1,4,6]
//       arr2 = [33,44,12,5]
//Output : [1,  2,  3,  1, 4,6, 33, 44, 12, 5]

let arrr1 = [1, 2, 3, 1, 4, 6]
let arrr2 = [33, 44, 12, 5]

function mergeArr(aar1, arr2) {
    let arr = [];
    for (let i = 0; i < arrr1.length; i++) {
        arr[i] = arrr1[i];
    }
    for (let j = 0; j < arrr2.length; j++) {
        arr[arrr1.length + j] = arrr2[j];
    }
    return arr;
}

console.log(mergeArr(arr1, arr2)) // [1,  2,  3,  1, 4,6, 33, 44, 12, 5]


// Array Merging using while loop

//Input arr1 = [3,7,12,34,56,90]
//      arr2 = [4,9,25,45]
//Output : [3,  4,  7,  9, 12, 25, 34, 45, 56, 90]

let arr1 = [3, 7, 12, 34, 56, 90]
let arr2 = [4, 9, 25, 45]
let arr3 = []

let i = 0, j = 0, k = 0;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i];
        i++;
    } else {
        arr3[k] = arr2[j]
        j++;
    }
    k++;
}

while (i < arr1.length) {
    arr3[k] = arr1[i];
    i++;
    k++;
}

console.log(arr3) // [3,  4,  7,  9, 12, 25, 34, 45, 56, 90]