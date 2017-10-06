// 当函数可以记住并访问所在的作用域，即使函数是在当前作用域之外执行，这时就产生了闭包
//function foo(){
//    var a = 2;
//    function bar(){
//        console.log(a);
//    }
//    return bar;
//}
//var baz = foo();
//baz();    //  2  -----这就是闭包的效果
// 闭包使得函数可以继续访问定义时的作用域
//function foo(){
//    var a = 2;
//    function bar(){
//        console.log(a);
//    }
//    baz(bar);
//}
//function baz(fn){
//    fn();         //这就是闭包
//}
//foo();
// 把内部函数bar传给baz，当调用这个内部函数（现在叫fn）时，即调用bar()

// 传递函数也可以是间接的
//var fn;
//function foo(){
//    var  a=2;
//    function bar(){
//        console.log(a);
//    }
//    fn=bar;            // 把bar分配给全局变量
//}
//function  baz(){
//    fn();            //这就是闭包
//}
//foo();
//baz();    // 2
// 无论通过何种手段将内部函数传递到所在作用域以外，它都会持有对原始定义作用域的引用，
// 无论在何处执行这个函数都会使用闭包。
//function wait(message){
//    setTimeout(function timer(){
//        console.log(message);
//    },1000);
//}
//wait("hello"); //wait执行1000ms后，他的内部作用域不会消失timer函数依然保有wait()作用域的闭包

// 循环和闭包
//for(var i=1;i<=5;i++){
//    setTimeout(function timer(){
//        console.log(i);    //6,6,6,6,6
//    },i*1000);
//}
// 延迟函数的回掉会在循环结束时才执行
// 解决：IIFE
//for(var i=1;i<=5;i++){
//    (function(){
//        setTimeout(function timer(){
//            console.log(i);     // 6,6,6,6,6（作用域是空的，所以不行）
//        },i*1000);
//    })();
//}

//for(var i=1;i<=5;i++){
//    (function(){
//        var j=i;   // 用另一个自己的变量把i存起来
//        setTimeout(function timer(){
//            console.log(j);     // 1,2,3,4,5(好了，可以了)
//        },j*1000);
//    })();
//}
// 或者
//for(var i=1;i<=5;i++){
//    (function(j){
//        setTimeout(function timer(){
//            console.log(j);     // 1,2,3,4,5(好了)
//        },j*1000);
//    })(i);
//}
// 在迭代内使用IIFE会为每个迭代都生成一个新的作用域（即每个迭代都需要一个块作用域），
// 使得延迟函数的回调可将新的作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问。

// 块作用域和闭包联手：
// let声明可以用来劫持块作用域，并且在这个块作用域中声明一个变量
// 本质上是将一个块转换成可以被关闭的作用域
//for(var i=1;i<=5;i++){
//    let j=i;
//    setTimeout(function(){
//        console.log(i);
//    },j*1000);
//}
//上面代码for循环头部的let声明有一个特殊的行为，这个行为指出变量每迭代一次都会声明，且都会用上一个迭代结束
// 时的值来初始化这个变量

//for(let i=1;i<=5;i++){
//    setTimeout(function(){
//        console.log(i);
//    },i*1000);
//}

// 模块模式：最常见的实现模块模式的方法通常被称为模块暴露
//function CoolModule(){
//    var something="beauty";
//    var another=[1,2,3];
//    function doSomething(){
//        console.log(something);
//    }
//    function doAnother(){
//        console.log(another.join('-'));
//    }
//    return {
//        doSomething: doSomething,
//        doAnother: doAnother
//    };
//}
//var foo=CoolModule();
//foo.doSomething();    // beauty
//foo.doAnother();      // 1-2-3
// CoolModule()只是一个函数，必须通过调用它来创建一个模块实例。
// 如果不执行外部函数，内部作用域和闭包都无法被创建。
// CoolModule()返回一个用对象字面量语法来表示的对象，该返回的对象中含有
// 对内部函数(不是内部数据变量)的引用,保持内部数据变量是隐藏且私有的状态。
// 可以将这个对象类型的返回值看作本质上是模块的公共API
// 这个对象类型的返回值最终被赋值给外部的变量foo,通过它来访问API中的属性方法
// 例如：foo.doSomething();

// 上面模块模式每次调用，都会创建一个新的模块实例，当只需要一个实例，可以对该模式改进来实现单例模式
//var foo=(function CoolModule(){
//    var something="beauty";
//    var another=[1,2,3];
//    function doSomething(){
//        console.log(something);
//    }
//    function doAnother(){
//        console.log(another.join('-'));
//    }
//    return {
//        doSomething: doSomething,
//        doAnother: doAnother
//    };
//})();               // 将模块转成了IIFE
//foo.doSomething();    // beauty
//foo.doAnother();      // 1-2-3

// 模块也是普通的函数，也可以传参
function CoolModule(id){
    function identify(){
        console.log(id);
    }
    return {
        identify:identify              // 返回的对象含有对内部函数的引用
    };
}
var foo1=CoolModule("111");
var foo2=CoolModule("222");
foo1.identify();    // 111
foo2.identify();    // 222