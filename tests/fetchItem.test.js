require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // Teste se fetchItem é uma função;
  it('Teste se fetchItem é uma função', () => {
    expect(typeof fetchItem === 'function').toBe(true);
  });
  
  // Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;
  it('Testa se fetch foi chamado na função fetchItem com o argumento do item "MLB1615760527"', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  // Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  // Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(resultado).toEqual(item);
  });

  //Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'.
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: \'You must provide an url\'', async () => {
    try {
      const resultado = await fetchItem();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });

  //fail('Teste vazio');
});
