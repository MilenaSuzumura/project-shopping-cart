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
  console.log(event);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Referencia: https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist
const botaoClick = () => {
  const botao = document.querySelectorAll('.item__add');
  const skus = document.querySelectorAll('.item__sku');
  for (let i = 0; i < botao.length; i += 1) {
    botao[i].addEventListener('click', () => {
      cardAdicionar(`${skus[i].textContent}`);
    });
  }
}

// Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
const produtoAppend = async () => {
  const select = document.querySelector('.items');
  const produtos = await fetchProducts('computador');
  const { results } = produtos;
  results.forEach((produto) => {
    const { id: sku, title: name, thumbnail: image } = produto;
    const produtosCartao = createProductItemElement({ sku, name, image });
    select.appendChild(produtosCartao);
  });
  if (results) {
    botaoClick();
  }
};

const cardAdicionar = async (idProduto) => {
  const select = document.querySelector('.cart__items');
  //console.log(idProduto);
  if(idProduto !== null) {
    const produto = await fetchItem(idProduto);
    const { id: sku, title: name, price: salePrice } = produto;
    const finalProduto = createCartItemElement({ sku, name, salePrice });
    select.appendChild(finalProduto);
  }
}

window.onload = () => {
  produtoAppend();
};