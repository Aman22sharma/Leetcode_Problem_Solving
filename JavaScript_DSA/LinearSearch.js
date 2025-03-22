// Input : [60,30,10,67,40]
// Output : 1

let arr = [60, 30, 10, 67, 40]
let searchE = 30;
let index;

function search(data, ele) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === ele) {
            index = i;
            break;
        }
    }
    return index;
}

console.log(search(arr, searchE)) // Output : 1