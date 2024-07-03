const editBtn = document.getElementById("edit")

editBtn.addEventListener("click", () => {
    
})


// edit Function
const editUpdate = (id,title,content,date) =>{
    const diaryArr = JSON.parse(localStorage.getItem("diaryArray")) || [];
    console.log(diaryArr);
    if(diaryArr.length>0){
      let find = diaryArr.findIndex(i=>i.id == id)
      const newDiary = {
      id,
      title,
      content,
      date
    }
    // find = newDiary
    diaryArr[find] = newDiary
    localStorage.setItem('diaryArray', JSON.stringify(diaryArr));
    }
  }


