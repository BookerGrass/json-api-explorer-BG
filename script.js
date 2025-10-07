//const fetchButton = document.getElementById('fetchButton');
const postList = document.getElementById('postList')
const success = document.getElementById('formSuccess')
const title = document.getElementById('titleInput')
const body = document.getElementById('bodyInput')
const formError = document.getElementById('formError')


document.addEventListener('click', function(event) {

    if(event.target.type === 'submit'){
        formError.textContent = '';
        if (title.value.trim()=== ''){
            event.preventDefault();
            formError.textContent = 'Title can not be empty'
        }
        else if (body.value.trim() === ''){
            event.preventDefault();
            formError.textContent = 'Body can not be empty'
        }
        else {event.preventDefault();
            success.innerHTML = "Successful"
             success.innerHTML = `Success, <br> TITLE: ${titleInput.value} BODY: ${bodyInput.value}`

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            BODY: {
                title: titleInput.value,
                body: bodyInput.value
            }
        })};
    };

    if(event.target.id === 'fetchButton'){
        success.innerHTML = '';
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            .then((jsonData) => {
        console.log(jsonData);
        for (let obj of jsonData){
        postList.innerHTML += `<strong>${obj.title}</strong> <br>
        ${obj.body}<br>`
        }})

    }

})



