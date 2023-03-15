let todoPrototype = {
  toString: function () {
    return this.id + this.name + this.title;
  },
};

function Todo(todo) {
  let newTodo = Object.create(todoPrototype);
  Object.assign(newTodo, todo);
  return newTodo;
}

// 例题1
// let a = 0,
//   b = 0;
// function fn(a) {
//   fn = function fn2(b) {
//     console.log(a, b);
//     console.log(++a + b);
//   };
//   console.log('a', a++);
// }
// fn(1);
// fn(2);

// 例题2
// var a = 10;
// (function () {
//   console.log(a)
//   a = 5
//   console.log(10)
//   var a = 20;
//   console.log(a)
// })()

// var b = {
//   a,
//   c: b
// }
// console.log(b.c);

// 例题3
// var a = 1;
// function foo(a, b) {
//   console.log(a);
//   a = 2;
//   arguments[0] = 3;
//   var a;
//   console.log(a, this.a, b);
// }
// foo(a);

//A  FS  MZ  WS  HS  NG
//B  SS  MZ  WS  DJ  NH
//C  MZ  MZ  WS  LS  ND
//D  CK  MZ  WS  FS  NG

// AB  CD
// BD  AC
// AD  BC

// S1: FS MZ WS HS NG

// S2: LS MZ WS HS ND

// S1: NG FS HS
// S2: ND LS WS
