// 알림창 띄우기
// alert("자바스크립트 파일 만듦");

//출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용띄우기");

//html에 출력해주기
document.write("문서에 쓰기")

//변수 만들기
// var 변수명; // 옛날거
let 변수이름; 

let msg = 'hello';
console.log(msg);
msg = 20;
console.log(msg);

// 상수
// 한번 할당하면 값을 바꿀 수 없음
// 코드에서 변경되면 안되는 값(예: 색상 코드, API KEY 등)에 사용.
const COLOR = 'red';
// COLOR = 'blue';

let n = 12.234;

// typeof : 변수의 자료형 확인
console.log( typeof(n) ); // number
console.log( typeof n ); //괄호 있든 없든 가능

// 실제로 나누기 0은 불가능하지만
// JS 수학적 연산은 전부 처리가 됨
// 대신 결과가 안나오는 건 특수 숫자 값(Infinity)으로 처리
console.log( n / 0 ); // 실제 수학에서는 불가능하지만 JS는 Infinity로 처리
console.log( typeof Infinity );
console.log( "abc" / 2 ); // 문자를 숫자로 변환할 수 없어서 NaN (Not a Number)
console.log( typeof NaN ); //NaN도 숫자로 처리됨

// 문자
// js에서는 문자(열)은 쌍따옴표, 작은따옴표, 빽틱(`)
let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`; 

let age = 20;
let name = "홍길동"

// 홍길동님의 나이는 20살입니다. 
console.log(name +"님의 나이는"+age+"살입니다.");
console.log(`${name}님의 나이는 ${age+5}살입니다.`); // 템플릿 리터럴: ${변수}로 값 삽입 가능. 매우 유용
console.log(typeof name);

// 불린: true / false만 가질 수 있음
let check = true
console.log( 10>=5 ); // true
console.log(typeof check); // boolean

//null 값
//js에서 null은 존재하지 않음, 비어있다, 알수없다
let a = null;

//underfined : 값을 할당하지 않음
let x;
console.log(x); // undefined: 변수는 선언했지만 값이 할당되지 않은 상태.


// 모달창 띄우기
// alert 메세지만 출력하고 확인버튼 한개
// alert('메세지 띄우기');

// prompt 메세지를 출력해주고 사용자에게 입력받는 창이 있고
// 버튼: 확인과 취소버튼이 있음
// 반환 값: 입력값(string) or null
// prompt는 항상 문자열 반환 -> 숫자로 쓰려면 Number()으로 감싸야 함.  
// prompt('메세지', 초기값);
// let result =  Number( prompt('나이 입력해라') );
// console.log( typeof result );
// result = result + 1;
// console.log(result);

//confirm 메시지를 출력해주고 확인, 취소버튼이 있음
//확인을 누르면 true, 취소를 누르면 flase가 리턴됨
let re = confirm("메시지");
console.log(re);

