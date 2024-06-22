// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality/
// Nearly all objects in JavaScript are instances of Object
// ⭐️ object = {key : value};의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob); //뒤늦게 추가할 수 있지만 가능하면 이 방법 피하기

delete ellie.hasJob;
console.log(ellie.hasJob); // 삭제도 가능!

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때 사용
console.log(ellie['name']); // computed properties 항상 string 타입으로! 적어야함 [] 쓰기, "정확하게 어떤 키가 필요한지 모를때 = 런타임에서 결정될 때"
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 5);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name;
    this.age;
    //return this;
}
// 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수들은 Person 처럼 대문자로 시작하도록 함수를 만들고 return 대신 this.name 방식으로 작성함

//5. in operator : property existance check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for ..of
//for (key in obj)
for (key in ellie) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);