import { fish, testFish } from './inputs5.js';

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const input = fish;
const days = 156;

countFish(input, days);

// for (let k = 0; k < input.length; k++) {
//     if (arr[k] === 0) arr[k] += 1;
// }

// console.log(arr);

function countFish(input, days) {
    let counter = 0;
    for (let i = 0; i < days; i++) {
        for (let k = 0; k < input.length; k++) {
            if (input[k] === 0) {
                input[k] = 6;
                input.push(9);
                counter++;
            } else {
                input[k]--;
            }
        }
    }
    console.log(counter);
}