const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const suggestions = document.querySelector('.suggestions ul');
const inputBox = document.querySelector('input-box');
function searchContainer(arrayFruit){
	(inputBox.toLowerCase().includes(currentInput));{
	let result = [];
	let input = inputBox.value;
	if (input.length){
		result = availableKeywords.filter((keyword)=>{
			return keyword.toLowerCase().includes(input.toLowerCase());
	});
		console.log(result)
	}
	display(result);
	if(!result.length){
		resultsBox.innerHTML = '';
	}
}}

function display(result){
	const content = result.map((list)=>{
		return "<li onclick=selectInput(this)>" + list + "</li>";
	});

	suggestions.innerHTML = "<ul>"+ content.join(" ") + "</ul>";
}

function selectInput(list){
	inputBox.value = list.innerHTML
}






//FIRST ATTEMPT - Did not work
// let userInput="";
// let output=[];

// for (let name of fruit) {
// 	if (name.toLowerCase().includes(userinput.toLowerCase())){
// 		output.push(name);
// 	}
// }
// console.log(output);

// function showFruit(arrayFruit){
// 	let li=''
// 	for(let name of arrayFruit){
// 	li += `<li> ${fruit} </li>`;
// 	}
// 	ul.innerHTML = li;
// }
// userInput.addEventListener('keyup', function(e){
// let currentInput = e.target.value.toLowerCase();
// let output= [];
// output = fruit.filter((fruit=>
// 	fruit.toLowerCase().includes(currentInput))
// );
// if(currentInput.length===0){
// 	output=[];
// }
// showState(output);
// });



//Beginning suggestion

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