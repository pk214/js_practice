console.log("This is qusestion number 1")
let marks = {
    raj: 76,
    ravi: 46,
    raju: 87,
    ram: 56,
    hema: 67
}
let marks_arr = Object.keys(marks)
for (let i = 0; i < marks_arr.length; i++) {
    console.log("The marks of " + marks_arr[i] + " is " + marks[marks_arr[i]])
}
console.log("================================================")
console.log("This is question number 2")
for (let j in marks_arr) {
    console.log("The marks of " + marks_arr[j] + " is " + marks[marks_arr[j]])
}
console.log("================================================")
console.log("This is question number 3")
console.log("Enter number 5")
{
    let a
    while (a != 5) {
        a = prompt("Enter the number")
        console.log("Try again")
    }
    console.log("Number matched")
}
console.log("=================================================")
console.log("This is question number 4")
const mean = (a, b, c) => {
    return (a + b + c) / 3
}
let a = 3
let b =4
let c = 2
// let d=prompt("Enter fourth number")
// let e=prompt("Enter fifth number")
console.log("The mean of numbers= ", mean(a, b, c))