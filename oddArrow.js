 // Print odd numbers in an array
 var odd= arr => {
    var oddArr=arr.filter(row => row%2!=0);
    return oddArr;
}
console.log(odd([5,6,7,8,9,11,10]));

