//Return all the palindromes in an array
var palindrome=arr=>{
    var newArr=[]
    arr.map(row=>{
        var letter=row.split("");
        var len=letter.length;
        var rev=[];
        for(j=len;j>=0;j--)
        {
            rev.push(letter[j]);
        }
        var reverse=rev.join("");
        if(reverse==row)
       newArr.push(row);
    });
    return newArr;
};
console.log(palindrome(["hello","reviver","fullstack","madam"]));
