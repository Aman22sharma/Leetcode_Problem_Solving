// input arr = [60, 30, 10, 67, 40]
// output arr = [60, 30, 25, 10, 67, 40]

let arr = [60, 30, 10, 67, 40]
let newE = 25;
let possition = 2;

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
    if (i >= possition) {
        arr[i + 1] = arr[i];
        if (i == possition) {
            arr[i] = newE;
        }
    }
}

console.log(arr) // [60, 30, 25, 10, 67, 40]