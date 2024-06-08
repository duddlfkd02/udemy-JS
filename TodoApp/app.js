let input = prompt('무엇을 하고 싶으신가요?');
const todos = ['유데미 공부하기', '방 청소하기'];
while (input !== '종료' && input !== 'q') {
    if (input === '목록') {
        console.log('****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`)
        }
        console.log('****************');
    } else if (input === '추가') {
        const newTodo = prompt('추가할 내용을 적어주세요');
        todos.push(newTodo);
        console.log(`추가된 목록 : ${newTodo}`);
    } else if (input === '삭제') {
        const index = parseInt(prompt('삭제할 번호를 적어주세요'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]}가 삭제되었습니다.`);
        }
    }
    input = prompt('무엇을 하고 싶으신가요?');
}
console.log('앱을 종료합니다.')