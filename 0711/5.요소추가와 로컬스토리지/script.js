// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  {name: 'apple', memo: '잘 익은 사과'},
  {name: 'mango', memo: '달달한 망고'},
  {name: 'melon', memo: '맛있는 멜론'}
];

// document.querySelectorAll('.card-body h5')[0].innerHTML = FRUITS[0].name;
// document.querySelectorAll('.card-body p')[0].innerHTML = FRUITS[0].memo;
// document.querySelectorAll('img')[0].setAttribute('src', `./이미지/${FRUITS[0].name}.jpg`);
// // setAttribute(속성명, 속성값) 속성변경, 속성추가 가능한 태그
// // ${FRUITS[0].name}은 위에 이미 배열을 설정했기 때문에 
// // 매번 코드에 값을 직접 변경해주는 것이 아니라 배열에 저장된 값을 꺼내기만 하면 되는 것으로 적은 것
// // 코드 재사용성과 유지보수성을 높이기 위해서
// // 백틱을 쓴 것은 텍스트와 배열을 한번에 적기 위해서. 
// // 백틱(``)을 사용하면 문자열 중간에 변수나 표현식을 ${...} 형태로 넣을 수 있음

// document.querySelectorAll('.card-body h5')[1].innerHTML = FRUITS[1].name;
// document.querySelectorAll('.card-body p')[1].innerHTML = FRUITS[1].memo;
// document.querySelectorAll('img')[1].setAttribute('src', `./이미지/${FRUITS[1].name}.jpg`);

// document.querySelectorAll('.card-body h5')[2].innerHTML = FRUITS[2].name;
// document.querySelectorAll('.card-body p')[2].innerHTML = FRUITS[2].memo;
// document.querySelectorAll('img')[2].setAttribute('src', `./이미지/${FRUITS[2].name}.jpg`);


// 반복문으로 훨씬 간편하게 바꿀 때
// const cardTitle = document.querySelectorAll('.card-body h5');
// const cardMemo = document.querySelectorAll('.card-body p');
// const cardImg = document.querySelectorAll('img');
// // 성능적인 면에서 계속 찾아야 하는 부분은 변수로 만들기

// for(let i=0; i<FRUITS.length; i++) {
//   cardTitle[i].innerHTML = FRUITS[i].name;
//   cardMemo[i].innerHTML = FRUITS[i].memo;
//   cardImg[i].setAttribute('src', `./이미지/${FRUITS[i].name}.jpg`);
// }

for(let i=0; i<FRUITS.length; i++){
  let card = `
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img src="./이미지/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
      </div>
    </div> 
  `;


// 여러 개를 생성하려면 계속 더해야 함.
// document.querySelector('.row').innerHTML = card;
// document.querySelector('.row').innerHTML = 
//          document.querySelector('.row').innerHTML + card;

// 그냥 글자로 인식함
// document.querySelector('.row').append(card);

// beforebegin : 해당 요소 앞에 html을 넣어줌 - 형제
// afterbegin : 해당 요소 첫번째 자식으로 추가 - 자식
// beforeend : 해당 요소 마지막 자식으로 추가 - 자식
// afterend : 해당 요소 뒤에 html을 넣어줌 - 형제
document.querySelector('.row').insertAdjacentHTML('beforeend', card);
}

// 반복할 때마다 i, index 번호가 필요하다면 i, index 기입
// FRUITS.forEach( (data, i) => {
//   console.log(data.name, i);
// })


const cart = document.querySelectorAll('.cart');
for(let i=0; i<cart.length; i++) {

  cart[i].addEventListener('click', (e) => {
    let nameTag = e.target.previousElementSibling.previousElementSibling;
    let name = nameTag.innerHTML; // 이름만 꺼내달라는 뜻

    // localStorage.setItem('cart', JSON.stringify([name])); <-안됨
    // 로컬스토리지에 담기버튼을 누르면 새로운 게 추가되는 게 아니라
    // 계속 기존 꺼 사라지면서 새거만 추가됨
    // 담기 버튼을 누르면 새로운 게 추가돼서 로컬스토리지에 저장
    // 그냥 setItem으로는 불가능함 -> 동일한 key 넣으면 기존꺼 사라짐

    // 해야 할 것
    // 1. 이미 로컬스토리지에 cart가 존재하면 해당 값을 먼저 꺼내옴
    // 2. 꺼내온 데이터에 새로 담을 정보를 추가
    // 3. 추가된 데이터를 다시 로컬스토리지에 넣음

    // 로컬스토리지에서 꺼내옴
    let temp = localStorage.getItem('cart');
    // 장바구니에 넣으려는 과일이 로컬스토리지에 있는지 여부를 알려주는 변수 
    let isHave = false;
    // 장바구니에 넣으려는 과일이 로컬 스토리지에 있으면
    // 몇번째 인덱스에 있는지 알려주는 변수
    let index;

    if(temp != null) {
      // 1번 - 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야 함
      // localStorage는 문자열만 저장하므로,
      // 문자열 형태이므로 원본인 배열로 되돌려줌
      temp = JSON.parse(temp);

      // 배열방 안에 이름이 같은 것이 있는지
      temp.forEach((data,i) => { // forEach는 향상된 for문과 같음
        if(data.name === name ){
          isHave = true; // 과일의 존재여부
          index = i; // 몇 번방에 있는지 위치 알려줌
        }
      })


      // 위 반복문에서 기존 로컬 스토리지에 해당 과일이 있는지 없는지
      // 검사를 끝냈으므로 여부에 따라 다르게 처리
      if(isHave) {
        temp[index].cnt++;
      } else {
        temp.push( {'name': name, 'cnt': 1 } );
      }


      // // 새로 장바구니에 담을 name을 추가
      // temp.push(name);
      // 추가된 정보를 로컬스토리지에 다시 넣음
      localStorage.setItem('cart', JSON.stringify(temp));

    } else {
      // 해당 과일이 없을 때가 아님 - 과일 존재 여부가 중요한 것이 아님
      // 로컬 스토리지 자체가 비어 있을 경우 
      // localStorage.setItem('cart', JSON.stringify([name])); // localStorage에 cart라는 이름으로 name을 집어넣으라는 뜻
      localStorage.setItem('cart', 
        JSON.stringify([{ 'name': name, 'cnt': 1 }])); 
    }
  })
}




// 로컬스토리지에 저장 or 수정 (동일한 키를 넣으면 기존 데이터를 지움)
localStorage.setItem('키', '값')
// 로컬스토리지에서 해당 키에 대한 값을 리턴해줌
localStorage.getItem('키')
// 로컬스토리지에서 해당 키를 삭제
localStorage.removeItem('키')

let arr = [1,2,3,4,5];
let obj = {
  name : 'kim',
  age : '20'
};

// 로컬스토리지에는 배열, 오브젝트를 넣어봤자 문자열 형태로 처리됨
localStorage.setItem('arr', arr);
localStorage.setItem('obj', obj);

// JSON형식으로 변환 "[1, 2, 3, 4]"
// arr인 배열을 문자열(JSON)로 변환
let arr_json = JSON.stringify(arr);

console.log(arr_json, typeof arr_json);

// 배열은 아니지만 배열 구조(대괄호)가 유지된 채로 문자열이 됨
localStorage.setItem('arr', arr_json);

arr = localStorage.getItem('arr');

// 로컬스토리지에서 꺼내와도 아직까진 문자열임(구조가 살아있는 상태)
console.log(arr, typeof arr);

// 문자열인 형태를 다시 배열로 되돌려줌
arr = JSON.parse(arr);

console.log(arr, typeof arr);
