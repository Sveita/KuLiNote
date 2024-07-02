const navbar = () => {
    return 
    `
    <navbar id="navbar">
        <h2>KuLiNote</h2>
        <img src="./image/List-Bullets--Streamline-Ultimate 1.png" alt="">
    </navbar>
    `
}

class Navbar extends HTMLElement {
    connectedCalledback () {
        this.innerHTML = navbar();
    }
}

customElements.define('navbar_element', Navbar)