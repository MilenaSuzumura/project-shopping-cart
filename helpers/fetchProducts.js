const pesquisaProduto = (item) => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = async (produto) => {
  const url = pesquisaProduto(produto);
  const resultado = await fetch(url);
  const data = await resultado.json();
  data.results.forEach((produtos) => {
    const { id, title, thumbnail } = produtos;
    createProductItemElement(id, title, thumbnail);
  });
  return data;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
