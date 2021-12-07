import { coordinates, cord } from './inputs5.js';

const matrix = [];

fillMatrix();

showCoordinatesOnMatrix(matrix);

function showCoordinatesOnMatrix(matrix) {
    let count = 0;
    for (let i = 0; i < coordinates.length; i++) {
        let x1 = coordinates[i][0],
            x2 = coordinates[i][2],
            y1 = coordinates[i][1],
            y2 = coordinates[i][3];

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
        }
    }

    // Calculate result
    for (let n = 0; n < matrix.length; n++) {
        for (let nn = 0; nn < matrix.length; nn++) {
            if (matrix[n][nn] > 1) count++;
        }
    }

    console.log(count);
}

function fillMatrix() {
    for (let i = 0; i < 1000; i++) {
        let temp = [];
        for (let k = 0; k < 1000; k++) {
            temp.push('.');
        }
        matrix.push(temp);
    }
}

function biggerNum(num1, num2) {
    if (num1 > num2) {
        return [num1, num2];
    } else {
        return [num2, num1];
    }
}