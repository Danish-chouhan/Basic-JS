// console.log((typeof null)) 
// --------------------------
// console.log(null == undefined) 
// // --------------------------
// console.log(Number.MAX_VALUE + Number.MAX_VALUE) // inf
// console.log(Number.MAX_VALUE - Number.MAX_VALUE) // 0
// --------------------------
// console.log('a'/2);  // nan
// --------------------------
// const s = 'JavaScript';
// s[0] = 'j';
// console.log(s)
// --------------------------

// console.log(Boolean('a')) //t
// console.log(Boolean(10)) // t
// console.log(Boolean('')) // f
// console.log(Boolean(Infinity)) //t 
// console.log(Boolean({foo : 100})) //t
// console.log(Boolean(0)) //f
// console.log(Boolean(null))//f
// console.log(Boolean(undefined))//f

// ----------------------------

// let pageView = (BigInt(Math.pow(3,50)))
// console.log(pageView)

// -----------------------------

// object => javascript me object properties ka collection hai jaha ki har ek value ka address uske keys se hota hai keys-(property)

// const obj = {
//     name : 'Danish',
//     lname : 'Chouhan',
//     class : "11th",
//     sub : "science-Maths"    
// }
// console.log(obj["lname"]) 
// console.log(obj.lname)

// --------------------------

// let completed = true
// let active = new Boolean(false)

// completed.name = "Danish"
// active.tOrf = active.valueOf() 

// console.log(completed.name)

// console.log(completed instanceof Boolean)
// console.log(active instanceof Boolean)

// let falseObj = new Boolean(false)
// if(falseObj){
// console.log('this is becouse Boolean is a object')
// }

// -----------------

// let statusa = false;
// let str = statusa.toString();  // false
// let back = Boolean(str); // true
// console.log(str) //''
// console.log(back)//false

// -----------------

// console.log('a' < 'b')
// console.log('a' > 'b')
// console.log('a' < "B")
// console.log('a' > "B")
// console.log('a' == "B")
// console.log('a' <= "B")

// ---------------------------------------

// const obj2 =  {
//     'name of' : "Danish",
//     Class : '11th',
//     school : "MAKAM sr sec school"
// }

// console.log(obj2["name of"])

// ----------------------------------------

// let employee = {
//     firstName: 'Peter',
//     lastName: 'Doe',
//     employeeId: 1
// };

// console.log('ssn' in employee);  // f
// console.log('employeeId' in employee); // t 


// console.log(Number('123')) // 123
// var a = (1,2,3,4,3)
// var b = Number(a)

// console.log(a) // 3


// ------------------------------------------

// const obj3= {
//     name : "Danish",
//     lname : "chouhan"
// }

// function fullName(){
//     console.log(this.name + " " + this.lname)
// }

// obj3.fullName = fullName
// obj3.fullName()

// ------------------------------------------

// function Person(fname,lname){
//     this.fname = fname
//     this.lname = lname
//     this.fullName = function(){
//         return this.fname + ' and ' + this.lname
//     }
// }

// const calling = new Person('Danish','Chouhan')
// const calling2 = new Person('danuuu','Chouhan')

// console.log(calling.fullName())
// console.log(calling2.fullName())
