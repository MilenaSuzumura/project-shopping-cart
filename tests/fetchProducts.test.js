require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts === 'function').toBe(true);
  });

  //Execute a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada;
  it('Teste se fetchProducts com o argumento \'computador\' e teste se fetch foi chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  //Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  it('Teste se, ao chamar a função fetchProducts com o argumento \'computador\', a função fetch utiliza o endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\'', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  //Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.
  it('Teste se o retorno da função fetchProducts com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    const resultado = await fetchProducts('computador');
    expect(resultado).toEqual(computadorSearch);
  });

  //Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'.
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: \'You must provide an url\'', async () => {
    try {
      const resultado = await fetchProducts();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
});
