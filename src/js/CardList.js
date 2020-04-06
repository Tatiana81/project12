export class CardList {
    constructor(element) {
        this.element = element;
    }

    addCard(card) {
        this.element.insertAdjacentHTML('beforeend', card.create(card));
        this.render(card);
    }

    render(card) {
        this.element.addEventListener("click", function(event) {
            if (event.target.classList.contains('place-card__like-icon')) card.like(event)
            else if (event.target.classList.contains('place-card__delete-icon')) card.remove(event)
            else card.showBigImage(event);
        });
    }
}