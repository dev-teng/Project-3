document.querySelector('#searchBtn').addEventListener('click', () => {
  const inputValue = document.querySelector('#inputText').value.toLowerCase();
  let resultArea = document.querySelector('#results');
  resultArea.innerHTML ="";

  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(response => response.json())
  .then(result => {
   const filteredName = result.results.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue));

   filteredName.forEach((pokemon)=> {
    let displayName = document.createElement('li');
    displayName.textContent = pokemon.name;
    resultArea.appendChild(displayName);
   })

   if (filteredName.length === 0) {
    let displayName = document.createElement('li');
    displayName.textContent = 'No pokemon found!';
    resultArea.appendChild(displayName);
   }
  }
  )
  .catch(error => console.log(error, 'error'));

});