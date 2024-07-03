import { createCard } from "./components/card.js";

const display = ()=>{
    const cardContainer = document.querySelector("#card-container");
    const diaryArr = JSON.parse(localStorage.getItem('diaryArray'));

    diaryArr.map((item)=>{
        cardContainer.innerHTML += createCard(item.id,item.title, item.content , item.date);
    })
}

display();