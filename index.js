const cats= ["Milo", "Otis", "Garfield"];

//appends a cat to the end of the cats array
function destructivelyAppendCat(Ralph){
    cats.push('Ralph');
    return cats
}


//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(Bob){
     cats.unshift('Bob');
     return cats;
}


//removes the last cat from the cats array
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}

//removes the first cat from the cats array
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats

}

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(Broom){
    let cats1=[...cats,"Broom"];
    return cats1;
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(Arnold){
    let cats2=["Arnold",...cats];
    return cats2;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
    let cats3=(cats.slice(0,cats.length-1));
    return cats3;
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(){
    let cats4=(cats.slice(1));
    return cats4;
}


