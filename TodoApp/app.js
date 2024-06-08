let input = prompt('무엇을 하고 싶으신가요?');
const todos = ['유데미 공부하기', '방 청소하기'];
while (input !== '종료' && input !== 'q') {
    if (input === '목록') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`)
        }
    } else if (input === '추가') {
        const newTodo = prompt('추가할 내용을 적어주세요');
        todos.push(newTodo);
        console.log(`추가된 목록 : ${newTodo}`);
    }
    input = prompt('무엇을 하고 싶으신가요?');
}
console.log('앱을 종료합니다.')