const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry',
 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa',
  'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
  'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 
  'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 
  'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 
  'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 
  'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 
  'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 
  'Tamarind', 'Yuzu'];
  const suggestions = document.querySelector(".Fruit");
      const inputBox = document.querySelector("#inputBox");

      function showFruit(arrayFruit) {
        let li = "";
        for (let name of arrayFruit) {
          li += `<li>${name}</li>`;
        }
        suggestions.innerHTML = li;
        attachLiListeners(); // Attach event listeners to the newly created li elements
      }

      function display(result) {
        const content = result.map((list) => {
          return `<li>${list}</li>`;
        });
        return content.join("");
      }

      function attachLiListeners() {
        const liElements = suggestions.querySelectorAll("li");
        liElements.forEach((li) => {
          li.addEventListener("click", function () {
            inputBox.value = li.textContent;
            suggestions.innerHTML = "";
          });
        });
      }

      inputBox.addEventListener("input", function (e) {
        let currentInput = e.target.value.toLowerCase();
        let output = [];
        if (currentInput.length > 0) {
          output = fruit.filter((fruit) =>
            fruit.toLowerCase().includes(currentInput)
          );
        }
        showFruit(output);
      });


// function searchContainer(arrayFruit){
// 	(inputBox.toLowerCase().includes(currentInput));{
// 	let result = [];
// 	let input = inputBox.value;
// 	if (input.length){
// 		result = availableKeywords.filter((keyword)=>{
// 			return keyword.toLowerCase().includes(input.toLowerCase());
// 	});
// 		console.log(result)
// 	}
// 	display(result);
// 	if(!result.length){
// 		resultsBox.innerHTML = '';
// 	}
// }}



// 	suggestions.innerHTML = "<ul>"+ content.join(" ") + "</ul>";
// }

// function selectInput(list){
// 	inputBox.value = list.innerHTML
// }



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