//JavaScript는 동기적인 프로그램
//hoisting : var, function declatation 선언들이 자동적으로 제일 위로 선언되는 것

console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000) // 비동기
console.log('3'); // 동기

//Synchronous callback(즉각적, 동기적)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); // 동기

//Asynchronous callback(나중에, 언제 실행될지 모름)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //비동기


//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'ellie' && password === 'dream' ||
                id === 'coder' && password === 'acacdemy'
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);