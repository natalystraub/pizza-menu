import pizzaJson from './pizzas.js';
import Modal from './modal.js';

const InfoTela = {
  modalQt: 1,
  modalKey: 0,
  pizzaInfoSize: document.querySelectorAll('.pizzaInfo--size'),
  pizzaInfoQt: document.querySelector('.pizzaInfo--qt'),
  pizzaWindowArea: document.querySelector('.pizzaWindowArea'),

  montaPizza: function () {
    return pizzaJson.map((item, index) => {
      const pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
      const pizzaInfo = document.querySelector('.pizzaInfo');

      // preencher as informacoes de pizzaItem
      pizzaItem.setAttribute('data-key', index);
      pizzaItem.querySelector('.pizza-item--img img').src = item.img;
      pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
      pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
      pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

      // Chama o modal open
      Modal.open(pizzaItem, pizzaInfo);

      document.querySelector('.pizza-area').append(pizzaItem);

      return item;
    });
  },

  init: function () {
    this.montaPizza();
  },
};

export default InfoTela;
