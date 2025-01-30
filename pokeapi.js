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
        let types = '';

        pokemonDetails.types.forEach((type,index)=> {
          types +=type.type.name;
          if(index < pokemonDetails.types.length -1) {
            type += ',';
          }
        });

            const imageUrl = pokemonDetails.sprites.front_default || 'https://via.placeholder.com/100?text=No+Image';

            let pokemonItem = document.createElement('li');
            pokemonItem.innerHTML = `
              <strong>${pokemon.name}</strong><br>
              Types: ${types}<br>
              <img src="${imageUrl}" alt="${pokemon.name}" width="100">
            `;
             resultArea.appendChild(pokemonItem);

      })
      .catch(error => console.log('error', error));
   });
   
  })
  .catch(error => console.log(error, 'error'));

});