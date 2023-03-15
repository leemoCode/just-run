// 多参数柯里化；
const curry = function(fn){
  return function curriedFn(...args){
    console.log('当前参数', args);
      if(args.length<fn.length){
          return function(){
              return curriedFn(...args.concat([...arguments]));
          }
      }
      return fn(...args);
  }
}
const fn = (x,y,z,a)=>x+y+z+a;
const myfn = curry(fn);
console.log(myfn(1)(2)(3)(1));
