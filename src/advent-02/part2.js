import { inputs } from './inputs2.js';

function calc(input) {
    let horizontalPos = 0,
        depthPos = 0,
        aimPos = 0,
        res;

    for (let i = 0; i < input.length; i++) {
        console.log('test');
        switch (inputs[i][0]) {
            case 'forward':
                horizontalPos += inputs[i][1];
                depthPos += aimPos * inputs[i][1];
                break;
            case 'down':
                aimPos += inputs[i][1];
                break;
            case 'up':
                aimPos -= inputs[i][1];
                break;
            default:
                console.log('Invalid input');
        }
    }
    res = horizontalPos * depthPos;
    return res;
}

console.log(calc(inputs));