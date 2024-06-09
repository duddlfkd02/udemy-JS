function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log('Please padd a string');
    }
}

//try, catch 쓰면 여기서 오류가 생겨도 밑에 작성한 코드는 실행이 된다.
// 사용하지 않고 작성했는데 오류가 생기면 그 밑에 있는 모든게 다 실행되지 않고 에러창이 뜬다.