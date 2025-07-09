// 알림창 띄우기
// alert("자바스크립트 파일 만듦");

//출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용띄우기");

//html에 출력해주기
document.write("문서에 쓰기")

//변수 만들기
// var 변수이름; // 옛날거
let 변수이름; 

let msg = 'hello';
console.log(msg);
msg = 20;
console.log(msg);

// 상수
const COLOR = 'red';
// COLOR = 'blue';

let n = 12.234;

console.log( typeof(n) );
console.log( typeof n ); //가로 있든 없든 가능

// 실제로 나누기 0은 불가능하지만
// JS 수학적 연산은 전부 처리가 됨
// 대신 결과가 안나오는 건 특수 숫자 값으로 처리
console.log( n / 0 );
console.log( typeof Infinity );
console.log("abc" / 2); 
console.log(typeof NaN); //NaN도 숫자



// 불린
let check = true
console.log( 10>=5 );
console.log(typeof check);

//null 값
//js에서 null은 존재하지 않음, 비어있다, 알수없다
let a = null;

//underfined : 값을 할당하지 않음
let x;
console.log(x);

//confirm 메시지를 출력해주고 확인, 취소버튼이 있음
//확인을 누르면 true, 취소를 누르면 flase가 리턴됨
let re = confirm("메시지");
console.log(re);

