const marvel_heros = ["thor", "Ironman", "spider"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros); // creates array in array

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)

// there are Array.of and Array.of these kind of operators
