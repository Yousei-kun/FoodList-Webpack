class NavBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#searchInputField").value;
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light nav-custom">
                <div class="container justify-content">
                    <a class="navbar-brand nav-brand-custom" href="#">Foodster</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" id="searchInputField" placeholder="Search" aria-label="Search">
                        <button class="btn btn-custom" id="searchButton" type="button">Search</button>
                    </form>
                </div>
            </nav>
        `;

        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("nav-bar", NavBar);