let finish = document.getElementById('finish')
let msg = document.getElementById('msg')


finish.addEventListener("click", (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let date = document.getElementById('datetime').value;
    let formValidation = () => {
        if (title ==="") {
            console.log('failure');
            msg.innerHTML = "Title cannot be blank";
        }else {
            console.log('success');
            msg.innerHTML = "";
            acceptData(title, content, date);
        }
    }
    formValidation()

})

let acceptData = (title,content, date) => {
    let data = {
        title : title,
        content : content,
        date : date,
    }
    console.log(data)
    localStorage.setItem('fromData', JSON.stringify(data));
}




