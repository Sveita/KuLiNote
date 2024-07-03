const deleteDiary = (id) => {
    let diaryArr = JSON.parse(localStorage.getItem("diaryArray")) || [];
    diaryArr = diaryArr.filter(diary => diary.id !== id);
    localStorage.setItem("diaryArray", JSON.stringify(diaryArr));
  
  };
  