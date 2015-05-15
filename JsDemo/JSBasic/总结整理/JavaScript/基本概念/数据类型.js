//ECMAScript有5种简单数据类型，Undefined,NUll,Boolean,Number,String和一种复杂类型Object

/**typeof操作符用来检测数据类型
"undefined" --如果这个值未定义或者未初始化
"boolean" -- 如果这个值是布尔值
"string" -- 如果这个值是字符串
"number" -- 如果这个值是数值
"object" -- 如果这个值为对象或者null
"function" -- 如果这个值是函数*/

// Undefined类型
//var 声明变量的默认值为undefined (注意不是"undefined")
var message;
alert(message==undefined);//true

//注意，对未初始化的变量执行typeof会返回undefined值，而对于未声明的变量执行typeof也会返回undefined
alert(typeof message);//undefined
alert(typeof age);//undefined,注意age变量并没有声明

//Null 类型
//Null 类型的值为null，null值表示一个空对象指针，所以typeof null返回的值为object
var car=null;
alert(typeof car);//object
//如果定义的变量是用来保存对象的，那么最好初始化为null值，这样容易判断，例如
if(car!=null)
{
	//对car对象执行某些操作
}

alert(null==undefined);//注意这个返回true,undefined的值派生自null的值;



//Boolean类型
//Boolean转换只有true，false两个值
var message1="Hello word!";
var messageAsBoolean=Boolean(message1);
if(message1)
{
	alert("value is ture");//message1会被自动转化为Boolean值
}

//String类转换，例如：
Boolean("任何非空值");//true
Boolean("");//false

//Number类转换
Boolean(2);//true 任何非0值（包括无穷大) 
Boolean(0);//false (0和NaN)

//Object类型
Boolean("任何非空对象");//true
Boolean(null);//false

//Undefined类型
Boolean(undefined);//false;



//Number 类型
//1） 浮点数值 a=0.1,b=0.2,a+b不等于0.3
//2) 数值范围

/*Number.MIN_VALUE;//js中的最小数值
Number.MAX_VALUE;//js中的最大数值
判断一个数字是否是在最小值和最大值之间用isFinite()函数*/

alert(isFinite(1));//true;

//NaN (not a number)是一个特殊的数值，NaN于任何值都不相等，包括本身
alert(NaN==NaN);//false
//isNaN()函数用来判断是否可以转换为数值,任何不能转换为数值的值返回true
alert(isNaN(NaN));//true
alert(isNaN(10));//false;
alert(isNaN("10"));//false(可以转换为数值10)
alert(isNaN("blue"));//true(不可以转换为数值)
alert(isNaN(true));//false(可以被转换成数值1)

//数值转换：Number(),parseInt(),parseFloat()

var num1=Number("111Hello word");//NaN
var num2=parseInt("111Hello word");//111 非空格第一个字符不是数字或者负号，则返回NaN，否则则继续解析
var num3=parseFloat("22.5.6ss");//22.5
var num4=Number("");//0
var num5=parseInt("");//NaN
var num6=Number(true);//1
var num7 = parseInt(true); //NaN





