// let finish = document.getElementById("finish");
// let msg = document.getElementById("msg");
// const noteContainer = document.getElementById("columns");

// finish.addEventListener("click", (e) => {
//   e.preventDefault();
//   let title = document.getElementById("title").value;
//   let content = document.getElementById("content").value;
//   let date = document.getElementById("datetime").value;
//   let formValidation = () => {
//     if (title === "") {
//       console.log("failure");
//       msg.innerHTML = "Title cannot be blank";
//     } else {
//       console.log("success");
//       msg.innerHTML = "";
//       acceptData(title, content, date);
//     }
//   };
//   formValidation();
// });
// const createDiary = (title, content, date) => {
//   // data form local storage
//   const diaryArr = JSON.parse(localStorage.getItem("diaryArray")) | [];
//   // new Dairy to create
//   const newDiary = {
//     id: diaryArr.length + 1,
//     title: title,
//     content: content,
//     date: date,
//   };

//   localStorage.setItem("diaryArray", JSON.stringify(diaryArr));
// };

// const createNote = (title, content, date) => {
//   noteContainer.innerHTML += `
//     <!-- icon delete and edit -->
//     <div id="iconContainer">
//       <button><img src="./image/edit.png" alt="" id="edit" /></button>
//       <button>
//         <img src="./image/trash.png" alt="" id="deleteNote" />
//       </button>
//     </div>

//     <!-- title -->
//     <h2 id="userInputTitle">${title}</h2>
//     <h3 id="userInputcContent">${content}</h3>
//   </div>

//   <!-- date -->
//   <h4 id="userInputDate">${date}</h4>
//     `;
// };

// // const findDel = arr.findIndex(i=> i.id == 4)
// // console.log('findel : ', findDel);
// // const filter = arr.filter((item,index)=>item.id !== findDel)
// // console.log('filter ', filter);
// // console.log(arr);
// // localStorage.setItem('test', JSON.stringify(arr));

// // const arr3 = JSON.parse(localStorage.getItem('test'))
// // console.log(arr3);

// // const findEle = arr3.find(i=>i.id == 1)
// // findEle.title = 'seyla10'
// // console.log(findEle);
// // console.log(arr3);

// // localStorage.setItem('test', JSON.stringify(arr3))
