// -----------------------------------------------

//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// function comp(str1, str2) {
//     return str1.trim().length == str2.trim().length
// }


// console.log(comp("AB","CD"))
// console.log(comp("ABD","DE"))
// console.log(comp("hello","moien khan"))

// -----------------------------------------------

//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

// function divisible(num1) {
//     return num1 % 100 === 0
// }

// console.log(divisible("100"))
// console.log(divisible(1000))
// console.log(divisible(100))


// -----------------------------------------------



// Check if an Integer is Divisible By Five
// function divisibleByFive(num1) {
//     return num1 % 5 === 0
// }

// console.log(divisibleByFive(5))
// console.log(divisibleByFive(-55))
// console.log(divisibleByFive(37))

// -----------------------------------------------

//     Create a function that takes a string and returns it as an integer.
// function stringInt(str) {
    // return Number(str)
    // return str++ 
    // return str / 1
    // return str * 1
    // return str - 0
    // return Math.floor(str)
    // return Math.pow(str, 1)
// }


// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))

// -----------------------------------------------


//  Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.


// function dividesEvenly(a, b) {
//     const result = a / b;
//     return result === parseInt(result);
// }
// console.log(dividesEvenly(98,7))
// console.log(dividesEvenly(85,4))


// -----------------------------------------------

// function fn1() {
//     var a = "Danish "
//     fn2()
//     function fn2() {
//         var b = "Chouhan "
//         fn3()
//         function fn3() {
//             var c = "is "
//             fn4()
//             function fn4() {
//                 var d = "a "
//                 fn5()
//                 function fn5() {
//                     var e = "Great man "
//                     fn6()
//                     function fn6() {
//                         var f = "of his home "
//                         console.log(a,b,c,d,e,f)
//                     }
//                 }
//             }
//         }
//     }
// }
// fn1()

// -----------------------------------------------

// function mulFn() {
//     var mul = 9;
//     return function (val) {
//         mul = mul * val;
//         return mul;
//     };
// }

// var mul = mulFn();
// console.log(mul); // function anonymous
// console.log(mul(13)); 

// -----------------------------------------------

// function fn1() {
//     const name = 'Danish chouhan'
//     function fn2() {
//         // console.log(name)
//     }
//     return fn2;
// }

// var all = fn1()
// console.log(all())

// -----------------------------------------------

// let a = {
//   name: "shanwaz",
// };

// let b = {
//   name: "Danish",
// };

// console.log(a.name == b.name);  // false
// console.log(a === b); // false   // there are two type of object one is (a) and second is (b) this is the reason they are giving us false

// -----------------------------------------------

// var x = 40;
// console.log(x);  // 40
// x++; // 40
// console.log(x); // 41
// ++x; // 42
// console.log(x); // 42   // read understand your code.of kyleSimpson

// -----------------------------------------------

// x = "40";
// y = x + 1; // "401"
// console.log(y); //"401"
// y = x - 1; // 39
// console.log(y); //39

// -----------------------------------------------

// var obj1 = { 
//     name : 'kyle'
// }

// var obj = obj1

// console.log(obj == obj1) // we given refference obj1 to obj this is the reason why we getting (true).

// -----------------------------------------------

// const arr1 = [1,2,3];
// const arr2 = arr1;
// console.log(arr1); // [1,2,3]
// console.log(arr2); // [1,2,3]

// arr2.push(4); 
// console.log(arr1) // [1,2,3,4]
// console.log(arr2); // [1,2,3,4]

// -----------------------------------------------

// let num = 2;
// console.log(2 * ++num)  // 6
// console.log("\n")
// console.log(2 * num++)  // 4 

// -----------------------------------------------

// console.log(undefined > 0) // false
// console.log(undefined < 0) // false
// console.log(undefined >= 0) // false
// console.log(Object.is(undefined,0)) // false

// -----------------------------------------------

// console.log(null > 0) // false
// console.log(null < 0) // false
// console.log(null >= 0) // true
// console.log(null == undefined) // becuse of emptiness

// -----------------------------------------------PROTOTYPE

// function eachElement(callback) {
//     this.name = callback;
// }

// eachElement.prototype.getName = function () {
//     return this.name
// }
// const obj3 = new eachElement('Kyle');
// console.log(obj3);

// -----------------------------------------------

// function danish(){
//     for(var a = 0; a < this.length;a++){
//         console.log(this[a])
//     }
// }
// Array.prototype.danish = danish

// -----------------------------------------------

// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.

// function newWord(str) {
//     //  return str.slice(1)
//     let a = "";
//     for (let i = 1; i < str.length; i++) {
//         a += str[i]
//     }
//     return a
// }

// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

// -----------------------------------------------

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.

// function concat(arr1, arr2) {
//     //  return arr1.concat(arr2);
//     let a = arr1
//     for (let i = 0; i < arr2.length; i++) {
//         a.push(arr2[i])
//     }
//     return a
// }

// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

// -----------------------------------------------

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
// function search(arr, item) {
//     // return arr.indexOf(item)
//     // return arr.findIndex(a => a == item)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == item) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))

// -----------------------------------------------

// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.
// function check(arr, num) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return true
//         }
//     }
//     return false
// }

// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5))

// -----------------------------------------------

// console.log(3 > 2 > 1); //false

// -----------------------------------------------

// function fn(){}
// console.log(typeof fn)

// -----------------------------------------------

// var x;
// console.log(x);
// console.log(x); // this will show undefined becouse of hosting only acces variable not variable value
// var x = 5; //hosting

// -----------------------------------------------

// let x = [];
// let y = x;
// let z = [];
// console.log(x == y); // true
// console.log(x == z); // false
// console.log(y == z); // false
// x.push(5);
// console.log(x); // [5]
// console.log(y); // [5]
// console.log(z); // [0]

// -----------------------------------------------

// const str = 'a'
// console.log(Number(str)) // NaN

// -----------------------------------------------

// console.log([] == true) // fm

// -----------------------------------------------

// console.log(null == undefined); // true
// console.log(null === undefined); // false  // sense of emptyness but cheacking there type also
// var a;
// var b = null
// console.log(a == b); // t
// console.log(b); // null

// -----------------------------------------------

// console.log(15 == [15]); // true

// -----------------------------------------------

// console.log(try2); // undefined
// let try2 = 10  // let and const never host himself

// -----------------------------------------------

// let x = 0;
// console.log(null == x); // true

// -----------------------------------------------

// console.log(null >= 0) // true

// -----------------------------------------------

// function danish(name){
//     var b = []
//    for(let a = 0; a < this.length ; a++){
//     console.log(this[a])
//    }
// }
// Array.prototype.asalme = danish

// -----------------------------------------------Closer

// function parent() {
//     var num = 9;
//     return function child(val) {
//       num *= val;
//       return num
//     }
//   }
//   const storeVal = parent();
//   console.log(storeVal(10))


// -----------------------------------------------prototype

// we can make manually methods in prototype like map,reduce,filter etc.
// easy

// function fn(name) {
//   this.stuName = name
// }
// fn.prototype.getName = function () {
//   return this.stuName;
// }
// const storeVal2 = new fn('fayaz')
// console.log(storeVal2)

//   function myForEach(callback) {
//     let newArr = []
//     for(let i = 0; i <this.length ; i++){
//       newArr.push(callback(this[i]))
//     }
//   }

//   Array.prototype.myMap = myForEach;

//   const arr = [1,2,3]
//   arr.forEach(e => console.log(e))

// -----------------------------------------------closer

//   function bap(){
//       var no = 10;
//       return function beta(para1){
//         no *= para1
//         return no
//       }
//   }
//   const sablele = bap()
//   console.log(sablele(30))

// -----------------------------------------------

// let a = 10
// // explicit-coersion
// console.log(String(a)); // "10"
// console.log((a+"")); // string 10""
// console.log(Boolean(a)); // true
// console.log(Boolean(null)); // false
// let b =[0,0,0,0]
// console.log(Boolean(b)); // true

// -----------------------------------------------HOSTING

// console.log(a);
// var a = "Danish"

// console.log(b);
// let b = "Danish"

// console.log(c);
// const c = "Danish"

// -----------------------------------------------

// var teacher = "Danish"; // red marble

// function otherClass() {  // red marble
//    var teacher = "Danish-chouhan"; // blue marble 
//    function ask(question){   // blue marble
//     console.log(teacher,question) // blue , green
//    }

//    ask("Why")  
// }
// otherClass(); // Danish-chouhan Why 
// // ask("QWERTYU"); 

// -----------------------------------------------NEXTLEVEL LEXICAL
// function fn1(a){
// fn2("A")
// function fn2(b){
// fn3("N")

// function fn3(c){
// fn4("I")

// function fn4(d){
// fn5("S")
    
// function fn5(e){
// fn6("H")
// function fn6(f){
// console.log(a,b,c,d,e,f)
// }
// }
// }
// }
// }
// }
// fn1("D")
// -----------------------------------------------TYPE-OF-EMTINESS

// var a;
// console.log(a) // und , unInit
// console.log(b) // // undec
// var c;
// console.log(c) // und, unInt

// -----------------------------------------------


// var invalidNumber = Number("Danish")
// invalidNumber += 10
// console.log(invalidNumber) // NaN

// var myAge = Number(17)
// console.log(myAge - "Danish") // NaN

// var invalidNumbers = Number("Danish")
// console.log(invalidNumbers === invalidNumbers) // t
// console.log(invalidNumbers == invalidNumbers) // t

// console.log(Number(true)) // 1
// console.log(Number(undefined)) // nan
// console.log(Number(null)) // 0
// console.log(Number(-1)) // -1

// -----------------------------------------------


// let negativeZero = -0
// console.log(negativeZero === -0) // t
// console.log(negativeZero.toString()) // 0
// console.log(negativeZero < 0) // f
// console.log(negativeZero > 0)  // f
// console.log(negativeZero === 0) // t
// console.log(Object.is(negativeZero,0)) //f
// console.log(Object.is(negativeZero,-0)) //t


// function newNagative(num){
//     let arrows = (num < 0 || Object.is(num,-0)? "<=" : "=>" )
//     return arrows
// }
// console.log(newNagative(10))
// console.log(newNagative(-10))
// console.log(newNagative(0))
// console.log(newNagative(-0))

// -----------------------------------------------


//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.

// function acceptIntoMovie(age, isSupervised) {
//        return (age >= 15 || isSupervised == true)
// }

// var acceptIntoMovie = ((age,isSupervised) => age >= 15 || isSupervised)

// console.log(acceptIntoMovie(14, true))
// console.log(acceptIntoMovie(14, false))
// console.log(acceptIntoMovie(16, false))

// -----------------------------------------------

//     Create a function that evaluates an equation.

// var eq = (str) => eval(str) // evalute

// console.log(eq("1+2"))
// console.log(eq("6/(9-7)"))
// console.log(eq("3+2-4"))

// -----------------------------------------------

// Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".
// function concatName(firstName, lastName) {
    //    return `${firstName}, ${lastName}.`
// }

// console.log(concatName("First", "Last"))
// console.log(concatName("John", "Doe"))
// console.log(concatName("Mary", "Jane"))

// -----------------------------------------------

// Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
//  posCom(1) // 2
//  posCom(3) // 8
//  posCom(10) // 1024
// const posCom = (num) => 2 ** num;

// console.log(posCom(1));
// console.log(posCom(3));
// console.log(posCom(10));

// -----------------------------------------------

// Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
// function areaShape(base, height, shape) {
    // return (shape == "triangle" ? (0.5 * base * height) : (base * height) )
    // shape === 'shape1' ? shape : (  shpae === 'shape2' ? shape2 : shape3 )


// }
// console.log(areaShape(2, 3, "triangle"))
// console.log(areaShape(8, 6, "parallelogram"))
// console.log(areaShape(2.9, 1.3, "parallelogram"))

// -----------------------------------------------

// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
// function carsNeeded(n) {
//     return Math.ceil(n / 5)
// }
// console.log(carsNeeded(5)) // 1
// console.log(carsNeeded(11)) // 3
// console.log(carsNeeded(0))// 0
// console.log(carsNeeded(50))// 0
// console.log(carsNeeded(25))

// -----------------------------------------------

// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
// The left shift operation is similar to multiplication by powers of two.

// function shiftToLeft(num1, num2) {
//     return num1 * 2 ** num2
// }

// console.log(shiftToLeft(5, 2)  )// 20
// console.log(shiftToLeft(10, 3) )// 80
// console.log(shiftToLeft(-32, 2)) // -128
// console.log(shiftToLeft(-6, 5) )// -192
// console.log(shiftToLeft(12, 4) )// 192
// console.log(shiftToLeft(46, 6) )// 2944

// -----------------------------------------------

// Write a function that returns true if a year is a leap, otherwise return false.

// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.

// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

// Look at the exa
// Look at the examples, and if you need help, look at the resources panel.

// Examples
// function leapYear(leap) {
//     return leap % 4 === 0
// }

// console.log(leapYear(1990)) // false
// console.log(leapYear(1924)) // true
// console.log(leapYear(2021)) // false
// console.log(leapYear(2024)) // true
// console.log(leapYear(2024)) // true
// console.log(leapYear(1896)) // true

// -----------------------------------------------

// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples


// console.log(sumOfCubes([1, 5, 9])) // 855
// console.log(sumOfCubes([3, 4, 5])) // 216
// console.log(sumOfCubes([2])) // 8
// console.log(sumOfCubes([])) // 0
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// -----------------------------------------------


// function fName(firstName){
//     firstName = "Danish"
//     return function(lastName){
//      firstName += lastName
//      return firstName
//     }
//  }
//  const fullName = fName()
//  console.log(fullName('Chouhan'))
//  console.log(typeof fullName)

// -----------------------------------------------

// var a = new Object();
// a.name = "Danish",
// a.lastName = 'Chouhan'

// console.log(a.name)

// -----------------------------------------------

// function fn(name) {
//     this.stuName = name
//   }
//   fn.prototype.getName = function () {
//     return this.stuName;
//   }
//   const storeVal2 = new fn('fayaz')
//   console.log(storeVal2)
  
// -----------------------------------------------

// console.log(this)  // this is only accours global

// function fn(){
//     console.log(this)
// }
// fn()


// var dan = new Object()
// dan.firstName = "Danish"
// dan.lastName = "Chouhan"
// dan.fn = function(){
//        console.log(this.firstName)
// }
// dan.fn()

// -----------------------------------------------

// var a = 10
// var b = "20"

// console.log((a + +b))
// console.log(+b + a)

// -----------------------------------------------


// var a = new String("b")
// a.name = 123
// console.log(a)

// var b = new Number(34)
// b.age = 19
// console.log(b)

// var a = new Boolean(true)
// a.name = false
// console.log(a)

// -----------------------------------------------

// var teacher = 'Kyle';
// var a = "good"

// function student(b){
//     var c = "boy"
//     console.log(a,b)  // good,und
// }

// function student2(){
//     var a  = "girl"

//     student("is best") 
//     console.log(a) // girl is best

// }

// student2()

// -----------------------------------------------

// const j = "fayyaz"
// {
//   console.log(j)
// }

// ------------------------------------------------

// {
//     let y = 'fayyaz'
//     const x = "khilji"
// }
//   console.log(y)
//   console.log(x)

// -------------------------------------------

// var teacher = "kyle";
 // when we use only let or const inside of curly braces he convertion block to scope.
// {
//   let teacher2 = "suzy";
//   console.log(teacher);
// }
// console.log(teacher);

// ----------------------------------------------


// const arr = ['Kyle','Suzy'];
// arr[1] = 'Simon';
// console.log(arr)

// ------------------------------------------------

// const obj = {
//     name : "Danish",
//     lastName : "Chouhan"
// }
// obj.name = "DANUUU"
// console.log(obj)

// -----------------------------------------------

// console.log(a)
// a = 'fayyaz'
// var a;

// -----------------------------------------------

// console.log(fn1(2,4))

// function fn1(a,b){
//     return a + b
// }

// -----------------------------------------------

// var teacher = 'Kyle';
//  (function anotherTeacher() {
//     var teacher = 'suzy';
//     console.log(teacher)
//  })()

// -----------------------------------------------

// var a = new Object()
// a.name = "Danish-chouhan"
// a.class = "11th"
// a.fn = function(){
//     console.log(this.class)
// }
// a.fn()

// -----------------------------------------------

// const fullName = {
//     fn : function(){
//         return  `hey... my name is ${this.firstName} and my cast is ${this.lastName}`
//     }
// }


// const fName = {
//     firstName : "Danish",
//     lastName : "chouhan"
// }

// const sName = {
//     firstName : "fayyaz",
//     lastName : "khilji"
// }

// console.log(fullName.fn.call(fName))
// console.log(fullName.fn.call(sName))

// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------
