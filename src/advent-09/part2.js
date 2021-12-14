import { heatMap, heatMapTest, heat1 } from './inputs10.js';

const input = heat1;

let arr = [];

function main() {
    let largestFirst = 0;
    let largestSecond = 0;
    let largestThird = 0;
    let count = 0;

    //

    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input[i][0].length; k++) {
            // console.log(input[i][0][k]);
            if (input[i][0][k] !== '9' && input[i][0][k] !== '+') {
                count = 0;
                count = findBasins(k, i);
                if (count > 50) console.log(count);
                arr.push(count);
                // console.log(count, largestFirst, largestSecond);
                if (count > largestFirst) {
                    // arr.push(count);
                    largestThird = largestSecond;
                    largestSecond = largestFirst;
                    largestFirst = count;
                } else if (count > largestSecond) {
                    // arr.push(count);
                    largestThird = largestSecond;

                    largestSecond = count;
                } else if (count > largestThird) {
                    // arr.push(count);
                    largestThird = count;
                }
            }
        }
    }

    function findBasins(axisX, axisY) {
        // loop throu lines

        for (let i = axisY; i < 100; i++) {
            for (let k = axisX; k < 100; k++) {
                // console.log(k, i, input[i][0][k], input[i + 1] !== undefined && input[i + 1][0][k] !== '9');
                let check = false;
                // Če je zgoraj devet
                if (input[i - 1] !== undefined) {
                    if (input[i - 1][0][k] === '9' && input[i - 1][0][k + 1] !== '9') check = true;
                }
                count++;
                if (input[i][0][k] === '1') console.log(k, i, input[i][0][k], check);
                input[i][0] = input[i][0].substring(0, k) + '+' + input[i][0].substring(k + 1);

                // console.log(check);

                // if (check) console.log(k, i, input[i][0][k]);

                if (check && input[i - 1][0][k] !== '9') {
                    console.log('ECEX');
                }

                // Če je spodnja vrstica ni undefined in če spodnja številka ni 9
                if (input[i + 1] !== undefined && input[i + 1][0][k] !== '9' && input[i + 1][0][k] !== '+') {
                    let n = 1;

                    // Pojdi na začetek spodnje vrstice
                    while (true) {
                        // Če je zadnja leva številka undefined ali če je zadnja leva številka 9
                        if (input[i + 1][0][k - n] === undefined || input[i + 1][0][k - n] === '9') {
                            // console.log(input[i + 1][0][k - n + 1], 'ssss');
                            findBasins(k - n + 1, i + 1);

                            break;
                        } else if (input[i][0][k - n] !== '9') {
                            console.log('EXEC');
                            // findBasins(k - n, i);
                        }
                        n++;
                    }
                }

                if (input[i][0][k + 1] === undefined || input[i][0][k + 1] === '9') {
                    console.log('-----------');
                    return count;
                }
            }
        }
    }

    let res = largestFirst * largestSecond * largestThird;
    console.log(input);

    console.log(res, largestFirst, largestSecond, largestThird);
}

main();

arr.sort(function(a, b) {
    return b - a;
});

console.log(arr.indexOf(88));
console.log(98 * 98 * 89);