const { createCartItemElement } = require('../script');

const pesquisaProduto = (item) => `https://api.mercadolibre.com/items/${item}`;

const fetchItem = async (produto) => {
  const url = pesquisaProduto(produto);
  const resultado = await fetch(url);
  const data = await resultado.json();
  createCartItemElement(data.site_id, data.title, data.price);
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
