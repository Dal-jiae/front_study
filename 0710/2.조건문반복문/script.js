// 조건문

// if문
let age = 20;
if( age>=20 ) {
  console.log("성인");
} else if( age>=12 ) {
  console.log("청소년");
} else {
  console.log("어린이");
}

// 삼항연산자
// 조건식 ? 참 : 거짓
let result = age >= 20 ? "성인" : "청소년";

// switch문
let a = 3;

switch(a) {
  case 1: 
    console.log("a는 1이다");
    break;
  case 2:
    console.log("a는 숫자 2이다");
    break;
    // 자료형까지 구분 가능해서 구체적으로 나눌 수 있음
  case '2':
    console.log("a는 문자 2이다");
    break;
  default:
    console.log("a는 1, 2가 아니다");
}

// 반복문
// for문
// for(초기값; 조건식; 증감식) {
//   반복할 코드
// }

// 1~10까지 합
let sum = 0; // 초기값을 설정하지 않았다면 let에는 null
for(let i = 1; i<=10; i++) {
  sum = sum + i;
}
console.log(sum);

let sum1 = 0;
let sum2 = 0;
for(let i = 1; i<=10; i++) {
  // sum2 = 0;
  // // 다음 합계 구하기 위해 정리할 필요
  // for(let j = 1; j <= i; j++) {
  //   sum2 = sum2 + j;
  // } sum1 = sum1 + sum2;
  sum2 = sum2 + i;
  sum1 = sum1 + sum2;
}
console.log(sum1);

// while 문
// while(조건식) {
//   반복할 코드
// }

// 반복 종료 - break;
// 반복문 상단으로 돌아감 - continue;

