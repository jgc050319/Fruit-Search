const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let userInput="";
let output=[];

for (let name of fruit) {
	if (name.toLowerCase().includes(userinput.toLowerCase())){
		output.push(name);
	}
}
console.log(output);

function showFruit(arrayFruit){
	let li=''
	for(let name of arrayFruit){
	li += `<li> ${fruit} </li>`;
	}
	ul.innerHTML = li;
}
userInput.addEventListener('keyup', function(e){
let currentInput = e.target
});





// function search(str) {
// 	let results = [];

// 	// TODO

// 	return results;
// }

// function searchHandler(e) {
// 	// TODO
// }

// function showSuggestions(results, inputVal) {

// 	// TODO
// }

// function useSuggestion(e) {
// 	// TODO
// }

// 
// suggestions.addEventListener('click', useSuggestion);