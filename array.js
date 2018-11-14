// comment in js
/*

multiple line

*/
//create an array
//create an empty array
var myArr = new Array()
//second way is recommended, both work
var myArr2= []

//create an array of a certain size
var myBigArr = new Array(100)

var myBigArr2 =[,,,,]
var myBigArr3 = [1,2,2,2,3,4]

var array = []

// Gives us the size of the array
array.length

// Position of items in the array
//index              0         1      2
var superArray = ['rock', 'paper', 'black']
// 0 base, starts at zero

//get a value with the index
superArr=[1]

//insert in the array
var supArr = []

//add items to an array
supArr.push('Stan Lee', 'Spiderman', 1, 1.23)

//it will add into the beginning of an array
supArr.unshift(1, 2, 2.3, true)

//remove

//mutable vs immutable
//mutable are items that can be changed
//immutable are items that can not be changed
var sArr = [1,2,3]

//removes the last element of the array and returns it, mutable
sArr.pop
// removes the first element of the array and returns it, mutable
sArr.shift

//mutable
delete sArr[2]

// immutable
sArr.slice(2)

//iterate, going through an array, loops
var nums = [1, 2, 3, 4, 5]

//forEach
nums.forEach(function(num, index){
  console.log("inex of: " =index + "values: " +num)
})

//map
nums.map(function(num, index){
  console.log(num++)
})

//filter
nums.filter(function(num, index){
  console.log(num % 2 == 0)
})

['s', 23, 23.2, true, false].filter(boolean)

//for
for(var inex=0; index< nums.length; index ++) {
  console.log(num[index])
}

//type checking
//checks for what datatype is something?
typeof []
typeof 0
typeof true
typeof "ate"
typeof 1.2

//misc functions 
var lastArr =["rock", "green", "blue"]

//returns a string of what the array looks like
lastArr.toString

//brings two values together
lastArr.join()

// reverses the elements in an array
lastArr.reverse

//puts the items in order, ascending, alphabetical for 
//strings, numbers and floats < >
lastArr.sort

//search the array
lastArr.find()

//tell the index of the value
lastArr.indexOf()

//boolean of inf the array includes a value
lastArr.includes()

//compbine arrays
lastArr.concat()