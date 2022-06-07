const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};


// Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
const produtoAppend = async () => {
  const select = document.querySelector('.items');
  const produtos = await fetchProducts('computador');
  const { results } = produtos;
  results.forEach((produto) => {
    const { id: sku, title: name, thumbnail: image} = produto;
    const produtosCartao = createProductItemElement({ sku, name, image });
    select.appendChild(produtosCartao);
  });
};

const cardAdicionar = async (idProduto) => {
  const select = document.querySelector('.cart__items');
  const produto = await fetchItem(idProduto);
  const { id: sku, title: name, price: salePrice } = produto;
  const finalProduto = createCartItemElement({ sku, name, salePrice });
  select.appendChild(finalProduto);
}

window.onload = () => { 
  produtoAppend();
};