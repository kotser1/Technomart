const popupOrder = document.querySelector('.modal-order');
const openOrderButton = document.querySelectorAll('.button-buy');
const closePopupButton = popupOrder.querySelector('.modal-close');

for (var i = 0; i < openOrderButton.length; i++) {
  openOrderButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOrder.classList.add('modal-show');
  });
}

closePopupButton.addEventListener('click', function () {
  popupOrder.classList.remove('modal-show');
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupOrder.classList.remove('modal-show');
  }
});
