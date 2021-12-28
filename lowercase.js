// Write a JavaScript function to test whether the character at the provided (character) index is lower case. 
// Test Data :
// console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
// true




function isLowerCase(str,index) {
    
//     var x = str.toLowerCase()
//     console.log(x)

//     for(index=0;index<=x.length;index++){

//     if (x === str )
//         return true;
//     else
//         return false;

// }
    
    
       
        
}


function match(str1,ind){
    let str2 = str1.toLowerCase()

    

    if(str1.charAt(ind) === str2.charAt(ind)){
       
        return true
    }else{
        return false
    }
}

console.log(match('vxfdDDdjgjgf',5))

console.log(match('ABCDEr',5))

