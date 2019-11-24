import axios from 'axios';

const fetchPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');

    return response.data.results;
  } catch (error) {
    return [];
  }
}

export default fetchPokemons;