// Input : [60,30,10,67,40]
// Output : [ 60, 30, 67, 40 ]

let arr = [60, 30, 10, 67, 40]
let removeEE = 10;
let possition = 2;

function removeElement(data, possition) {
    for (let i = possition; i < data.length - 1; i++) {
        console.log(data[i])
        data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    return data;
}

console.log(removeElement(arr, possition)) // [ 60, 30, 67, 40 ]