import { map, parantehsisMap } from './inputs10.js';

const brackets = [
    ['(', ')', 3],
    ['[', ']', 57],
    ['{', '}', 1197],
    ['<', '>', 25137],
];

const main = function(input) {
    let res = 0;
    input.map((el) => {
        el = syntaxCheck(el);
        res += findBackTick(el);
    });
    console.log(res);
};

main(map);

// -----------------------------------------------------------------

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