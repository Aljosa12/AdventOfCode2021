import { map, parantehsisMap } from './inputs10.js';

const brackets = [
    ['(', ')', 3, 1],
    ['[', ']', 57, 2],
    ['{', '}', 1197, 3],
    ['<', '>', 25137, 4],
];

const main = function(input) {
    let arr = [];
    input.map((el) => {
        el = syntaxCheck(el);
        if (findBackTick(el) === 0) arr.push(el);
    });

    let res = findMiddle(arr);
    console.log(res);
};

main(map);

// -----------------------------------------------------------------

function findMiddle(arr) {
    let finalArr = [];
    arr.map((el) => {
        let totalScore = 0;
        for (let i = el.length - 1; i >= 0; i--) {
            switch (el[i]) {
                case brackets[0][0]:
                    totalScore = totalScore * 5 + 1;
                    break;
                case brackets[1][0]:
                    totalScore = totalScore * 5 + 2;
                    break;
                case brackets[2][0]:
                    totalScore = totalScore * 5 + 3;
                    break;
                case brackets[3][0]:
                    totalScore = totalScore * 5 + 4;
                    break;
                default:
                    // code block
            }
        }
        // console.log(totalScore, el);
        finalArr.push(totalScore);
    });

    finalArr = finalArr.sort(function(a, b) {
        return a - b;
    });
    var value = finalArr[(finalArr.length / 2) | 0];
    return value;
}

function syntaxCheck(inpt) {
    while (true) {
        let check = false;
        for (let i = 0; i < inpt.length; i++) {
            for (let k = 0; k < brackets.length; k++) {
                if (inpt[i] === brackets[k][0] && inpt[i + 1] === brackets[k][1]) {
                    check = true;

                    const leftHalf = inpt.substr(0, i),
                        rightHalf = inpt.substr(i + 2, inpt.length);

                    inpt = leftHalf + rightHalf;
                    i--;
                }
            }
        }
        if (!check) {
            return inpt;
        }
    }
}

function findBackTick(res) {
    let score = 0;
    for (let k = 0; k < res.length; k++) {
        let checkOne = false,
            checkTwo = 0;
        for (let i = 0; i < brackets.length; i++) {
            if (res[k] === brackets[i][0]) checkOne = true;
            if (res[k + 1] === brackets[i][1]) checkTwo = brackets[i][2];
        }

        if (checkOne && checkTwo !== 0) score = checkTwo;
    }
    return score;
}