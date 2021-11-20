const BASEURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

class DataSource {
    static searchFood(keyword) {
        return fetch(`${BASEURL}${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;