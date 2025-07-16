//main idea if js
//1. save the data
//2. generate html
//3. make it interactive 

const todoList = [];

//render - to display something
function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        
        //const name = todoObject.name; // because variable name is the same as the object attribute name, we can destructure it
        const { name, dueDate } = todoObject;
        //const dueDate = todoObject.dueDate;
        //const { dueDate } = todoObject;

        //we seperated name, due date and button into 3 different elements so that we can style them into grids
        const html = ` 
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="deleteButton">Delete</button>
        `; // generating html with js
        
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    
    todoList.push({
      //name : name, //variable name and object name are the same so we can just write them alone
      //dueDate: dueDate,
      name,
      dueDate  
    });

    console.log(todoList);

    renderTodoList();
}
