// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6; 
// }
// console.log(totalEggs); // 0
// collectEggs();
// console.log(totalEggs); // 6

/* =====================================*/

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();

//function 안의 변수를 먼저 찾은 후 그 안에 없으면 그 다음으로 가까운 곳에 있는 변수를 찾아 출력한다.

/* =====================================*/
// 3. Block Scope (let, var, const 변수에 따른 호출)

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }
// console.log(radius); // 8출력
// console.log(PI); // undefined

// for (let i = 0; i < 5; i++) {
//     var msg = 'that';
//     console.log(msg);// 5번 출력
// }
// console.log(msg);

//** 'let' 을 사용하여 변수 저장하면 :  블록 안에서만 사용할 수 있지만 
//** 'var' 로 변수를 지정했을 경우 밖에 있는 console.log의 변수도 값을 받아올 수 있다.
// ** i 변수는 let 으로 지정되어 for문 블럭에서만 5번 반복, for문 밖에서는 사용 불가. => var에 담긴 변수 값 'that' 1번만 출력됨.

/* =====================================*/
// 4. Lexical Scope

function bankRobberty() {
    const heros = ['Spiderman', 'Wolverine', 'Black Panther', 'Ironman', 'Dr. Strange'];
    function cryForHelp() {
        for (let hero of heros) {
            console.log(`PLEASE HELP ME, ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}
// 부모 함수 안에 중첩된 내부 함수는 해당 외부함수의 범위에나 또는 범위 내에서 정의된 변수에 액세스 가능
