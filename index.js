// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

//  function destructivelyAppendCat(Niko) {
//     cats.push(Niko);
//     return cats;
//  }

//  function destructivelyPrependCat(Whiskers) {
//      cats.unshift(Whiskers);
//      return cats;
//  }
//  function destructivelyRemoveLastCat(Niko){
//      cats.pop(Niko)
//      return cats;
//  }
//  function destructivelyRemoveFirstCat(Whiskers){
//      cats.shift(Whiskers)
//      return cats;
//  }
//  function appendCat(){
//     const cats2 = [...cats, "Broom"]
//     return cats2;
//  }
//  function prependCat(){
//      const cats3 = ["Arnold", ...cats]
//      return cats3;
//  }
// function removeLastCat(){
//     const cats4 = cats.slice(0,cats.length-1)
//     return cats4;
// }

// function removeFirstCat(){
//     const cats5 = cats.slice(1)
//     return cats5;
// }


function destructivelyAppendCat(append){
return cats.push(append)
}

function destructivelyPrependCat(name) {
 return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
return cats.pop()
}

function destructivelyRemoveFirstCat(){
return cats.shift()
}

// const appendCat(name) = () =>  [...cats,name];


function appendCat(name){
 const cats2 =  [...cats,name]
 return cats2
}

function prependCat(name){
 const cats3 = [name, ...cats]
 return cats3
}

function removeLastCat(){
    const catsSlice = cats.slice(0,cats.length-1)
    return catsSlice
}

function removeFirstCat(){
    const catsSlice2 = cats.slice(1,cats.length)
    return catsSlice2
}