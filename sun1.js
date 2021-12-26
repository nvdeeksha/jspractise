// for in

const name = {firstname:"deeksha", lastname:"NV", age:21}; 

let me = "";
for (let x in name) {
  me += name[x] + " ";
}

console.log(me)