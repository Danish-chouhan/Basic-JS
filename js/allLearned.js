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
  
  