const headerCreate = () => {
    return `  
    <!-- header -->
    <header id="header">
        <!-- left head -->
        <div id="leftHeader">
            <button><img class="back" src="./image/backBTN.png" alt=""></button>
            <h3>Date : </h3>
        </div>
        <!-- right -->
        <button  form="create-form" type="submit" class="finish" >
            Finish
        </button>
    </header>`
}

class HeaderCreate extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = headerCreate(); 
    }
   
}

customElements.define('header-component', HeaderCreate)