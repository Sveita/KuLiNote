const createCard = (id,title,content,date) =>{
    return `
    <!-- note  -->
    <div id="columns">
      <div>
        <!-- icon delete and edit -->
        <div id="iconContainer">
          <a href="../pages/edit.html?${id}"><img src="./image/edit.png" alt="" id="edit" /></a>
          <button>
            <img src="./image/trash.png" alt="" id="deleteNote" />
          </button>
        </div>

        <!-- title -->
        <h2 id="userInputTitle">${title}</h2>
        <h3 id="userInputcContent">${content}</h3>
      </div>

      <!-- date -->
      <h4 id="userInputDate">${date}</h4>
    </div>
    `
}

export {createCard};