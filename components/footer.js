const footer = () => {
    return `<footer id="footer">
        <h3>Grab your note with KuLi !</h3>
        <button class="aboutusBtn">About us</button>
    </footer>
    `
}

class Footer extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = footer(); 
    }
}



customElements.define('footer-element', Footer)