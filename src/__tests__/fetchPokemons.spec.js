import mockAxios from '../__mocks__/axios';
import fetchPokemons from '../api/fetchPokemons';


describe('fetchPokemons', () => {
  it('returns an array of pokemons', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: { results: ['hello'] }});
    });

    const response = await fetchPokemons();
    expect(response).toEqual(['hello']);
  });

  it('reject', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.reject([]);
    });

    const response = await fetchPokemons();
    expect(response).toEqual([]);
  });
});