// var a = 10
// var b = 101

// console.log(++a) // 11 // 1 = 1 + 10
// console.log(a++) //11 // 10 = 1 + 1
// console.log(++b) // 102
// console.log(b) // //102
// console.log(a) // 12  // 10
// console.log(++a) //13 // 1 = 1 + 10
// console.log(b++) // 102
// console.log(b) // 103
// console.log(++b) // 104
// console.log(a) // 13  // 10
// console.log(++a) // 14 //  // 1 =  1 + 10
// console.log(a++) // 14 // 10 + 1
// console.log(a) //15  1 + 10

// // // premitive datatype 


// var a = 10
// var b = "danish"
// var c = null   
// var d = undefined
// var e = true
// var f = 1123456789034567890861234567892345678901234567890234567890n
// var g = Symbol("danish")
// // non primitive 


// var h = [1,2,3,4]
// var i =  {name : 'Danish'}
// var j =  function(){}
// console.log(typeof a) //num
// console.log(typeof b) // str
// console.log(typeof c) // object
// console.log(typeof d) // unde
// console.log(typeof e) // boolean
// console.log(typeof f) // bigint
// console.log(typeof g) // symbol


// console.log("")


// console.log((typeof h)) // obj
// console.log((typeof i)) // obj
// console.log((typeof j)) // func



// var l = Number("Dansish")

// console.log(typeof l)

// var m = "12"
// var b =m = m+1
// console.log(+m)
// console.log(Number(m))
// console.log(parseInt(m))



// console.log(Infinity + Infinity); // infinity
// console.log(Infinity - Infinity); // nan
// console.log(Infinity * Infinity); // infinity
// console.log(Infinity / Infinity); //nan


// console.log( [] == ![])  // true

// console.log( [] != [])

// console.log( [ ] != [ ] ); //true

// console.log((!([ ]==[ ]))); 
// console.log((!(false)));
//   console.log((true));


// console.log( ! [ ] ); // true
// console.log( ! { } ); // false


// function fn(){}
// console.log( ! fn ( ) );

// console.log(0 * Infinity); // nan
// console.log(1/0) // infintity

// console.log(1 ** Infinity); //nan

// console.log(NaN ** 0); //1
// console.log(Number.isNaN(NaN)) // true

// var a = Number(0o10)

// console.log(a) // 8


// var num = '585'
// console.log(Number(num)) // 585
// var num1 = 585
// console.log((num1)) //585
// console.log((num === num1)) // false



// var a = '585'
// console.log(Number(a)) //585
// var b = '585' 
// console.log(Number(b)) //585
// console.log(a === b)  //true


// var nan = "jhgujhfdghuj456"
// console.log(isNaN(nan)) // true
// var nan1 = '456' 
// console.log(isNaN(nan1)) //false
// console.log(isNaN(nan) === isNaN(nan1)) // false


// var l = isNaN(Number(0o23));
// console.log(l); // false

// var ii = 0o22
// console.log(ii)

// console.log(Math.sign(0))
// console.log(Math.sign(-0))

// console.log(Object.is(Math.sign(0),Math.sign(-0)))
// Math.sign(0);   // -0
// Math.sign(-0);   // 0

var arr1 = [];
var arr2 = [];
console.log(arr1 == arr2)

// if (arr1 == !arr2) {
//     console.log("Yes, it's true!");
// }

if (arr1 != arr2) {
    console.log("It's true again!");
}


var arr1 = [];
var arr2 = [];


//1. arr1 == !arr2
//2. [] == false 
//3. "" == false
//4. "" == 0
//5. 0 == 0 
//6. 0 === 0 
if (arr1 !== !arr2) console.log("Yes, it's true!");


