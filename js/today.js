// function myForEachs() {
//     for (let i = 0; i < this.length; i++) {
//          console.log(this[i]);
//     }
// }

// Array.prototype.myForEach = myForEachs;
// var cc = [1,2,3,4,5]
// cc.myForEach()

// --------------------------------------------

// function myforEach(mul){
//     var bb = []
//   for(let i = 0 ; i < this.length ; i++){
//     console.log(this[i] * mul)
//   }
// }
// Array.prototype.apnaSaman = myforEach

// var dd = [1,2,3,4,5]
// dd.apnaSaman(10)

// ---------------------------------------------

// function Person(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// var obj = new Person("fayyaz",19,150);
// console.log(obj)

// ---------------------------------------------
function Car(make , model , year , owner){
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
var obj2 = new Car("Lamborgini" , "model 2020",2022 ,"DIF")
console.log(obj2)

// -------------------------------------------------------

// function outer(){
//   var a ='Danish'
//    console.log(a + b)
//   function inner(){
//     var b = 'Chouhan'
//     console.log(a  + b)
//   }
//   inner()
// }
// outer()          // this is nested scope

// ----------------------------------

// const obj = {
//     name : "Danish",
//     lname : "chouhan"
// }

// function myfun2(){
//     console.log(obj.name)
// }

// const obj2 = {
//     name : "Danish",
//     lname : "chouhan",
//     myfun2

// }

// obj2.myfun2()
// myfun2.call(obj2)


// -------------------------------------------------

// var a = "Danish"

// function fn(que){
//     console.log(que,this.a)
// }

// fn("hi")

// ---------------------------------------------------

// const obj = {
//     name : "Danish-chouhan"
// }

// function fn(a,b){
//     return `${a} ${this.name} ${b}`
// }

// console.log(fn.call(obj,"Hey...","How are u"))


// --------------------

// const obj = {
//     name: "Danish-chouhan"
// }

// function fn(a, b) {
//     return `${a} ${this.name} ${b}`
// }


// console.log(fn.apply(obj, ["hey...", "how are u"]))

// --------------------


// const obj = {
//     name : "Danish-chouhan",
// }

// function fn(a,b){
//     return `${a} ${this.name} ${b}`
// }

// let wraping = fn.bind(obj)

// console.log(wraping("hey..","How are you"))



// ---------------------------------

// var a = 'Danish'

// function fn(que){
//     console.log(this.a,que)
// }

// fn("are u listening")



// function fn(que){
//     'use strict';
//     console.log(this.a,que)
// }

// fn("are u listening")

// -----------------------

// class employe {
//     constructor(name){
//         console.log("hey... "  + name  )
//     }
// }

// const obj5= new employe("Danish")
// ----------------------

// var teacher = "Danish"

// function fn1(que){
//     var b = 'danish'
//     console.log(teacher,que)
// }

// function fn2(){
//     var teacher = "adanan"
//      fn1("are u lestening")

// }

// fn2()

// ----------------------------



// const obj = {
//     name : 'Danish',
//     // fn
// }

// function fn(a,b){
//     console.log(`${a}  ${this.name} ${b}`)

// }

// obj.fn('hey...','how are u')

// fn.call(obj,"hey...","how are u")
// // fn.apply(obj,["hey...","how are u"])

// let bom = fn.bind(obj)
// bom('hey...',"how are u")


// --------------------------

// class fullName{
//     constructor(name){
// console.log('hey..'+name+'how are u')
//     }
// }
// class second extends fullName{}

// let firstCall = new second(' Danish')


// console.log(firstCall)


// ----------------------------



// function fn(){
//     for(var i = 0 ; i < this.length ; i++ ){
//         console.log(this[i])
//     }
// }

// Array.prototype.myforEach = fn


// --------------------


// function workshop(name){
//     this.name = name
// }

// workshop.prototype.asking = function(que){
//     console.log(this.name,que)
// }

// deepJS = new workshop("Danish")
// reactJS =new  workshop("fayyaz")

// deepJS.asking('hey')
// reactJS.asking('hi')




// var a = {
//     name: "shanwaz",
//   };

// var b = {
//     name: "shanwaz",
//   };

//   console.log(a == b);  // false
//   console.log(a === b); // false 



// function fn() {
//   console.log(this);
// }

// const myInstance = new fn();
// const obj = {
//   name: 'user',
//   fn1: () => {
//     console.log(this, this.name);
//   },
//   fn2: function () {
//     console.log(this, this.name);
//   }
// };

// obj.fn1();
// obj.fn2();