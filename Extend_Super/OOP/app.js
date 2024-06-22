class Pet {
    constructor(name, age) {
        console.log('pet construtor')
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    }
}


class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('cat construtor')
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWW!!'
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!!'
    }
    eat() {
        return `${this.name} scarfs his food!`
    }
}