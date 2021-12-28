// Write a JavaScript function to find a word within a string. 
// Test Data :
// console.log(findWord('The quick brown fox', 'fox')); 
// console.log(findWord('aa bb cc dd aa', 'aa'));
// Output : 
// "'fox' was found 1 times." 
// "'aa' was found 2 times."

function word(a,b){
let arr = a.split(' ')
   let count=0
  for(let i=0;i<arr.length;i++)
    {
      if(arr[i]==b){
       count=count+1;
    
      }
    }
       return `${b} was found ${count} times`;

}
console.log(word('The quick brown fox fox fox', 'fox'))