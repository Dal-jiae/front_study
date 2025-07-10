// 객체(object)에는 함수(메서드)도 넣을 수 있음

let user = {
  name : '홍길동',
  age : 20
}

user.hi = () => {
  console.log('hi');
}

user.hi();

function hi2() {
  console.log('hi2');
}

user.hi2 = hi2; // 함수 자체를 보낼 때
user.hi2(); // ()는 호출

let user2 = {
  name : '김자바',
  age : 20,

  hi : function() {
    // console.log('hi');
    console.log(this.name);
  }

  // hi2() {
  //   console.log('hi2');
  // }
}

let member = user2;
member.hi();
user2 = null;
member.hi();

user = {name : '홍길동'}
user2 = {name : "김자바"}

function show() {
  console.log(this.name); // 들어오는 객체를 인식하기 위해 this
}

user.f = show;
user2.f = show;

user.f();
user2.f();


// 객체 참조
// let a = 'abc';
// let b = a;

// a = 'qwer';
// console.log(b); // 값이 바뀌지 않음

let a = {
  name : '홍길동'
};
let b = a; // 객체가 있는 주소값을 전달해준 것이기 때문에 변경값이 입력됨
a.name = "김자바";
console.log(b.name);



// 배열
let arr = [1, 2, 3, 4];

arr[0] = 20;
arr[1] = "a";
// 자바스크립트는 하나의 배열에 다양한 타입의 변수 입력 가능

arr.push("zzzz");
console.log(arr);
arr.pop();
console.log(arr);

