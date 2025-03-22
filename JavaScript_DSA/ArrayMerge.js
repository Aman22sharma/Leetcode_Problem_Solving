//Input arr1 = [1,2,3,1,4,6]
//       arr2 = [33,44,12,5]
//Output : [1,  2,  3,  1, 4,6, 33, 44, 12, 5]

let arr1 = [1, 2, 3, 1, 4, 6]
let arr2 = [33, 44, 12, 5]

function mergeArr(aar1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        arr[i] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        arr[arr1.length + j] = arr2[j];
    }
    return arr;
}

console.log(mergeArr(arr1, arr2)) // [1,  2,  3,  1, 4,6, 33, 44, 12, 5]