const box = document.getElementById('box') // id가 box인 것을 잡음
box.style.background = 'red';
console.log(box);

// 선택자를 이용해서 요소를 선택할 수 있음
const box2 = document.querySelector('#box');
box2.style.color = 'white'

// 둘 중에 하나를 선택해서 사용해도 무방함


// 선택자에 해당하는 요소 중 첫번째 하나만 적용됨
// const bg = document.querySelector('.bg');
// bg.style.background  = 'pink';

// 선택자에 해당하는 모든 요소들을 가져옴
const bg = document.querySelectorAll('.bg');
// 배열 형태로 정리됨
console.log(bg);
// bg[0].style.background = 'pink'
// bg[1].style.background = 'yellow'

// for(let i=0; i < bg.length; i++) {
//   bg[i].style.background = 'pink';
// }

// for ... in : 객체를 반복할 때 / key, value로 반복을 돌릴 때
for(let b of bg) {
  b.style.background = 'yellow';
}

const li = document.querySelectorAll('ul > li'); // 모든 선택자 선택 가능
for(let l of li) {
  l.innerHTML = 'ㅋㅋㅋㅋ'; // HTML 안에 있는 내용을 변환
}