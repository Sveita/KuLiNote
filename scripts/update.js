
// get value and split from url
const locationUrl = location.href.split('?')
const id = locationUrl[1];
if(id){

  const diaryArr = JSON.parse(localStorage.getItem("diaryArray")) || [];

  const find = diaryArr.find(item=>item.id==id);
  console.log(find);
  const UpdateId = document.querySelector("#UpdateId");
  const title = document.querySelector("#title");
  const content = document.querySelector("#content");
  const date = document.querySelector("#date");

  UpdateId.value = find.id;
  title.value = find.title;
  content.value = find.content;
  date.value = find.date;
  console.log(find.title);
}

const updateForm = document.querySelector("#form");
  updateForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const UpdateId = document.querySelector("#UpdateId").value;
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const date = document.querySelector("#date").value;
    console.log(UpdateId,title,content,date);
    editUpdate(UpdateId,title,content,date)
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
    alert("update succesful");
    window.location= '../index.html'
    }
  }


