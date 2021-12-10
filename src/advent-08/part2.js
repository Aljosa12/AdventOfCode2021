import { code, testCode } from './inputs8.js';

let res = 0;

function main() {
    code.map((el) => {
        res += parseInt(decoder(el));
    });
    console.log(res);
}
main();

function decoder(input) {
    let nine = [],
        six = [],
        five = [],
        three = [],
        two = [],
        zero = [];

    let [oneT, fourT] = getOneAndFourChar(input[0]);

    for (let i = 0; i < input[0].length; i++) {
        let checkOne = 0,
            checkFour = 0;
        for (let k = 0; k < input[0].length; k++) {
            if (input[0][i][k] === oneT[0] || input[0][i][k] === oneT[1]) checkOne++;
            if (input[0][i][k] === fourT[0] || input[0][i][k] === fourT[1]) checkFour++;
        }

        //Five
        if (input[0][i].length === 5 && checkOne === 1 && checkFour === 2) five = input[0][i].split('').sort();
        if (input[0][i].length === 5 && checkOne === 2) three = input[0][i].split('').sort();
        if (input[0][i].length === 5 && checkOne === 1 && checkFour === 1) two = input[0][i].split('').sort();

        // Six
        if (input[0][i].length === 6 && checkFour === 1 && checkOne === 2) zero = input[0][i].split('').sort();
        if (input[0][i].length === 6 && checkOne === 1 && checkFour === 2) six = input[0][i].split('').sort();
        if (input[0][i].length === 6 && checkFour === 2 && checkOne === 2) nine = input[0][i].split('').sort();
    }

    let num = '';

    // second array check
    input[1].map((el) => {
        let tempArr = JSON.stringify(el.split('').sort());

        if (el.length === 2) {
            num += '1';
        } else if (el.length === 4) {
            num += '4';
        } else if (el.length === 3) {
            num += '7';
        } else if (el.length === 7) {
            num += '8';
        } else if (tempArr === JSON.stringify(two)) {
            num += '2';
        } else if (tempArr === JSON.stringify(three)) {
            num += '3';
        } else if (tempArr === JSON.stringify(five)) {
            num += '5';
        } else if (tempArr === JSON.stringify(six)) {
            num += '6';
        } else if (tempArr === JSON.stringify(nine)) {
            num += '9';
        } else if (tempArr === JSON.stringify(zero)) {
            num += '0';
        }
    });

    // console.log(num);
    return num;
}

function getOneAndFourChar(signals) {
    let strOne = '',
        strFour = '';
    signals.map((el) => {
        if (el.length === 2) {
            strOne = el;
        } else if (el.length === 4) {
            strFour = el;
        }
    });

    for (let i = 0; i < strFour.length; i++) {
        if (strFour[i] === strOne[0] || strFour[i] === strOne[1]) {
            strFour = strFour.replace(strFour[i], '');
            i--;
        }
    }

    return [strOne, strFour];
}