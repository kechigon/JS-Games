let ans_table = new Array(4);

for (let i = 0; i < 4; i++) {
  ans_table[i] = new Array(4).fill(0);
}

let is_answered = new Array(4);

for (let i = 0; i < 4; i++) {
  is_answered[i] = new Array(4).fill(false);
}

let count = 0;

let now_focus = undefined;

generateAnswer();

showHints();

function checkCanBePlaced(i, j, num) {
    check_list = [] 
    if ((0 <= i && i <= 1) && (0 <= j && j <= 1)) {
        check_list.push(ans_table[0][0]);
        check_list.push(ans_table[0][1]);
        check_list.push(ans_table[1][0]);
        check_list.push(ans_table[1][1]);
        if (i == 0) {
            check_list.push(ans_table[0][2]);
            check_list.push(ans_table[0][3]);
        }
        else {
            check_list.push(ans_table[1][2]);
            check_list.push(ans_table[1][3]);
        }
        if (j == 0) {
            check_list.push(ans_table[2][0]);
            check_list.push(ans_table[3][0]);
        }
        else {
            check_list.push(ans_table[2][1]);
            check_list.push(ans_table[3][1]);
        }
    }
    if ((0 <= i && i <= 1) && (2 <= j && j <= 3)) {
        check_list.push(ans_table[0][2]);
        check_list.push(ans_table[0][3]);
        check_list.push(ans_table[1][2]);
        check_list.push(ans_table[1][3]);
        if (i == 0) {
            check_list.push(ans_table[0][0]);
            check_list.push(ans_table[0][1]);
        }
        else {
            check_list.push(ans_table[1][0]);
            check_list.push(ans_table[1][1]);
        }
        if (j == 2) {
            check_list.push(ans_table[2][2]);
            check_list.push(ans_table[3][2]);
        }
        else {
            check_list.push(ans_table[2][3]);
            check_list.push(ans_table[3][3]);
        }
    }
    if ((2 <= i && i <= 3) && (0 <= j && j <= 1)) {
        check_list.push(ans_table[2][0]);
        check_list.push(ans_table[2][1]);
        check_list.push(ans_table[3][0]);
        check_list.push(ans_table[3][1]);
        if (i == 2) {
            check_list.push(ans_table[2][2]);
            check_list.push(ans_table[2][3]);
        }
        else {
            check_list.push(ans_table[3][2]);
            check_list.push(ans_table[3][3]);
        }
        if (j == 0) {
            check_list.push(ans_table[0][0]);
            check_list.push(ans_table[1][0]);
        }
        else {
            check_list.push(ans_table[0][1]);
            check_list.push(ans_table[1][1]);
        }
    }
    if ((2 <= i && i <= 3) && (2 <= j && j <= 3)) {
        check_list.push(ans_table[2][2]);
        check_list.push(ans_table[2][3]);
        check_list.push(ans_table[3][2]);
        check_list.push(ans_table[3][3]);
        if (i == 2) {
            check_list.push(ans_table[2][0]);
            check_list.push(ans_table[2][1]);
        }
        else {
            check_list.push(ans_table[3][0]);
            check_list.push(ans_table[3][1]);
        }
        if (j == 2) {
            check_list.push(ans_table[0][2]);
            check_list.push(ans_table[1][2]);
        }
        else {
            check_list.push(ans_table[0][3]);
            check_list.push(ans_table[1][3]);
        }
    }
    if (check_list.includes(num)) return false;
    else return true;
}

function generateAnswer() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let nums = [1, 2, 3, 4];
            while (true) {
                let index = Math.floor(Math.random() * nums.length);
                if (checkCanBePlaced(i, j, nums[index])) {
                    ans_table[i][j] = nums[index];
                    break;
                }
                else nums.splice(index, 1);
            }
        }
    }
}

function showHints() {
    let cells = [[0, 0], [0, 1], [0, 2], [0, 3],
                 [1, 0], [1, 1], [1, 2], [1, 3],
                 [2, 0], [2, 1], [2, 2], [2, 3],
                 [3, 0], [3, 1], [3, 2], [3, 3]
                ];
    for (let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * cells.length);
        let cell = cells[index];
        is_answered[cell[0]][cell[1]] = true;
        count++;
        document.getElementById('sudokuCell' + new String(cell[0]) + '-' + new String(cell[1])).innerHTML = ans_table[cell[0]][cell[1]];
        cells.splice(index, 1);
    }
}

function onCellClick(id) {
    if (now_focus !== undefined) document.getElementById(now_focus).style.background = '#ffffff';
    now_focus = id;
    document.getElementById(id).style.background = '#dddddd';  
}

function on1ButtonClick() {
    if (now_focus === undefined) return;
    let i = Number(now_focus.substr(10, 1));
    let j = Number(now_focus.substr(12));
    if (is_answered[i][j]) return;
    let elm = document.getElementById(now_focus);
    elm.innerHTML = "1";
    if (ans_table[i][j] == 1) {
        elm.style.color = "#4682b4";
        is_answered[i][j] = true;
        count++;
        if (count == 16) clear();
    }
    else elm.style.color = "#ff4500";
}

function on2ButtonClick() {
    if (now_focus === undefined) return;
    let i = Number(now_focus.substr(10, 1));
    let j = Number(now_focus.substr(12));
    if (is_answered[i][j]) return;
    let elm = document.getElementById(now_focus);
    elm.innerHTML = "2";
    if (ans_table[i][j] == 2) {
        elm.style.color = "#4682b4";
        is_answered[i][j] = true;
        count++;
        if (count == 16) clear();
    }
    else elm.style.color = "#ff4500";
}

function on3ButtonClick() {
    if (now_focus === undefined) return;
    let i = Number(now_focus.substr(10, 1));
    let j = Number(now_focus.substr(12));
    if (is_answered[i][j]) return;
    let elm = document.getElementById(now_focus);
    elm.innerHTML = "3";
    if (ans_table[i][j] == 3) {
        elm.style.color = "#4682b4";
        is_answered[i][j] = true;
        count++;
        if (count == 16) clear();
    }
    else elm.style.color = "#ff4500";
}

function on4ButtonClick() {
    if (now_focus === undefined) return;
    let i = Number(now_focus.substr(10, 1));
    let j = Number(now_focus.substr(12));
    if (is_answered[i][j]) return;
    let elm = document.getElementById(now_focus);
    elm.innerHTML = "4";
    if (ans_table[i][j] == 4) {
        elm.style.color = "#4682b4";
        is_answered[i][j] = true;
        count++;
        if (count == 16) clear();
    }
    else elm.style.color = "#ff4500";
}

function clear() {
    document.getElementById("clearSound").play();
    document.getElementById("message").innerHTML = "game clear!!";
}

function onResetButtonClick() {
    document.getElementById("resetButtonClickSound").play();
    document.getElementById("message").innerHTML = "Let's solve this Sudoku";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let elm = document.getElementById("sudokuCell" + new String(i) + '-' + new String(j));
            elm.innerHTML = '';
            elm.style.color = "#000000";
            elm.style.background = "#ffffff";
            ans_table[i][j] = 0;
            is_answered[i][j] = false;
        }
    }
    count = 0;
    now_focus = undefined;
    console.log(ans_table);
    console.log(is_answered);
    generateAnswer();
    showHints();
}