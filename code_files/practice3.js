let marks={
    raj:76,
    ravi:46,
    raju:87,
    ram:56,
    hema:67
}
let marks_arr = Object.keys(marks)
for(let i=0;i<marks_arr.length;i++)
{
console.log("The marks of "+marks_arr[i]+" is "+marks[marks_arr[i]])
}
