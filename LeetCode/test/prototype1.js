function c(data) {
  console.log(data);
}

var o = {};
o.__proto__ === Object.prototype; //true
o instanceof Object; //true
o instanceof Function; //false

var o0 = Object();
o0.__proto__ === Object.prototype; //true
o0 instanceof Object; //true
o0 instanceof Function; //false

var o1 = new Object();
o1.__proto__ === Object.prototype; //true
o1 instanceof Object; //true
o1 instanceof Function; //false

function Fn() {
  // do
}
var fn = new Fn();
fn.__proto__ === Fn.prototype;

fn instanceof Fn; //true
fn instanceof Object; //true
fn instanceof Function; //false

c(fn instanceof Function);
c(Fn instanceof Function);
