var result = [];
var a = 3;
var total = 0;

function foo(a) {
  for (let i = 0; i < 3; i++) {
    result[i] = function () {
      console.log('i=', i, 'a=', a);
      total += i * a;
      console.log(total);
    };
  }
}

foo(1);
result[0](); // 3
result[1](); // 6
result[2](); // 9

(function hello(params) {
  let a = 1214;
  if (true) {
    console.log(a);
  }
})();