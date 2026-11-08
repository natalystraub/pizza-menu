import InfoTela from './infotela.js';
import Modal from './modal.js';

let cart = [];

InfoTela.init();
Modal.init();

let pizzaQtMenos = document.querySelector('.pizzaInfo--qtmenos');
pizzaQtMenos.addEventListener('click', () => {
  if (InfoTela.modalQt > 1) {
    InfoTela.modalQt--;
    InfoTela.pizzaInfoQt.innerHTML = InfoTela.modalQt;
  }
});

let pizzaQtMais = document.querySelector('.pizzaInfo--qtmais');
pizzaQtMais.addEventListener('click', () => {
  InfoTela.modalQt++;
  InfoTela.pizzaInfoQt.innerHTML = InfoTela.modalQt;
});

if (InfoTela.pizzaInfoSize.length > 0) {
  InfoTela.pizzaInfoSize.forEach((size, sizeIndex) => {
    size.addEventListener('click', () => {
      document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');

      size.classList.add('selected');
    });
  });
}

const addButton = document.querySelector('.pizzaInfo--addButton');
addButton.addEventListener('click', () => {
  let size = parseInt(document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key'));

  let identifier = InfoTela.montaPizza()[InfoTela.modalKey].id + '@' + size;
  let key = cart.findIndex((item) => {
    return item.identifier == identifier;
  });

  if (key > -1) {
    cart[key].qt += InfoTela.modalQt;
  } else {
    cart.push({
      identifier,
      id: InfoTela.montaPizza()[InfoTela.modalKey].id,
      size,
      qt: InfoTela.modalQt,
    });
  }
  updateCart();
  Modal.close();
});

let cartMobileShow = document.querySelector('.menu-openner');
cartMobileShow.addEventListener('click', () => {
  if (cart.length > 0) {
    document.querySelector('aside').style.left = '0';
  }
});

let cartMobileCloser = document.querySelector('.menu-closer');
cartMobileCloser.addEventListener('click', () => {
  document.querySelector('aside').style.left = '100vw';
});

function updateCart() {
  let cartMobile = (document.querySelector('.menu-openner span').innerHTML = cart.length);

  if (cart.length > 0) {
    document.querySelector('aside').classList.add('show');
    document.querySelector('.cart').innerHTML = '';

    let subtotal = 0;
    let desconto = 0;
    let total = 0;

    for (let i in cart) {
      let pizzaItem = InfoTela.montaPizza().find((item) => {
        return item.id == cart[i].id;
      });

      subtotal += pizzaItem.price * cart[i].qt;

      console.log(subtotal);

      const cartItem = document.querySelector('.models .cart--item').cloneNode('true');

      let pizzaSizeName;
      switch (cart[i].size) {
        case 0:
          pizzaSizeName = 'P';
          break;
        case 1:
          pizzaSizeName = 'M';
          break;
        case 2:
          pizzaSizeName = 'G';
          break;
      }
      let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;
      cartItem.querySelector('img').src = pizzaItem.img;
      cartItem.querySelector('.cart--item-nome').innerHTML = `${pizzaName}`;
      cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
      cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
        if (cart[i].qt > 1) {
          cart[i].qt--;
        } else {
          cart.splice(i, 1);
        }

        updateCart();
      });
      cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
        cart[i].qt++;
        updateCart();
      });

      document.querySelector('.cart').append(cartItem);
    }

    desconto = subtotal * 0.1;
    total = subtotal - desconto;

    let cartSubtotal = document.querySelector('.subtotal span:last-child');
    cartSubtotal.innerHTML = `R$ ${subtotal.toFixed(2)}`;

    let cartDesconto = document.querySelector('.desconto span:last-child');
    cartDesconto.innerHTML = `R$ ${desconto.toFixed(2)}`;

    let cartTotal = document.querySelector('.total span:last-child');
    cartTotal.innerHTML = `R$ ${total.toFixed(2)}`;
  } else {
    document.querySelector('aside').classList.remove('show');
    document.querySelector('aside').style.left = '100vw';
  }
}
