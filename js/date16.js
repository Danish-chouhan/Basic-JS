console.log(null <= 0)
console.log(null >= 0)
console.log(null == 0)

// -----------------------------------

console.log("z" > "a" )
console.log("bee" > "be" )
console.log("2" > 1 )
console.log("z" > "a" )

// --------------------------------------
// const arr = [1,2,3];
// const arr2 = arr.slice();
// console.log(arr) // [1,2,3]
// console.log(arr2) // [1,2,3]
// arr.push(4);
// console.log(arr) // [1,2,3,4]
// console.log(arr2) // [1,2,3]
// -----------------------------------------
// let arr = [1,2,3];
// const arr2 = arr.slice();
// console.log(arr) // [1,2,3]
// console.log(arr2) // [1,2,3]
// arr = [10,20,30]
// console.log(arr) // [10,20,30]
// console.log(arr2) // [1,2,3]
// --------------------------------------------------
let counter = 0;
console.log(2 * counter++) // 0
console.log(2 * ++counter) // 2
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false  // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // nan
// null + 1 // 1
// undefined + 1 // nan
// console.log(Number([undefined]))
// console.log("  -9  " - 5) //'-14'
// console.log("  -9  " + 5) // ''
// har ek obj or function ke pas khud ki internal property hoti hai unko apan prototype kehte hai
console.log(String({}))


function fn1(a){
   fn2("a")
function fn2(b){
    fn3("n")
function fn3(c){
    fn4("i")
function fn4(d){
    fn5("s")
function fn5(e){
    fn6("h")
function fn6(f){
    console.log(a,b,c,d,e,f)
}
}   
}   
}   
} 
}
fn1("D")

// // var teacher = "Danish"
// function fn(que){
//     // var teacher = 'Danish-chouhan'
// console.log(teacher,que)
// }
// function fn2(){
//     var teacher = "chouhan"
//     fn("assalamualaikum")
// }
// fn2()


// function fn1(a){
    
//     return function(b){
//      a += " " + b
//      return a
//     }
// }
// const full = fn1("Danish")
// console.log(full("chouhan"))


function fn(o){
    for(var i = 0 ; i < this.length ; i++){
        console.log(this[i] * o)
    }
}

Array.prototype.myech = fn

var ii = [1,2,3,4,5]
ii.myech(20)

function Fn(name,Class,age){
    this.name = name
    this.Class = Class
    this.age = age 
}

var cc = new Fn("Danish","11th",17)
// document.write(cc)

// new ek obj hai jo ki fun ko invoke kar ke ek emt obj bna ta hai

// console.log(String([])) // ""
// console.log(String({})) // [object Object]
// console.log(String(['1,2,3,4'])) // "1,2,3,4"
// console.log(String([null])) // ""
// console.log(String(undefined)) // "und"
// console.log(String(Number)) // 
// console.log(String('1234')) // "1,2,3,4"
// console.log(String([[[[[[[[[]]]]]]]]])) //""


// console.log(String(344)) // '344'
// console.log(String(BigInt(2334n))) //'2334'
// console.log(String(Symbol("my name is fayyaz"))) 
// console.log(String([""])) // ''
// console.log(String([234])) // '234'
// console.log(String(true)) // 'true'
// console.log(String(false)) // 'false'
// console.log(String({name : 746})) // [obj Obj]
// console.log(String(Boolean)) // fn
// console.log(String(123)) // '123'


console.log(String(100-23)) // "77"
console.log(String(100 * 23)) // '2300'
console.log(String(100 % 50)) // '2'
console.log(String(10 / 47)) // 'div'
console.log(String(100 + 23)) // '123'
console.log(String(new Date())) // 'newdate'
console.log(String({name : "fayyaz"})) // [obj,Obj]
console.log(String(false)) // 'false'
console.log(String(true)) //'true'
console.log(String(0)) // '0'
console.log(String(1)) // '1'
console.log(String("0")) // '0'
console.log(String("000")) //'000'
console.log(String("1")) //'1'
console.log(String(NaN)) // 'nan'
console.log(String(Infinity)) // 'infi'
console.log(String("")) // '
console.log(String("20")) // '20'
console.log(String("twenty")) //'twe'
console.log(String([])) // ''
console.log(String([20])) // '20'
console.log(String(10,20)) // '10'
console.log(String(['twenty'])) // 'twe'
console.log(String(['ten','twenty'])) // 'ten,twenty'
console.log(String(function () {})) // 'fn'
console.log(String({})) // [obj Obj]
console.log(String(null)) // 'null'
console.log(String(undefined)) // 'und'
console.log(Boolean([]))

// var a = "Danish"
// var b = a.length
// console.log(typeof b)

// var a = new String("danish")
// console.log(a)

// import { fn } from "./today.js";
// var a = 10
// var b = 20
// console.log(fn(a,b))
var a = 'danish'
function fn(b){
    var a = 'Danish'
    console.log(a,b)
}
function fn2(){
    var a = 'RAJU'
    fn('Chouhan')
}
fn2()