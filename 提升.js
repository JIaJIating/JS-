//a = 2;
//var a;
//console.log(a);    //  2

//console.log(a);
//var a = 2;    // undefined

// �����ͺ���������������ڴ����г��ֵ�λ�ñ����ƶ����������棬�ù��̽���������
// ֻ����������ᱻ����������ֵ�����������߼�������ԭ��

//foo();
//function foo(){
//    console.log(a);    // undefined
//    var a=2;
//}
// ÿ�������򶼻��������������foo(...)�����ڲ�Ҳ���var a������������Ȼֻ��������foo()������������Ϸ���
// ����������������������Ϸ������������ᱻ������⣺
//        function foo(){
//            var a;
//            console.log(a);    // undefined
//            a=2;
//        }
//        foo();
// ���������ᱻ�������������ʽ����
//foo();
//var foo=function(){
//console.log(1);
//};     // TypeError:foo()��undeifinedֵ���к������õ��·Ƿ�����

// ��������:���������ȱ�������Ȼ����Ǳ���
//foo();    //   1
//var foo;  //���ܳ�����function foo()...������ǰ���������ظ����������������ˡ�
//function foo(){
//    console.log(1);
//}
//foo=function(){
//    console.log(2);
//};

// �����ظ���var�����ᱻ���Ե����������ں���ĺ��������ǿ��Ը���ǰ���
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

// �����ظ��������ر�ĵ���ͨ��var�����뺯�����������һ���ʱ��

// һ����ͨ���ڲ��ĺ�������ͨ���ᱻ����������������Ķ����������������һ�����Ա������жϿ���
foo();
var a = true;
if(a){       //�����ж�û����
    function foo(){console.log('a');}
}else{
    function foo(){console.log('b');}
}
// ���ԣ������ڿ��ڲ���������