const { createProductItemElement } = require('../script');

const pesquisaProduto = (item) => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = async (produto) => {
  try {
    const url = pesquisaProduto(produto);
    const resultado = await fetch(url);
    const data = await resultado.json();
    data.results.forEach((produto) => {
      const { id, title, thumbnail } = produto;
      createProductItemElement({ id, title, thumbnail });
    });
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
