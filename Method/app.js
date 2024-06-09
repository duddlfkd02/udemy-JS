// myMath 라는 객체 생성
const myMath = {
    PI: 3.14159,
    // square: function (num) {
    //     return num * num;
    // },
    // cube: function (num) {
    //     return num ** 3;
    // }
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
//myMath.PI // myMath.square(2) 이런식으로 사용


const cat = {
    name: 'Blue Steele',
    color: 'pink',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;
// says MEOWWWW 출력됨
// meow 의 this 는 name,color, breed 함수가 나오지만
// meow2의 this는 window의 객체가 나옴
// cat.meow() 처럼 . 왼쪽에 있는게 this 라고 생각하면 된다.