//  this-keyword

// console.log(this)

// when we runn this kywword in alone this will return global object

// var a = "Danish"

// const obj = {
//   name : this.a
// }

// console.log(obj.name)


// function fn(){
//     console.log(this.a)
// }

// let person = {
//     name: "danish",
//     age: 20,
//     info: function () {
//       console.log(this.name + " is " + this.age + " years old");
//     },
//   };
//   person.info();


// const obj = ()=> {
//     console.log(this.a)
// }
// obj()
// var bb = 'Danishc'

// const aa ={
//     bb : 'Danish',
//     name :() =>{
//         console.log(this.bb)
//     }
// }


// const aa = {
//     // bb : 'Danish',
//     name :function(){
//         console.log(this.bb)
//     }
// }


// aa.name()


// binding impicit

// function myfunction() {
//     console.log(this);
//   }
//   const obj2 = {
//     somekey: 1,
//     myfunction
// var name = 'Danish'
// const aaa = {
//     name : 'Danish',
//     lname : 'Chouhan',
//     fullName : function(){
//         console.log(`${this.name} , ${this.lname}`)
//     }
// }
// aaa.fullName()
//   };
//   obj.myfunction();


// explicit biding


// function myfunction() {
//     console.log(this);
//   }
//   const obj2 = {
//     somekey: 1
//   };
//   myfunction.call(obj2)
//   apply
// bind

// binding difination ==> function ko object ke andar kam me lena ya object ko function ke andar kaam me lena

// binding presendence

// function myFunction() {
//     console.log(this)
// }

// const obj3 = {
//     somekey : 1,
// }

// const val = myFunction.bind(obj3)
// val

// bound function ki help se kisi obj ko bind karte hai
// ya 
// bind fuction se ham kisi obj ko bind karte hai
// proto type khud ek obj hai



// function fn(pro){
//     for(var a = 0 ; a < this.length ; a++){
//         console.log(this[a] * pro)
//     }
// }

// Array.prototype.myforeach = fn

// var ii = [1,2,3,4,5,6,7,8,9,10]

// ii.myforeach(90)



// scope => where u find ur veriable ..

//  i m going to this place 
// this is a phone


// console.log(this)

// function fn(){
//     console.log(this)
// }
// fn()

// var name = 'Danish'
// const a = {
//     name : 'Danish',
//     lname : 'Chouhan',
//     fullName : function(){
//         console.log(`${this.name} , ${this.lname}`)
//     }
// }
// a.fullName()