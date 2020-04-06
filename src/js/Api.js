import { editProfileForm, newCardForm } from "script.js"

export class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
                headers: this.headers
            })
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return result;
            })
            .catch((err) => { console.log(err) });

    }

    newCardAdd(event) {
        return fetch(`${this.baseUrl}/cards`, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify({
                    name: newCardForm.elements.place.value,
                    link: newCardForm.elements.link.value,
                    likes: []
                })
            })
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => { return result })
            .catch((err) => { console.log(err) });
    }

    userInfoSet() {
        return fetch(`${this.baseUrl}/users/me`, {
                headers: this.headers
            })
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => { return result })
            .catch((err) => { console.log(err) })

    }

    updateUserInfo(event) {
        event.target.querySelector('button').textContent = "Загрузка...";
        fetch(`${this.baseUrl}/users/me`, {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({
                    name: editProfileForm.elements.name.value,
                    about: editProfileForm.elements.about.value
                })
            })
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((res) => { return res; })
            .catch((err) => { console.log(err) })
    }

    deleteLike(event) {
        return fetch(`${this.baseUrl}/cards/like/${event.target.parentNode.parentNode.parentNode.getAttribute('id')}`, {
                method: 'DELETE',
                headers: this.headers
            })
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return result;
            })
            .catch((err) => { console.log(err) })
    }

    addLike(event) {
        return fetch(`${this.baseUrl}/cards/like/${event.target.parentNode.parentNode.parentNode.getAttribute('id')}`, {
                method: 'PUT',
                headers: this.headers
            })
            .then((res) => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return result;
            })
            .catch((err) => { console.log(err) })
    }

    removeCard(event) {
        //  (исправлено) Надо исправить: Необходимо вынести такие параметры как url за класс и передавать в качестве параметра при инициализации класса 
        fetch(`${this.baseUrl}/cards/${event.target.parentNode.parentNode.getAttribute('id')}`, {
            method: 'DELETE',
            headers: this.headers
        })
    }
}