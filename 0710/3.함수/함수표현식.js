// 함수 선언문
function hello() {
  console.log('hello');
}

// 함수 표현식: 변수에 함수를 넣는 것
let hi = function() {
  console.log('hi');
}



// 콜백 함수 : 함수에 함수를 보내는 것
// 선언문은 위치 상관없이 호출 가능함
// 자바스크립트는 먼저 선언된 함수를 인식함
function yes() {
  console.log("예");
}

//표현식은 만든 이후에만 쓸 수 있다
let no = function() {
  console.log("아니오");
}

function check(question, ok, cancel) {
  if(question == 'y')
    ok(); // 변수니까 함수를 담을 수 있게 됨
  else
    cancel();
}

// check('y') // 값을 보내는 매개변수 용도 
check('y', yes, no) // 함수도 매개변수로 보낼수 있는데 괄호는 삽입하면 안된다. 있으면 함수 호출로 인식
// 함수 호출, 콜백함수, 콜백함수


function buy(item, price, stock, callback) {
  console.log(`${item}을 ${stock}개 구매함`);

  let total = price * stock;
  callback(total); // 상황에 따라 다른 함수를 호출하고 싶을 때 사용
}

function pay(n) {
  console.log(`총 금액: ${n}`);
}

function pay2(n) {
  console.log(`총 금액(할인적용) : ${n * 0.9}`);
}

let 할인적용여부 = 'y'
if (할인적용여부 == 'y') {
  buy("컴퓨터", 100, 2, pay2);
} else {
  buy("컴퓨터", 100, 2, pay);
}


// setInterval(콜백함수, 시간)
// 콜백함수: 나중에 호출되는 함수
// setInterval(hello, 10000); //1.000이 1초
// setInterval(function() {
//   console.log('a');
// }, 1000);
