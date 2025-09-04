let upDate;

function createTodoItem(e) {
    let inputValue = document.querySelector(".inputText").value;

    if (inputValue === "") {
        alert("Please enter a Task");
    } else {
        let todoItem = document.createElement("div");

        todoItem.innerHTML = `<span>${inputValue}</span>
        <span style="float:right;">
            <i onclick="editTodo(event)" class="fa-solid fa-pen-to-square" style="color: #db0000;"></i>
            <i onclick="deleteTodo(event)" class="fa-solid fa-trash" style="color: black;"></i>
        </span>`;

        todoItem.classList.add("todo-element-style");

        document.querySelector(".todo-content").appendChild(todoItem);
        document.querySelector(".inputText").value = "";
    }
}

function deleteTodo(e) {
    e.target.parentElement.parentElement.remove();
}

function editTodo(e) {
    upDate = e.target.parentElement.parentElement;
    const currentText = upDate.querySelector("span").innerText;

    e.target.parentElement.parentElement.innerHTML = `
        <span>
            <input type="text" value="${currentText}" placeholder="edit a task..." class="edit-todo-style">
            <i onclick="edited(event)" class="fa-solid fa-floppy-disk" style="font-size:17px;"></i>
        </span>
    `;
}

function edited(e) {
    const editedTodo = e.target.previousElementSibling.value;

    if (editedTodo.length === 0) {
        alert("Please enter a task");
    } else {
        upDate.innerHTML = `
            <span>${editedTodo}</span>
            <span style="float:right;">
                <i onclick="editTodo(event)" class="fa-solid fa-pen-to-square" style="color: #db0000;"></i>
                <i onclick="deleteTodo(event)" class="fa-solid fa-trash" style="color: black;"></i>
            </span>
        `;
    }
}
