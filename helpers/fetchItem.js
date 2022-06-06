const fetchItem = async (produto) => {
  const url = `https://api.mercadolibre.com/items/${produto}`;
  const resultado = await fetch(url);
  const data = await resultado.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
