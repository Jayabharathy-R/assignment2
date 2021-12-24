// sum of numbers in an array
var sum= arr =>{
     
    var res=arr.reduce((accumulator,initial)=>accumulator+initial);
    return res;
}
console.log(sum([1,2,3,4,5]));