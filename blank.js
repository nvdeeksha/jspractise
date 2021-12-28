function blank(text){
    if (text.length === 0)
        return true;
    else
        return false;
}

console.log(blank (''))   // is blank
console.log(blank('xt')) //is not blank

console.log(blank(    ))
