import './food-item.js';

class FoodList extends HTMLElement {

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("food-item");
            mealItemElement.classList.add("col-md-4");
            mealItemElement.meal = meal;
            this.appendChild(mealItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `<h2>${message}</h2>`;
    }
}

customElements.define("food-list", FoodList);