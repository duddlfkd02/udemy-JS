// let = random = Math.random()
// if (random < 0.5) {
//     console.log('0.5보다 작습니다.')
// } else {
//     console.log('0.5보다 크거나 같습니다.')
// }
// console.log(random);


// const dayOfWeek = prompt('enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log('i hate Monday')
// } else if (dayOfWeek === 'saturday') {
//     console.log('i love Saturday')
// } else if (dayOfWeek === 'friday') {
//     console.log('Friday is good, especially after work')
// } else {
//     console.log('MEH')
// }



// const age = 89;

// if (age < 5) {
//     console.log('You get FREE');
// } else if (age < 10) {
//     console.log('You are child pay $10');
// } else if (age < 65) {
//     console.log('You are adult. pay $20')
// } else {
//     console.log('You are a senior. Pay $10')
// }


const password = prompt('Please enter a new password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('no space')
    } else {
        console.log('remove space')
    }
} else {
    console.log('길이 미달')
}

