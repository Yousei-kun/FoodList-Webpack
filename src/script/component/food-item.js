class FoodItem extends HTMLElement {

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = ` <div class="card mb-5">
                                <img class="card-img-top" src="${this._meal.strMealThumb}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="text-center mb-3">${this._meal.strMeal}</h5>
                                    <div class="card-text card-detail-title">Food Category:</div>
                                    <div class="card-text card-detail">${this._meal.strCategory}</div>
                                    <div class="card-text card-detail-title">Food Area:</div>
                                    <div class="card-text card-detail">${this._meal.strArea}</div>
                                </div>
                                <div class="card-instruction">
                                    <h5 class="card-instruction-header text-center mb-3">Instructions</h5>
                                    <p class="card-instruction-detail">
                                        ${this._meal.strInstructions}
                                    </p>
                                </div>
                            </div>
           `;

    }
}

customElements.define("food-item", FoodItem);