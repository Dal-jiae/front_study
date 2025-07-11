const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');

// let isShow = false;
// // 플래그용 변수 
// // isShow는 현 상태를 추적하는 변수다 - 목록이 보이는지 안보이는지 여부
// // 처음에 들어갔을 때 안 보이는 상태라서 false로 지정한 것. 

// btn.addEventListener('click', () => {
// // isShow = !isShow; 밑에 있는 걸 지우고 밖으로 꺼내도 괜찮다.

//   if(isShow) {
//     // isShow가 true일 때 실행되는 영역. 목록이 보이는 상태.
//     list.classList.remove('show');
//     isShow = !isShow;
//     // 누르는 순간 현상태가 반대상황으로 바뀌기 때문에 처리 결과값을 바꿔야
//     // 다음에 입력할 때 반대값으로 입력될 수 있다. 
//     // 현재 상태(isShow)를 기준으로 어떤 동작을 하고, 
//     // 그 다음 상태(isShow = !isShow)를 반전시켜 다음 클릭 시에는 반대 동작이 실행되도록 만든다.
//   } else {
//     list.classList.add('show');
//     isShow = !isShow;
//   }

// });

btn.addEventListener('click', () => {
  // JS
  list.classList.toggle('show');
  // toggle 함수는 알아서 클래스를 붙였다 뗐다 처리 가능

  // jQuery
  // $('.list-group').toggleClass('show');
})

const btnLi = document.getElementsByClassName('list-group-item');
// const btnLi = document.querySelectorAll('.list-group-item');
// 다수를 잡을 때 배열로 저장되기 때문
for(let i=0; i<btnLi.length; i++){ 
  btnLi[i].addEventListener('click', () => {
    alert('ㅋㅋㅋ');
  });
}

// jQuery에서는 다음과 같이 입력해도 작동 가능하다. 
// $('.list-group-iten').on('click', ()=> {
//   alert('zzz');
// })