var popupFeedback = document.querySelector('.modal-feedback');
var openFeedbackButton = document.querySelector('.contacts-button');
var closePopupButton = popupFeedback.querySelector('.modal-close');
var feedbackForm = document.querySelector('.feedback-form');
var feedbackName = document.querySelector('.feedback-name-field');
var feedbackEmail = document.querySelector('feedback-email-field');
var feedbackMessage = document.querySelector('.feedback-message-field');

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
})

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


var popupMap = document.querySelector('.modal-map');
var openMapButton = document.querySelector('.map-preview-link');
var closePopupButton = popupMap.querySelector('.modal-close');

openMapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('modal-show');
});

closePopupButton.addEventListener('click', function () {
  popupMap.classList.remove('modal-show');
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popupMap.classList.remove('modal-show');
  }
});