import { coordinates, cord } from './inputs5.js';

const input = coordinates; // cord
const matrixLength = 1000;

const matrix = [];

fillMatrix();

showCoordinatesOnMatrix(matrix);

function showCoordinatesOnMatrix(matrix) {
    for (let i = 0; i < input.length; i++) {
        let x1 = input[i][0],
            x2 = input[i][2],
            y1 = input[i][1],
            y2 = input[i][3];

        if (x1 === x2) {
            let [bigNum, smallnum] = biggerNum(y1, y2);
            for (let k = smallnum; k <= bigNum; k++) {
                typeof matrix[k][x1] === 'string' ?
                    (matrix[k][x1] = 1) :
                    (matrix[k][x1] += 1);
            }
        } else if (y1 === y2) {
            let [bigNum, smallnum] = biggerNum(x1, x2);
            for (let k = smallnum; k <= bigNum; k++) {
                typeof matrix[y1][k] === 'string' ?
                    (matrix[y1][k] = 1) :
                    (matrix[y1][k] += 1);
            }
        } else {
            let tempArrX = [],
                tempArrY = [];

            y1 > y2 ?
                (tempArrY = calcSmaller(y1, y2)) :
                (tempArrY = calcBigger(y1, y2));

            x1 > x2 ?
                (tempArrX = calcSmaller(x1, x2)) :
                (tempArrX = calcBigger(x1, x2));
            for (let x = 0; x < tempArrX.length; x++) {
                tempArrX[x].push(parseInt(tempArrY[x]));
            }
            for (let el = 0; el < tempArrX.length; el++) {
                if (matrix[tempArrX[el][1]][tempArrX[el][0]] >= 1) {
                    matrix[tempArrX[el][1]][tempArrX[el][0]] =
                        matrix[tempArrX[el][1]][tempArrX[el][0]] + 1;
                } else {
                    matrix[tempArrX[el][1]][tempArrX[el][0]] = 1;
                }
            }
        }
    }
    // Calculate result
    let count = 0;
    for (let n = 0; n < matrix.length; n++) {
        for (let nn = 0; nn < matrix.length; nn++) {
            if (matrix[n][nn] > 1 && matrix[n][nn] !== '.') count++;
        }
    }

    console.log(count);
}

function fillMatrix() {
    for (let i = 0; i < matrixLength; i++) {
        let temp = [];
        for (let k = 0; k < matrixLength; k++) {
            temp.push('.');
        }
        matrix.push(temp);
    }
}

function calcSmaller(val1, val2) {
    let arr = [];
    for (let i = val1; i >= val2; i--) {
        arr.push([i]);
    }
    return arr;
}

function calcBigger(val1, val2) {
    let arr = [];
    for (let i = val1; i <= val2; i++) {
        arr.push([i]);
    }
    return arr;
}

function biggerNum(num1, num2) {
    if (num1 > num2) {
        return [num1, num2];
    } else {
        return [num2, num1];
    }
}