import '../component/food-list.js';
import '../component/nav-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchField = document.querySelector("nav-bar");
    const mealListElement = document.querySelector("food-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchFood(searchField.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const indexFood = async () => {
        try{
            const result = await DataSource.indexFood();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchField.clickEvent = onButtonSearchClicked;

    indexFood();
};

export default main;