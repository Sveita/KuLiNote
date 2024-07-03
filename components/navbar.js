const navbar = () => {
    return `<navbar id="navbar">
        <h2>KuLiNote</h2>
        <img src="../image/List-Bullets--Streamline-Ultimate 1.png" alt="">
    </navbar>
    `
}

class Navbar extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = navbar(); 
    }
}
customElements.define('navbar-element', Navbar);