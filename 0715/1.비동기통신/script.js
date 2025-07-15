// 옛날 문법

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")
// 요청 메서드, 요청 url
// 서버에 정해진 형태로 적어야 한다. 

xhr.setRequestHeader("content-type", "application/json");
// 키-벨류 형태로 기입, 보내는 형식은 json

const data = { // 백엔드에서 정해준 설명서대로 따라 적어야 함
  userId: 100,
  title: '비동기통신 연습',
  body: '이것저것보내는중'
};

xhr.send(JSON.stringify(data));

xhr.onload = () => {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드 e.g. server not found 404
  console.log( JSON.parse(xhr.response) ); // 응답 데이터 
}


// 요즘 문법
// fetch('요청주소')
// .then((변수) => 성공 시 처리할 코드)
// .then((변수) => 성공 시 처리할 코드)
// .catch((e) => 요청 실패 시 처리할 코드)

const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');
const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userid = document.querySelector('.userid');
const body = document.querySelector('.body');

// 프론트에서 주로 하는 작업
getBtn.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1') // 요청
    // .then((응답결과(매개변수))=> ) // 응답에 대한 것
    .then( (response) => response.json() ) // response.json() = parse와 같음. 배열로 바꾼 것. 첫줄은 이렇게 보통적음
    .then( (data) => { // response.json()가 매개변수로 들어옴
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userid.innerHTML = data.userId;
      body.innerHTML = data.body;
      // console.log(data.title);
      // console.log(data.id);
      // console.log(data.userId);
      // console.log(data.body);
    })
    .catch(error => {
      console.log(error);
    })

  // 서버에서 받아온 값을 처리하는 코드가 먼저 실행되지 않도록 then을 먼저 적는 것
  // 서버로 보내고 받아오는 과정을 기다리라고.
})




const post_userId = document.querySelector("[name='userId']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

postBtn.addEventListener('click', (e) => {
  e.preventDefault(); // 기본 동작 막기
  // console.log(post_userId.value);
  // console.log(post_title.value);
  // console.log(post_body.value);

  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  };
  // console.log(data);
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post', // 이 형식으로 보낸다
    body: JSON.stringify(data), // 문자열 변환
    headers: { // 이 양식으로 저장한다
      "content-type" : "application/json"
    }
  }).then( response => response.json() )
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료');
    })
    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패');
    })

})

const async_test = document.querySelector('.async');
async_test.addEventListener('click', async () => {

  let a = 1;
  // a = add(a); // 리턴 받은 값을 다시 a에 넣어라
  a = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // 함수에 async를 기입해야 await을 쓸 수 있다
  a = await a.json();

  console.log(a); 
})



function add(i) {

  return new Promise(resolve => {
    for(i=0; i<10000; i++){

  }
  return i;
  })
  // for(i=0; i<10000; i++){

  // }
  // return i;
}