// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const str = fruits.join();
  console.log(str);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const arr = fruits.split(','); // 구분자를 적지 않으면 fruits 전체가 배열 하나로 들어가기 때문에 구분자 꼭 써주기!
  console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
  //배열 자체의 순서를 바꾼다는 점 유의할 것!
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArr = array.slice(2, 5);
  // 배열에서 원하는 부분만 return해서 받아옴, 마지막 숫자는 배제됨
  console.log(newArr);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result)
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score)
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result); // 하나라도 만족하면 true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // 모두 만족해야 true
}

// Q9. compute students' average score
{
  // reduce : 배열에 있는 모든 요소들의 값을 누적하는, 모아둘 때 사용
  // const result = students.reduce((prev, curr) => {
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / 5);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score)
    .sort((a, b) => a - b)
    // .sort((a, b) => b - a) 점수가 높은 것부터 정렬
    .join();
  console.log(result);
}
