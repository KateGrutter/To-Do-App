const options = {method: 'GET'};

const todoList = document.getElementById("todo-list")

fetch('http://localhost:3000/todos', options)
  .then(response => response.json())
  .then(data => {
    for (let d of data) {
        console.log(d)
    }
  })
  .catch(err => console.error(err));