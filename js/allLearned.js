// -----------------------------------------------

//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1,str2){
    return str1.trim().length == str2.trim().length
}


// console.log(comp("AB","CD"))
// console.log(comp("ABD","DE"))
// console.log(comp("hello","moien khan"))

// -----------------------------------------------

//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.

function  divisible(num1){
    return num1 % 100 === 0
}

// console.log(divisible("100"))
// console.log(divisible(1000))
// console.log(divisible(100))


// -----------------------------------------------



// Check if an Integer is Divisible By Five
function divisibleByFive(num1){
    return num1 % 5 === 0
}

// console.log(divisibleByFive(5))
// console.log(divisibleByFive(-55))
// console.log(divisibleByFive(37))

// -----------------------------------------------

//     Create a function that takes a string and returns it as an integer.
function stringInt(str){
    // return Number(str)
    // return str++ 
    // return str / 1
    // return str * 1
    // return str - 0
    // return Math.floor(str)
      return Math.pow(str,1)
}


// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))

// -----------------------------------------------


//  Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.


function dividesEvenly(a,b) {
        const result = a/b;
        return result === parseInt(result);
        }
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

function mulFn() {
    var mul = 9;
    return function (val) {
      mul = mul * val;
      return mul;
    };
  }
  
  var mul = mulFn();
  // console.log(mul); // function anonymous
  // console.log(mul(13)); 
  
  // -----------------------------------------------
  
  function fn1(){
    const name = 'Danish chouhan'
    function fn2(){
        // console.log(name)
    }
    return fn2;
  }
  
  var all = fn1()
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
// // console.log(2 * ++num)  // 6
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

function newWord(str){
    //  return str.slice(1)
   let a = "";
   for(let i = 1; i < str.length ; i++){
      a += str[i]
   }
   return a
}

// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

// -----------------------------------------------

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.

function concat(arr1,arr2){
    //  return arr1.concat(arr2);
    let a = arr1
    for(let i = 0 ; i < arr2.length; i++ ){
        a.push(arr2[i])
    }
    return a
}

// console.log(concat([1, 3, 5], [2, 6, 8]))
// console.log(concat([7, 8], [10, 9, 1, 1, 2]))
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]))

// -----------------------------------------------

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
function search(arr,item){
    // return arr.indexOf(item)
    // return arr.findIndex(a => a == item)
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == item){
            return i
        }
    }
    return -1
}

// console.log(search([1, 5, 3], 5))
// console.log(search([9, 8, 3], 3))
// console.log(search([1, 2, 3], 4))
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"))

// -----------------------------------------------

// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.
function check(arr,num){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] == num){
            return true
        }
    }
    return false
}

// console.log(check([1, 2, 3, 4, 5], 3))
// console.log(check([1, 1, 2, 1, 1], 3))
// console.log(check([5, 5, 5, 6], 5))
// console.log(check([], 5))

// -----------------------------------------------