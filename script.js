import { createCard } from "./components/card.js";
import { deleteDiary } from "./scripts/delete.js";
const display = ()=>{
    const cardContainer = document.querySelector("#card-container");
    const diaryArr = JSON.parse(localStorage.getItem('diaryArray'));

    diaryArr.map((item)=>{
        cardContainer.innerHTML += createCard(item.id,item.title, item.content , item.date);
    })
}
display();

const btnDelete = document.querySelectorAll("#deleteNote");

btnDelete.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        deleteDiary(e.target.id);
    })
})