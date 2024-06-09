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

// ** this
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

// **연습문제**
/*hen이라는 이름의 오브젝트를 정의하세요. 이 오브젝트는 세 가지 속성을 가져야 합니다.

name은 'Helen'으로 설정
eggCount는 0으로 설정

layAnEgg는 eggCount의 값을 1씩 증가시키고 문자열 "EGG"를 반환하는 메서드여야 합니다. this 키워드를 사용해야 할 것입니다.
*/
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++
        return "EGG"
    }
}