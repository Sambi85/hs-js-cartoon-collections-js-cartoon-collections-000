 const i = []; // var for loops
 
// my idea --- for loop, let, interpole, index//


function dwarfRollCall(dwarves) { 
  let rollcall = [];
    for(let i =0; i < dwarves.length; i++) {
      rollcall += `${[i+1]}. ${dwarves[i]} `;
  }
      return rollcall; 
}


// my idea --- make an object, .map + .uppercase + "!"//

function summonCaptainPlanet(planeteerCalls) {
   return planeteerCalls.map(loud => loud.toUpperCase() + "!");
}

  
// my idea --- Boolean + .length//

function longPlaneteerCalls(words) {
return Boolean(words.length >= 4); 
}


// my idea --- const, for loop, let, .indexof foods, if not equal to -1, return foods or return string//

function findTheCheese (foods) {
  const cheese = ["cheddar", "gouda", "camembert"];
  
  for (let i=0; i < foods.length; i++) { 
      
      let flag = cheese.indexOf(foods[i]);
        
        if(flag !== -1) {
          return foods[i];
    }
  }    
      return "no cheese!";
}