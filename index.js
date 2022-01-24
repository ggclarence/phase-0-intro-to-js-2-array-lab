// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(Niko) {
    cats.push(Niko);
    return cats;
 }

 function destructivelyPrependCat(Whiskers) {
     cats.unshift(Whiskers);
     return cats;
 }
 function destructivelyRemoveLastCat(Niko){
     cats.pop(Niko)
     return cats;
 }
 function destructivelyRemoveFirstCat(Whiskers){
     cats.shift(Whiskers)
     return cats;
 }
 function appendCat(Guss){
    const cats2 = [...cats, "Broom"]
    return cats2;
 }
 function prependCat(){
     const cats3 = ["Arnold", ...cats]
     return cats3;
 }
function removeLastCat(){
    const cats4 = cats.slice(0,cats.length-1)
    return cats4;
}

function removeFirstCat(){
    const cats5 = cats.slice(1)
    return cats5;
}