# 0.1 + 0.2 === 0.3 吗？
  不等于 精度丢失可能出现在进制转化和对阶运算中

  本质是 二进制模拟十进制进行计算时 的精度问题

  https://www.javascriptc.com/books/nodejs-roadmap/javascript/floating-point-number-0.1-0.2.html

  https://juejin.cn/post/6844903680362151950

# JS数据类型（原始类型）
  基本类型:
  Number Boolean String Null Undefined Symbol(ES6) BigInt(ES2020)

  Symbol
    代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。
  BigInt
    是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

  引用类型：
  Object （细分的话，有：Object 类型、Array 类型、Date 类型、RegExp 类型、Function 类型 等）

# JavaScript 有几种类型的值？你能画一下他们的内存图吗
  js 可以分为基本数据类型和引用数据类型，两种类型间的主要区别是它们的存储位置不同。
  原始数据类型：
    直接存储于栈内存中。
    简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储
  引用数据类型：
    在栈内存中存储指针，在堆内存中存储对象。
    存储在堆内存中的对象，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能。
    引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
    当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。


# 什么是堆？什么是栈？它们之间有什么区别和联系
  堆和栈的概念存在于数据结构中和操作系统内存中。

  在数据结构中：
    栈中数据的存取方式为先进后出。
    堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。

  在操作系统中：
    内存被分为栈区和堆区。

    栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
    堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。

# js 有哪些内置对象
  js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些 全局值属性、函数和用来实例化其他对象的构造函
  数对象。
  一般我们经常用到的如：
    1. 全局变量值 NaN、undefined
    2. 全局函数如 parseInt()、parseFloat()
    3. 用来实例化对象的构造函数如 Date、Object 等
    4. 还有提供数学计算的单体内置对象如 Math 对象。

# undefined 与 undeclared 的区别
  已经在作用域内声明但是还没有赋值的变量，是undefined。
  还没有在作用域中声明过的变量是undeclared。

  在浏览器中引用undeclared，会报错： ReferenceError: b is not defined

  并且typeof 对undefined 和 undeclared 变量返回的都是undefined

# null 和 undefined 的区别
  首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。
  1. 区别1：
    undefined：
      undefined 代表的含义是未定义，
      一般变量声明了但还没有定义的时候会返回 undefined，
    null：
      null 代表的含义是空对象。
      主要用于赋值给一些可能会返回对象的变量，作为初始化。

  2. 区别2：
    undefined在js中不是一个保留字，这意味着我们可以使用undefined作为一个变量名(危险)，可以通过void 0获得安全的undefined值。
    null在js中不是保留字

  3. 区别3：
     typeof null // 输出object， 历史遗留问题
     typeof undefined // 输出undefined

  4. 区别4：
     双等号比较 返回true
     三等号比较 返回false

# 如何获取安全的 undefined 值？

  因为 undefined 是一个标识符，所以可以被当作变量来使用和赋值，但是这样会影响 undefined 的正常判断。

  表达式 void ___ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。

  按惯例我们用 void 0 来获得 undefined。


# 说几条写 JavaScript 的基本规范
  1. 一个函数作用域中所有的变量声明应该尽量提到函数首部.
  2. 用一个 var 声明，不允许出现两个连续的 var 声明，声明时如果变量没有值，应该给该变量赋值对应类型的初始值，便于他人阅读代码时。
  3. 代码中出现地址、时间等字符串时需要使用常量代替
  4. 进行比较时优先使用 === 和 !==
  5. switch语句必须带有default分支
  6. for循环必须使用大括号
  7. if必须使用大括号
  8. 不在内置对象的原型上添加方法，比如Array Date


# 关于BigInt
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt


# 在 js 中不同进制数字的表示方式
  以 0X、0x 开头的表示为十六进制。

  以 0、0O、0o 开头的表示为八进制。

  以 0B、0b 开头的表示为二进制格式。

# js 中整数的安全范围是多少？

  安全整数指的是，在这个范围内的整数转化为二进制存储的时候不会出现精度丢失。
  最大整数是 2^53 - 1，即9007199254740991
  最小整数是 -(2^53 - 1) -9007199254740991。

  ES中表示：
  Number.MAX_SAFE_INTEGER
  Number.MIN_SAFE_INTEGER

  如果某次计算的结果得到了一个超过 JavaScript 数值范围的值，那么这个值会被自动转换为特殊的 Infinity 值。
  如果某次计算返回了正或负的 Infinity 值，那么该值将无法参与下一次的计算。
  判断一个数是不是有穷的，可以使用 isFinite 函数来判断。

# typeof NaN的结果
  typeof NaN; // number

  NaN意指不是一个数字，是一个警戒值，用于指出数字类型中的错误情况。即执行数学运算没有成功，这是失败之后返回的结果

  NaN是一个特殊值，和自身不相等，是唯一一个非自反的值 NaN !== NaN

# isNaN 和 Number.isNaN 函数的区别



# sort方法
  直接调用arr.sort()
  按默认的排序方式：将每个数组元素toString()后按字符串Unicode编码顺序进行排序

  自定义排序规则：
  传入一个函数作为参数，参数必须是函数
  arr.sort(Fn)

  // 例 降序排序
  const sortFn = (a, b) => {
    return b - a;
  };
  执行sort方法时逐个比对a,b元素，当sortFn返回值为 true 或 >1 时，交换两个元素

  数组长度小于10时，采用插入排序；长度大于10，采用快排
  插入排序时间复杂度：最差On^2 最好On
  快排的时间复杂度Onlogn


# 获取某数的绝对值
  Math.abs(num)

# 向下取整
  Math.floor(num)

# 向上取整
  Math.ceil(num)
  // 7.1 -> 8
  // -7.1 -> -7

# 指数幂
  Math.pow(base, exponent) // base 的 exponent 次幂

# 四舍五入
  Math.round(num)
  // 20.5 -> 21
  // -20.5 -> -20



# charAt()
  str.charAt(index)
  返回字符串中指定位置的单个字符

# charCodeAt()
  str.charCodeAt(index)
  返回字符串指定位置处字符的Unicode编码
  形成字符->数字的映射


# trim()
  str.trim() 去除字符串的所有空格


# toLowerCase()

# toUpperCase()

# .replace(/[^A-Za-z0-9]/g, '')
  去除字符串的非字母符号  ^A-za-z0-9

# substring slice substr
  https://www.jianshu.com/p/4d06661cf2b8


http://c.biancheng.net/view/8196.html
