//Форма обратной связи

const popupFeedback = document.querySelector('.modal-feedback');
const openFeedbackButton = document.querySelector('.contacts-button');
const closePopupButton = popupFeedback.querySelector('.modal-close');
const feedbackForm = document.querySelector('.feedback-form');
const feedbackName = document.querySelector('.feedback-name-field');
const feedbackEmail = document.querySelector('.feedback-email-field');
const feedbackMessage = document.querySelector('.feedback-message-field');

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("Name");
  storageEmail = localStorage.getItem("Email");
} catch (err) {
  isStorageSupport = false;
}

openFeedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add('modal-show');

  if (storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
    if (storageEmail) {
      feedbackEmail.value = storageEmail;
      feedbackMessage.focus();
    }
  } else {
    feedbackName.focus();
  }
});

closePopupButton.addEventListener('click', function () {
  popupFeedback.classList.remove('modal-show');
  popupFeedback.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupFeedback.classList.remove('modal-show');
    popupFeedback.classList.remove('modal-error');
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-error');
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('Name', feedbackName.value);
      localStorage.setItem('Email', feedbackEmail.value);
    }
  }
});

//Карта

const popupMap = document.querySelector('.modal-map');
const openMapButton = document.querySelector('.map-preview-link');
const closeMapPopupButton = popupMap.querySelector('.modal-close');

openMapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('modal-show');
});

closeMapPopupButton.addEventListener('click', function () {
  popupMap.classList.remove('modal-show');
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupMap.classList.remove('modal-show');
  }
});


//Переключение вкладок в разделе "Сервисы"

const deliveryButton = document.querySelector('.delivery-button');
const warrantyButton = document.querySelector('.warranty-button');
const creditButton = document.querySelector('.credit-button');
const deliveryContent = document.querySelector('.delivery-item');
const warrantyContent = document.querySelector('.warranty-item');
const creditContent = document.querySelector('.credit-item');

deliveryButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  warrantyButton.classList.remove('services-button-current');
  creditButton.classList.remove('services-button-current');
  deliveryButton.classList.add('services-button-current');

  warrantyContent.classList.remove('services-item-current');
  creditContent.classList.remove('services-item-current');
  deliveryContent.classList.add('services-item-current');
});

warrantyButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  deliveryButton.classList.remove('services-button-current');
  creditButton.classList.remove('services-button-current');
  warrantyButton.classList.add('services-button-current');

  deliveryContent.classList.remove('services-item-current');
  creditContent.classList.remove('services-item-current');
  warrantyContent.classList.add('services-item-current');
});

creditButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  deliveryButton.classList.remove('services-button-current');
  warrantyButton.classList.remove('services-button-current');
  creditButton.classList.add('services-button-current');

  deliveryContent.classList.remove('services-item-current');
  warrantyContent.classList.remove('services-item-current');
  creditContent.classList.add('services-item-current');
});


//Слайдер

const slideFirst = document.querySelector('.slide-first');
const slideSecond = document.querySelector('.slide-second');
const buttonBack = document.querySelector('.slider-button-back');
const buttonNext = document.querySelector('.slider-button-next');
const controlFirst = document.querySelector('.control-first');
const controlSecond = document.querySelector('.control-second');

buttonNext.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideFirst.classList.toggle('slide-current');
  slideSecond.classList.toggle('slide-current');
  controlFirst.classList.toggle('slider-control-current');
  controlSecond.classList.toggle('slider-control-current');
});

buttonBack.addEventListener('click', function (evt) {
  evt.preventDefault();
  slideFirst.classList.toggle('slide-current');
  slideSecond.classList.toggle('slide-current');
  controlFirst.classList.toggle('slider-control-current');
  controlSecond.classList.toggle('slider-control-current');
});
