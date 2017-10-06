//a = 2;
//var a;
//console.log(a);    //  2

//console.log(a);
//var a = 2;    // undefined

// 变量和函数声明会从他们在代码中出现的位置被“移动”到最上面，该过程叫做提升。
// 只有声明本身会被提升，而赋值或其他运行逻辑会留在原地

//foo();
//function foo(){
//    console.log(a);    // undefined
//    var a=2;
//}
// 每个作用域都会进行提升操作，foo(...)函数内部也会对var a进行提升（显然只是提升到foo()函数作用域的上方，
// 不是提升到整个程序的最上方），上面代码会被如下理解：
//        function foo(){
//            var a;
//            console.log(a);    // undefined
//            a=2;
//        }
//        foo();
// 函数声明会被提升，函数表达式不会
//foo();
//var foo=function(){
//console.log(1);
//};     // TypeError:foo()对undeifined值进行函数调用导致非法操作

// 函数优先:函数会首先被提升，然后才是变量
//foo();    //   1
//var foo;  //尽管出现在function foo()...的声明前，但它是重复的声明，被忽略了。
//function foo(){
//    console.log(1);
//}
//foo=function(){
//    console.log(2);
//};

// 尽管重复的var声明会被忽略掉，但出现在后面的函数声明是可以覆盖前面的
//foo();    // 3
//function foo(){
//    console.log(1);
//}
//var foo=function(){
//    console.log(2);
//};
//function foo(){
//    console.log(3);
//}

// 避免重复声明，特别的当普通的var声明与函数声明混合在一起的时候

// 一个普通块内部的函数声明通常会被提升到所在作用域的顶部，不会在像代码一样可以被条件判断控制
foo();
var a = true;
if(a){       //条件判断没有用
    function foo(){console.log('a');}
}else{
    function foo(){console.log('b');}
}
// 所以，避免在块内部声明函数