// 로컬스토리지에 있는 거 꺼내오고 배열로 변환
// localStorage.getItem('cart') - cart 안에 있는 벨류를 꺼내오라는 뜻
// parse 작업은 오브젝트 형태로 보이게 만듦
let cart = JSON.parse( localStorage.getItem('cart'));
console.log(cart);

const cartList = document.querySelector('.list');

// item에는 배열방에 있는 오브젝트가 들어감
cart.forEach((item) => {

  cartList.insertAdjacentHTML('beforeend', `<div>${item.name} : ${item.cnt}</div>`);

});

