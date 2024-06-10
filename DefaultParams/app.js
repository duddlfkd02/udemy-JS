// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6; //default value
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = '!') { //순서는!!default 매개변수 뒤에 적어줘야 한다.
    return `${msg}, ${person}${punc}`;
}