const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    // fullName: () => {
    //     return `${this.firstName} ${this.lastName}`
    // },
    shoutName: function () {
        setTimeout(() => {
            console.log(this); //window의 this
            console.log(this.fullName())
        }, 3000)
    }
    //** 화살표함수 안에 있는 this 는 함수가 만든 범위에 상속되는 this 키워드 값과 같다.
    //** 즉 this 키워드 === 함수 안 this 키워드
}