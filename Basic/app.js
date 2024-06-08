function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
}


function greet(firstName, lastname) {
    console.log(`Hey there, ${firstName} ${lastname[0]}`)
    // console.log(`firstName is: ${firstName}`)
}

//firstName으로 정의한 것은 = 매개변수

//매개변수와 인수는 식별 능력이 없다. 전달한 걸 그대로 저장할 뿐!
//전달 받은 인수가 없으면 에러가 아니라 'undefined'

function repeat(str, numTimes) {
    let result = ''; //출력값 모두 담은 변수
    for (let i = 0; i < numTimes; i++) {
        result += str; //str에 적은 모든 값이 누적되어 보여짐
    }
    console.log(result);
}

/* * return * */
//매개변수에 값을 넣어서 계산한 값을 구할 수 있지만
//변수에 담으면 'undefined'가 나온다 (변수에 담을 수 없다)
//=> 따라서 return 을 활용하여 결과값을 반환하도록 한다.

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 + num2;
}


//1. 마지막 요소 연습
function lastElement(arr) {
    if (arr.length === 0) {
        return null
    } else {
        return arr[arr.length - 1]; //-1을 해주면 0부터 시작해서 마지막값은 찾을 수 없으므로 undefined 뜸
    }
}

//2. 대문자 변환 연습
// -- 내가 쓴 답 --
// function capitalize(txt) { //apple
//     const firstTxt = txt[0].toUpperCase(); // A
//     const lastTxt = txt.splice(1);
//     return firstTxt + lastTxt;
// }
// -- 답 --
function capitalize(word) {
    const firstLetterCapitalized = word[0].toUpperCase();
    const restOfTheString = word.slice(1);
    return firstLetterCapitalized + restOfTheString;
}

// 3. 배열 합계 연습
function sumArray(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

function sumArray(nums) {
    let total = 0;
    for (num of nums) {
        total += num;
    }
    return total;
}

// 4. 요일 연습
// -- 내가 쓴 답1 --
const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]
function returnDay(idx) {
    if (idx < 1 || idx > 7) {
        return null;
    } else {
        return days[0] + 1;
    }
}
// -- 내가 쓴 답2 --
const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}

function returnDay(idx) {
    if (idx < 1 || idx > 7) {
        return null;
    } else {
        return days.Object.values;
    }
}

// -- 답1 --
function returnDay(idx) {
    if (idx < 1 || idx > 7) {
        return null;
    }
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    return days[idx];
}
// -- 답2 --
function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num - 1];
    }
}

