//loops
// for(initialization,condition,increment/decrementation)

const cakes = ["redvelvet","vanilla","chocolate","butterscotch"]
console.log(cakes)
console.log(cakes[1])
for (let i=1 ; i<cakes.length ; i++){
    console.log(cakes[i])
}
cakes.push ('strawberry')
console.log(cakes)

for (let i=0 ; i<cakes.length ; i++){
    console.log(cakes[i])
}

cakes.pop = ('strawberry')
console.log(cakes)