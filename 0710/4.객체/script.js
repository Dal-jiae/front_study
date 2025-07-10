// 객체(Object) - 자바에서 Map과 유사
// key, value가 한쌍으로 구성

let user = {
  // 키:벨류
  name: '홍길동', 
  age: 20,
  'math score': 100
}


console.log(user.name);
console.log(user.age);
console.log(user['age'])// 대괄호에서는 age를 변수로 인식하기 때문에, 따옴표를 써야 함. 
console.log(user['math score']);

const member = {
  name: '홍길동',
  age: 20
}

console.log(user);
user = 10;
console.log(user);

// 당연히 상수니까 변경을 못함
// member = 10;

// 상수지만 큰 구조는 변경하지 않고
// 안쪽 내용만 수정은 가능함
member.name = "김자바";
console.log(member);
// 그 자체를 바꾸지 못하지만, 내용물을 수정하는 것은 가능하다. 
// 주소값을 가지고 있다고 생각하기

// 이름을 보고 싶은지 나이를 보고 싶은지 입력받음
let key = "name";

console.log(member[key]) // .이면 변수로 인식 / user["name"]



let item = "사과";

// 변수 item이 키로 설정됨. 
// 변수 안에 있는 내용을 키로 사용하고 싶으면 []대괄호를 사용할 것. 
let cart = {
  [item] : 5
};
console.log(cart)


// 10명의 회원정보가 각각 담긴 객체 10개를 생성
// 동일한 구조 객체를 여러 개 만들 때
function makeUserObject(name, age) {
  let obj = {
    // name: name, 
    // 들어오는 매개변수명과 키 이름이 같으면 한번만 적어도 된다.
    // key로 설정할 이름과 value로 설정할 매개변수가 동일하면 생략해서 하나만 써도 가능
    name,
    // age: age
    age
  };
  return obj;
}

let a = makeUserObject('홍길동', 20);
let b = makeUserObject('김자바', 19);
console.log(a, b);

// key, value 추가하기
a.addr = "강동구";
console.log(a);

// 삭제하기
delete a.addr;
console.log(a);


// 구조분해 할당
// 양쪽 중괄호가 삭제됨
// name: '김자바', age: 20
// console.log(...a); 

// 분해한 구조에 직접 다시 중괄호를 씌움
// console.log({...a}); 

let {age, ...r} = a;
console.log(r);
console.log(age);

console.log({...r,age:30});


// in연산자로 key가 있는지 없는지 탐색
console.log("name" in a);// true
console.log("이름" in a);

// 작동 구조는 향상된 for문과 같음
for( let key in a) {
  console.log(`${key} : ${a[key]}`);
}




