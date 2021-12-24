//return prime numbers in an array

var prime=arr =>{
    
    var newArr=[];
    arr.map(row=> {
   
        var result=0;
       for(j=2;j<row;j++)
         {
           if(row%j==0)
           {
           result=result+1;
           }
         }
       if(result==0)
         {
         newArr.push(row);
         }
    })
    return newArr;
    
}
console.log(prime([5,10,11,20,7,9]));