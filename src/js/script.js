import "index.css"
import { Api } from "Api.js"
import { Card } from "Card.js"
import { FormValidator } from "FormValidator.js"
import { Popup } from "Popup.js"
import { CardList } from "CardList.js"
import { UserInfo } from "UserInfo.js"

const placesListElement = document.querySelector('.places-list');
const inputElements = document.querySelectorAll('.popup__input');
const avatarImage = document.querySelector('.user-info__photo');
const bigImage = document.querySelector('#imagePopup');
const addCardElement = document.querySelector('#newPlacePopup');
const editElement = document.querySelector('#editProfilePopup');
const avatarEditElement = document.querySelector('#avatarPopup');
const buttonAdd = document.querySelector('.user-info__button');
const buttonEdit = document.querySelector('.user-info__button_edit');
const avatarEdit = document.querySelector('.user-info__photo');
const closeButtons = document.querySelectorAll('.popup__close');
export const newCardForm = document.forms.new;
export const editProfileForm = document.forms.edit;
const avatarEditForm = document.forms.newAvatar;
let cardsInstances = [];
let initialCards = [];
const inputVals = new FormValidator();
const popupWindow = new Popup();
const cardList = new CardList(placesListElement);

export const errors = {
    "tooShort": "Должно быть от 2 до 30 символов",
    "tooLong": "Должно быть от 2 до 30 символов",
    "requiredValue": "Это обязательное поле",
    "linkRequired": "Здесь должна быть ссылка"
};
export const formStat = {
    "name": false,
    "place": false,
    "link": false,
    "about": false,
    "linkAvatar": false
};

let bUrl = ''

if (NODE_ENV === 'development') { bUrl = 'http://praktikum.tk/cohort8' } else { bUrl = 'https://praktikum.tk/cohort8' }

const api = new Api({
    baseUrl: bUrl,
    headers: {
        authorization: 'bc0f77dc-1dcd-480d-adad-4b989ce5b233',
        'Content-Type': 'application/json'
    }
});
const userInfo = new UserInfo(api);

async function setNameInfo() {
    let resultUserInfo = await api.userInfoSet();
    document.querySelector('.user-info__name').textContent = resultUserInfo.name;
    document.querySelector('.user-info__job').textContent = resultUserInfo.about;
    document.querySelector('.user-info__photo').style.backgroundImage = resultUserInfo.avatar;
}

setNameInfo();

async function initCards() {
    let res = await api.getInitialCards();
    for (let card of res) {
        let newCard = new Card(api, card['name'], card['link'], card['likes'].length,
            card['_id'], card['owner'], placesListElement, bigImage);
        cardList.addCard(newCard);
    }
}

initCards();

newCardForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    event.target.querySelector('button').textContent = "Загрузка...";
    let result = await api.newCardAdd(event);
    let card = new Card(api, newCardForm.elements.place.value, newCardForm.elements.link.value, [],
        result['_id'], "ba2db38605eee42e2ef8a612", placesListElement, bigImage);
    cardList.addCard(card);
    event.target.querySelector('button').textContent = "+";
    popupWindow.close(event.target);
});

inputElements.forEach(function(item) {
    item.addEventListener('input', function(event) {
        inputVals.setEventListeners(event);
    });
});

buttonAdd.addEventListener('click', function() {
    popupWindow.open(addCardElement);
});

avatarEdit.addEventListener('click', function() {
    popupWindow.open(avatarEditElement);
});

buttonEdit.addEventListener('click', function() {
    popupWindow.open(editElement);
});
closeButtons.forEach(function(item) {
    item.addEventListener('click', function() {
        popupWindow.close(item);
    });
});

editProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    userInfo.setUserInfo(editProfileForm.elements.name, editProfileForm.elements.about);
    userInfo.updateUserInfo(event);
    event.target.querySelector('button').textContent = "Сохранить";
    popupWindow.close(event.target);
});

avatarEditForm.addEventListener('submit', function(event) {
    event.preventDefault();
    avatarImage.style.backgroundImage = `url("${avatarEditForm.elements.linkAvatar.value}")`;
    popupWindow.close(event.target);
});
