import { crabs, testCrabs } from './inputs7.js';

const input = crabs;

function alignCrabs(input) {
    let bestScore = 0,
        day = 0,
        res = 0;
    while (true) {
        let curScore = 0;
        for (let k = 0; k < input.length; k++) {
            let temp = input[k] - day,
                fuel = 0;
            if (temp < 0) temp *= -1;
            for (let fuelRate = 1; fuelRate < temp + 1; fuelRate++) {
                fuel += fuelRate;
            }
            curScore += fuel;
        }
        if (day === 0) bestScore = curScore;
        if (curScore <= bestScore) {
            res = day;
            bestScore = curScore;
        } else {
            console.log('day:', day, 'fuel:', bestScore);
            return false;
        }
        day++;
    }
}

alignCrabs(input);