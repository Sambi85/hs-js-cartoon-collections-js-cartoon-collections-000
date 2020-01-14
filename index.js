const i = [];

function dwarfRollCall(dwarves) { 
  const rollcall = [];
    for(let i =0; i < dwarves.length; i++) {
      rollcall.push([i+1]+`. ${dwarves[i]}`);
    }
  return rollcall.join(' ')+' '; //removes commas & spacing
}


function summonCaptainPlanet(planeteerCalls) {
  const call = [];
  const loud = "!"; // adds "!"
    for (let i=0; i < planeteerCalls.length; i++) {
      call.push(`${planeteerCalls[i]}${loud}`.toUpperCase());
  }
  return call;

}
  
  
function longPlaneteerCalls(words) {

return  Boolean(words.length >= 4); 
}


function findTheCheese (foods) {
  for (let i=0; i < foods.length; i++) { 
    if (foods[i] ==='gouda'|| foods[i]=== 'cheddar'||foods[i]==='camembert') {
      return foods[i];
    }   
}

   return "no cheese!";
}


