const popupOrder = document.querySelector('.modal-order');
const openOrderButton = document.querySelectorAll('.button-buy');
const closeOrderPopupButton = popupOrder.querySelector('.modal-close');

let buyButton = function (evt) {
  evt.preventDefault();
  popupOrder.classList.add('modal-show');
};

for (let i = 0; i < openOrderButton.length; i++) {
  openOrderButton[i].onclick = buyButton;
}

closeOrderPopupButton.addEventListener('click', function () {
  popupOrder.classList.remove('modal-show');
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupOrder.classList.remove('modal-show');
  }
});

