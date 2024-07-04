const headerCreate = () => {
    return `  
    <!-- header -->
    <header id="header">
        <!-- left head -->
        <div id="leftHeader">
        <a href="../index.html"><img class="back" src="../image/backBTN.png" alt=""></a>
        </div>
        <!-- right -->
        <button  form="form" type="submit" class="finish" >
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