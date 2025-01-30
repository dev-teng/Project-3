document.querySelector('#searchBtn').addEventListener('click', () => {
  const inputValue = document.querySelector('#inputText').value.toLowerCase();
  let resultArea = document.querySelector('#results');
  resultArea.innerHTML ="";

  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(response => response.json())
  .then(result => {
    result.results.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue));
  }
  )
  .catch(error => console.log(error, 'error'));

});