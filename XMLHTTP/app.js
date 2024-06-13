const req = new XMLHttpRequest();

req.onload = function () {
    console.log('It Loaded!!!!');
    const data = JSON.parse(this.responseText);
    console.log(data); // 문자열이 아니라 객체로 나타남
    console.log(data.name, data.height); //data에서 일부만 빼내는 법
}

req.onerror = function () {
    console.log('Error!!!!');
    console.log(this);
}

req.open('GET', 'http://swapi.dev/api/people/1/');
req.send();

//XHLHttp는 복잡하고 Promise 지원하지 않는 것이 문제!