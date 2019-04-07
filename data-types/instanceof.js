// 1.instanceof 示例
var oStringObject = new String("hello world");
console.log(oStringObject instanceof String);   // 输出 "true"

// 2.instanceof 常规用法
// 判断 foo 是否是 Foo 类的实例
function Foo(){}
var foo = new Foo();
console.log(foo instanceof Foo)//true

// 3.instanceof 在继承中关系中的用法
// 判断 foo 是否是 Foo 类的实例 , 并且是否是其父类型的实例
function Aoo(){}
function Foo(){}
Foo.prototype = new Aoo();//JavaScript 原型继承

// 4.instanceof 复杂用法
console.log(Object instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Number instanceof Number);//false
console.log(String instanceof String);//false

console.log(Function instanceof Object);//true

console.log(Foo instanceof Function);//true
console.log(Foo instanceof Foo);//false

var foo = new Foo();
console.log(foo instanceof Foo)//true
console.log(foo instanceof Aoo)//true

/*
为什么 Object 和 Function instanceof 自己等于 true，而其他类 instanceof 自己却又不等于 true 呢？如何解释？
要想从根本上了解 instanceof 的奥秘，需要从两个方面着手：
1，语言规范中是如何定义这个运算符的。
2，JavaScript 原型继承机制。
*/

// ECMAScript-262 edition 3 中 instanceof 运算符的定义
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
  var O = R.prototype;// 取 R 的显示原型
  L = L.__proto__;// 取 L 的隐式原型
  while (true) {
    if (L === null)
      return false;
    if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true
      return true;
    L = L.__proto__;
  }
 }
