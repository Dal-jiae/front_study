// 정해진 시간이 흐른 뒤 해당 코드가 작동되도록 함
// setTimeout( 콜백함수, 시간(ms) );
// 5초 뒤에 콜백함수가 실행됨
console.log('sss');

let t = 5;
const interval = setInterval ( () => {
  t--;
  document.querySelector('.time').innerHTML = t;
}, 1000); // Timeout 안쪽에 있으면 그 범주가 끝나고 실행되기 때문에 따로 두어야 한다. 

setTimeout( () => {
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval)
}, 5000 );


// 정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// Timeout은 한번 실행되면 끝
// setInterval( 콜백함수, 시간(ms) );

// setInterval (()=> {
//   console.log('2초마다 실행');
// }, 2000);


let timer;

document.querySelector('.btn').addEventListener('click', () =>{
  
  clearTimeout(timer) // 여러번 눌러도 마지막 한번만 작동할 수 있도록 clear을 사용하게 함 

  timer = setTimeout(() => {
    console.log('클릭하면 3초 뒤에 나타남');
  }, 3000);

})


// // 날짜 관련된 함수들
// // 현재 날짜와 시간
// const date = new Date();
// console.log(date);

// // 년도 추출
// console.log(date.getFullYear());
// // 월 추출 - (0부터 11로 출력)
// console.log(date.getMonth());
// // 일 추출
// console.log(date.getDate());
// // 요일 추출 - (0-일요일, 6-토요일)
// console.log(date.getDay());
// // 시간 추출
// console.log(date.getHours());
// // 분 추출
// console.log(date.getMinutes());
// // 초 추출
// console.log(date.getSeconds());


function insetTime() {
  const date = new Date(); // 새로운 시간을 계속 가져옴 
  const clock = document.querySelector('.clock');
  const hours = String(date.getHours()).padStart(2,0);
  const minutes = String(date.getMinutes()).padStart(2,0);
  const seconds = String(date.getSeconds()).padStart(2,0);
  
  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
insetTime();
setInterval(insetTime, 1000);
  
let a = "1";
// 문자열에서만 사용 가능하기 때문에 숫자일 경우 형변환해야 한다. 
// padStart(채워줄 자리수, 부족한 자리에 채울 값) 
// padEnd
console.log(a.padStart(2,0));
console.log(a.padEnd(2,0));



