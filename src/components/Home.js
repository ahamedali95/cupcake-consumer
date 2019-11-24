import React, { Component } from 'react';
import fetchPokemons from '../api/fetchPokemons';

class Home extends Component {
  constructor() {
    super();

    this.state = { pokemons: [] };
  }

  componentDidMount() {
    this.getAllPokemons();
  }

  async getAllPokemons() {
    const data = await fetchPokemons();
    const pokemons = data.map(pokemon => pokemon.name);

    this.setState({ pokemons });
  }

  render() {
    return (
      <div>
        <h1>Pokemons</h1>
        <ul>{this.state.pokemons.map((pokemon, index) => (<li key={index}>{pokemon}</li>))}</ul>
      </div>
    );
  }
}

export default Home;
