 const i = []; // var for loops
 
// my idea --- for loop, let, interpole, index//


function dwarfRollCall(dwarves) { 
  let rollcall = [];
    for(let i = 0; i < dwarves.length; i++) {
      rollcall += `${[i+1]}. ${dwarves[i]} `;
  }
      return rollcall; 
}


// my idea --- make a new array, .map + .uppercase + "!"//

function summonCaptainPlanet(planeteerCalls) {
   return planeteerCalls.map(loud => loud.toUpperCase() + "!");
}

  
// my idea --- Boolean + .length//

function longPlaneteerCalls(words) {
return Boolean(words.length >= 4); 
}


// my idea --- const, for loop, let, .indexof foods, if not equal to -1, return foods or return string//

function findTheCheese (foods) {
  const cheese = ["swiss","cheddar", "gouda", "camembert"];
  
  for (let i=0; i < foods.length; i++) { 
      
      let flag = cheese.indexOf(foods[i]);
        
        if(flag !== -1) {
          return foods[i];
    }
  }    
      return "no cheese!";
}



function wordsWithB(words) {
  let array1 = [];
  for (let i=0; i < words.length; i++) {
    
    let flag = words[i].charAt(0);
    
    if(flag == "b") { array1.push(words[i]);
  }
  }
  return array1; 
}

// Approach *** practice psuedo codes... imagine talking to the computer, what would I tell it, write in comments, step by step, BEFORE any code. Then write each line of code, check if it works. Then use google for anwsers. ***

text editors, visual studio code, atom simpler less messy.


