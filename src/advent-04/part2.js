import { boards, bingoNum } from './inputs4.js';

const bingoNumCheck = function(boards) {
    for (let i = 0; i < bingoNum.length; i++) {
        for (let k = 0; k < boards.length; k++) {
            const check = checkBoard(bingoNum[i], boards[k]);
            if (boards.length === 1 && check === true) {
                return [boards[0], bingoNum[i]];
            }
            if (check) {
                boards.splice(k, 1);
                i--;
            }
        }
    }

    function checkBoard(bingoNum, board) {
        for (let i = 0; i < board.length; i++) {
            for (let k = 0; k < board.length; k++) {
                if (board[i][k] == bingoNum) {
                    board[i][k] = board[i][k].toString();

                    if (checkColumnRow(i, k, board)) {
                        return true;
                    }
                }
            }
        }
    }

    function checkColumnRow(axisX, axisY, board) {
        let countRow = 0,
            countColumn = 0;
        /// Check row
        for (let i = 0; i < 5; i++) {
            if (typeof board[axisX][i] === 'string') {
                countRow++;
            }
        }
        /// Check column
        for (let k = 0; k < 5; k++) {
            if (typeof board[k][axisY] === 'string') countColumn++;
        }

        if (countRow === 5 || countColumn === 5) {
            return true;
        } else {
            return false;
        }
    }
};

const [winningBoard, winningNum] = bingoNumCheck(boards);

const calculateResult = function(board, num) {
    let sum = 0,
        res;
    for (let i = 0; i < board.length; i++) {
        for (let k = 0; k < board.length; k++) {
            if (typeof board[i][k] === 'number') sum += board[i][k];
        }
    }

    res = sum * parseInt(num);
    console.log(res, sum, parseInt(num));
};

calculateResult(winningBoard, winningNum);