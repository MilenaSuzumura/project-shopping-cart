const { createProductItemElement } = require('../script');

const pesquisaProduto = (item) => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = async (produto) => {
  const url = pesquisaProduto(produto);
  const resultado = await fetch(url);
  const data = await resultado.json();
  data.results.forEach((produtos) => {
    const { id, title, thumbnail } = produtos;
    const item = createProductItemElement(id, title, thumbnail);
    const section = document.querySelector('.items');
    section.appendChild(item);
  });
  return data;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
