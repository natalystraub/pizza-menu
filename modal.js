import pizzaJson from '/pizzas.js';
import InfoTela from './infotela.js';

const Modal = {
  open: function (item, info) {
    item.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();

      //ARMAZENA NO ELEMENTO 'PIZZA-ITEM' UM ARRAY - ISSO É PARA SABER QUAL O ITEM QUE FOI CLICADO
      const key = e.target.closest('.pizza-item').getAttribute('data-key');
      InfoTela.modalQt = 1;
      InfoTela.modalKey = key;

      // pizzaJson[key].name = "No array pizzaJson, pegue o objeto que está na posição indicada por key e, desse objeto, pegue a propriedade name."
      info.querySelector('h1').innerHTML = pizzaJson[key].name;
      info.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
      info.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$${pizzaJson[key].price.toFixed(2)}`;
      document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
      document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
      //ADICIONA O TAMANHO DENTRO DO MODAL

      if (InfoTela.pizzaInfoSize.length > 0) {
        InfoTela.pizzaInfoSize.forEach((size, sizeIndex) => {
          if (sizeIndex == 2) {
            size.classList.add('selected');
          }
          size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
      }

      InfoTela.pizzaInfoQt.innerHTML = InfoTela.modalQt;

      //Para aparecer o modal na tela
      InfoTela.pizzaWindowArea.style.display = 'flex';
      InfoTela.pizzaWindowArea.style.opacity = 0;
      setTimeout(() => {
        InfoTela.pizzaWindowArea.style.opacity = 1;
      }, 200);
    });
  },
  close: function () {
    InfoTela.pizzaWindowArea.style.opacity = 0;
    setTimeout(() => {
      InfoTela.pizzaWindowArea.style.display = 'none';
    }, 500);
  },
  init: function () {
    document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
      item.addEventListener('click', this.close);
    });
  },
};

export default Modal;
