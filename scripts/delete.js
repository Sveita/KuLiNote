const deleteDiary = (id) => {
  console.log(id);
    let diaryArr = JSON.parse(localStorage.getItem("diaryArray")) || [];
    diaryArr = diaryArr.filter(diary => diary.id != id);
    localStorage.setItem("diaryArray", JSON.stringify(diaryArr));
    location.reload();
  };

export {deleteDiary};