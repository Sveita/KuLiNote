const noteContainer = document.getElementById("columns");
const createForm = document.querySelector("#form");

// Add note
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get value from the form
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;
  const date = document.querySelector("#date").value;

  // Give params to createDiary
  createDiary(title, content, date);

  // Clear the value in the form once submitted
  createForm.reset();
});

// create Dairy Function
const createDiary = (title, content, date) => {
    const diaryArr = JSON.parse(localStorage.getItem("diaryArray")) || [];
    const newDiary = {
      id:diaryArr.length + 1,
      title,
      content,
      date,
    };
  diaryArr.push(newDiary);
  localStorage.setItem("diaryArray", JSON.stringify(diaryArr));
  alert("create diary successful!!")
  window.location = '../index.html'
};



