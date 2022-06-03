const pesquisaItem = (item = 'computador') => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = async (items) => {
  const url = pesquisaItem(items);

  /*
Implemente a função fetchProducts para retornar a listagem de produtos;

O retorno de produtos se encontra no array results;

Utilize a função createProductItemElement() para criar os componentes HTML referentes a um produto:

Adicione cada elemento retornado da função createProductItemElement(product) como filho do elemento <section class="items">.
Obs: Utilize as variáveis fornecidas no código, elas devem se referir aos seguintes campos:

sku: é o campo id retornado pela API;
name: é o campo title retornado pela API;
image: é o campo thumbnail retornado pela API. */
};

fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
