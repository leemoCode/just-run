function c(data) {
  console.log(data);
}

// const obj = {};
// const arr = [];
// const fn = function () {
//   // do sth
// };

// obj.a = 1;
// arr.a = 1;
// fn.a = 1;

// c(obj.a);
// c(arr.a);
// c(fn.a);
// c(obj.__proto__ === Object.prototype);
// c(arr.__proto__ === Array.prototype);
// c(fn.__proto__ === Function.prototype);

// function Star(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Star.sex = 'girl';

// const star = new Star('leemo', '22');

// c(star);
// c(star.sex);

// c(Star.sex);
// c(Star.name);

c(Function.__proto__ === Function.prototype);

function Fn() {
  // do sth
}
var fn = new Fn();
fn.__proto__ === Fn.prototype;

fn instanceof Fn; //true
fn instanceof Object; //true
fn instanceof Function; //false

c(Fn instanceof Function);

c(Fn.__proto__ === Function.__proto__);
