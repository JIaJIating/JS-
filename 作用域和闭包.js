// ���������Լ�ס���������ڵ������򣬼�ʹ�������ڵ�ǰ������֮��ִ�У���ʱ�Ͳ����˱հ�
//function foo(){
//    var a = 2;
//    function bar(){
//        console.log(a);
//    }
//    return bar;
//}
//var baz = foo();
//baz();    //  2  -----����Ǳհ���Ч��
// �հ�ʹ�ú������Լ������ʶ���ʱ��������
//function foo(){
//    var a = 2;
//    function bar(){
//        console.log(a);
//    }
//    baz(bar);
//}
//function baz(fn){
//    fn();         //����Ǳհ�
//}
//foo();
// ���ڲ�����bar����baz������������ڲ����������ڽ�fn��ʱ��������bar()

// ���ݺ���Ҳ�����Ǽ�ӵ�
//var fn;
//function foo(){
//    var  a=2;
//    function bar(){
//        console.log(a);
//    }
//    fn=bar;            // ��bar�����ȫ�ֱ���
//}
//function  baz(){
//    fn();            //����Ǳհ�
//}
//foo();
//baz();    // 2
// ����ͨ�������ֶν��ڲ��������ݵ��������������⣬��������ж�ԭʼ��������������ã�
// �����ںδ�ִ�������������ʹ�ñհ���
//function wait(message){
//    setTimeout(function timer(){
//        console.log(message);
//    },1000);
//}
//wait("hello"); //waitִ��1000ms�������ڲ������򲻻���ʧtimer������Ȼ����wait()������ıհ�

// ѭ���ͱհ�
//for(var i=1;i<=5;i++){
//    setTimeout(function timer(){
//        console.log(i);    //6,6,6,6,6
//    },i*1000);
//}
// �ӳٺ����Ļص�����ѭ������ʱ��ִ��
// �����IIFE
//for(var i=1;i<=5;i++){
//    (function(){
//        setTimeout(function timer(){
//            console.log(i);     // 6,6,6,6,6���������ǿյģ����Բ��У�
//        },i*1000);
//    })();
//}

//for(var i=1;i<=5;i++){
//    (function(){
//        var j=i;   // ����һ���Լ��ı�����i������
//        setTimeout(function timer(){
//            console.log(j);     // 1,2,3,4,5(���ˣ�������)
//        },j*1000);
//    })();
//}
// ����
//for(var i=1;i<=5;i++){
//    (function(j){
//        setTimeout(function timer(){
//            console.log(j);     // 1,2,3,4,5(����)
//        },j*1000);
//    })(i);
//}
// �ڵ�����ʹ��IIFE��Ϊÿ������������һ���µ������򣨼�ÿ����������Ҫһ���������򣩣�
// ʹ���ӳٺ����Ļص��ɽ��µ�����������ÿ�������ڲ���ÿ�������ж��Ậ��һ��������ȷֵ�ı��������Ƿ��ʡ�

// ��������ͱհ����֣�
// let�������������ٳֿ������򣬲����������������������һ������
// �������ǽ�һ����ת���ɿ��Ա��رյ�������
//for(var i=1;i<=5;i++){
//    let j=i;
//    setTimeout(function(){
//        console.log(i);
//    },j*1000);
//}
//�������forѭ��ͷ����let������һ���������Ϊ�������Ϊָ������ÿ����һ�ζ����������Ҷ�������һ����������
// ʱ��ֵ����ʼ���������

//for(let i=1;i<=5;i++){
//    setTimeout(function(){
//        console.log(i);
//    },i*1000);
//}

// ģ��ģʽ�������ʵ��ģ��ģʽ�ķ���ͨ������Ϊģ�鱩¶
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
// CoolModule()ֻ��һ������������ͨ��������������һ��ģ��ʵ����
// �����ִ���ⲿ�������ڲ�������ͱհ����޷���������
// CoolModule()����һ���ö����������﷨����ʾ�Ķ��󣬸÷��صĶ����к���
// ���ڲ�����(�����ڲ����ݱ���)������,�����ڲ����ݱ�����������˽�е�״̬��
// ���Խ�����������͵ķ���ֵ������������ģ��Ĺ���API
// ����������͵ķ���ֵ���ձ���ֵ���ⲿ�ı���foo,ͨ����������API�е����Է���
// ���磺foo.doSomething();

// ����ģ��ģʽÿ�ε��ã����ᴴ��һ���µ�ģ��ʵ������ֻ��Ҫһ��ʵ�������ԶԸ�ģʽ�Ľ���ʵ�ֵ���ģʽ
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
//})();               // ��ģ��ת����IIFE
//foo.doSomething();    // beauty
//foo.doAnother();      // 1-2-3

// ģ��Ҳ����ͨ�ĺ�����Ҳ���Դ���
function CoolModule(id){
    function identify(){
        console.log(id);
    }
    return {
        identify:identify              // ���صĶ����ж��ڲ�����������
    };
}
var foo1=CoolModule("111");
var foo2=CoolModule("222");
foo1.identify();    // 111
foo2.identify();    // 222