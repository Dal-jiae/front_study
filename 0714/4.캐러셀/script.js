const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const carousel = document.querySelector('.carousel');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');

// 현재 보고 있는 캐러셀의 이미지 번호
let sildeNo = 1;

btn1.addEventListener('click', () => {
  carousel.style.transform = 'translateX(0vw)'
  // transform의 기본 위치는 가장 왼쪽. 브라우저의 시작점
  sildeNo = 1;
});

btn2.addEventListener('click', () => {
  /* 양수를 넣으면 오른쪽으로 이동, 음수를 넣으면 왼쪽으로 이동 */
  carousel.style.transform = 'translateX(-100vw)'
  sildeNo = 2;
});

btn3.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-200vw)'
  sildeNo = 3;
});


pre.addEventListener('click', () => {
  // 바로 앞으로 한 칸 넘어가야 하는 상황

  if(sildeNo === 1 ) {
    return;
  }

  carousel.style.transform = `translateX(-${sildeNo-2}00vw)`;
  sildeNo--;
  // if(sildeNo === 2) {
  //   carousel.style.transform = 'translateX(0vw)';
  //   sildeNo--;
  // } else if (sildeNo === 3) {
  //   carousel.style.transform = 'translateX(-100vw)';
  //   sildeNo--;
  // } 
});

next.addEventListener('click', () => {
  // 바로 뒤로 한 칸 넘어가야 하는 상황

  // 1번 이미지를 보고 있으면 2번 이미지로 이동
  // -100vw만큼 이동
  // 2번 이미지를 보고 있으면 3번 이미지로 이동
  // -200vw만큼 이동
  
  if(sildeNo >= 3 ) {
    return;
  }

  carousel.style.transform = `translateX(-${sildeNo}00vw)`;
  sildeNo++;
  
});

