/* * and && * */
// const password = prompt('Enter your password!');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid Password');
// } else {
//     console.log('Incorrect format for password');
// }

/* * or || **/
// const age = 20;
// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log('FREE');
// } else if (age >= 5 && age < 10) {
//     console.log('$10');
// } else if (age >= 10 && age < 65) {
//     console.log('$20');
// } else {
//     console.log('invalid age')
// }

/* * NOT ! **/

// const firstName = prompt('Enter yout first name');
// if (!firstName) {
//     firstName = prompt('Try again');
// }
// const age = 2;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log('not baby or senior')
// }
//!를 맨 앞에 적으면서 조건을 뒤집었다. NOT

/* *Switch* */
const day = 3;
switch (day) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday!');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
    case 7:
        console.log('weekend');
        break;
    default:
        console.log('idk')
}

// if (day === 1) {
//     console.log('monday');
// } else if (day === 2) {
//     console.log('tuesday');
// } else if (day === 3) {
//     console.log('wednesday');
// } else if (day === 4) {
//     console.log('thursday');
// } else if (day === 5) {
//     console.log('friday');
// } else {
//     console.log('idk');
// }