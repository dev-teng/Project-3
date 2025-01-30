document.querySelector('#searchBtn').addEventListener('click', () => {
  const inputText = document.querySelector('#inputText')
  const inputValue = inputText.value.toLowerCase();
  let resultArea = document.querySelector('#results');
  resultArea.innerHTML ="";
  inputText.value = "";
  
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(response => response.json())
  .then(result => {
   const filteredName = result.results.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue));
   if(filteredName.length === 0) {
    let noPokemonMessage = document.createElement('li');
    noPokemonMessage.textContent = 'No Pokemon found!';
    resultArea.appendChild(noPokemonMessage)
   }

   filteredName.forEach(pokemon => {
    fetch(pokemon.url)
    .then(response => response.json())
      .then(pokemonDetails =>{
        let type = '';




      })
      .catch(error => console.log('error', error));
   });
   
  })
  .catch(error => console.log(error, 'error'));

});