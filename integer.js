function Int(num) {
 if(Number.isInteger(num)){
     return true;}
 
      else {
           return false;}

 

 }

  
//     if (typeof num !== 'number')
//         return false; 
   
//    return !isNaN(num) && 
//           parseInt(Number(num)) == num && 
//           !isNaN(parseInt(num, 10));

 console.log(Int(23));
 console.log(Int(4e2));
 console.log(Int(NaN));
 console.log(Int(23.75));
 console.log(Int(-23));