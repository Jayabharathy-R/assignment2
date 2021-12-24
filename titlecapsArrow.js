/ title caps of all strings in a string array
var titleCaps= arr =>{
    var newArr=arr.map(row =>{
   
    let lc= row.toLowerCase();
    var str=lc.charAt(0).toUpperCase()+lc.slice(1);
    return str;
    })
    
    return newArr;

}
console.log(titleCaps(["hello","guVi","fullStack"]));