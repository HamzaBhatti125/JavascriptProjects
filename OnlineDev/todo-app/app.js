var list = document.getElementById("myUL");

function addTodo() {
    var todo_item = document.getElementById("todo-item");

    // CREATING LIST
    var li = document.createElement("li");
    var container = document.createElement("span");
    container.setAttribute("class", "container");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(container);
    container.appendChild(liText);
    list.appendChild(li);

    // CREATING Edit BTN
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class", "btn edit-btn");
    editBtn.setAttribute("onclick", "editItem(this)");
    li.appendChild(editBtn);

    // CREATING Del BTN
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("class", "btn del-btn");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    li.appendChild(delBtn);


    // CREATING Done BTN
    var doneBtn = document.createElement("button");
    var doneText = document.createTextNode("Done");
    doneBtn.appendChild(doneText);
    doneBtn.setAttribute("class", "btn done-btn");
    doneBtn.setAttribute("onClick", "doneItem(this)");
    li.appendChild(doneBtn);

    todo_item.value = "";

}

function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {

    var editValue = e.parentNode.firstChild.nodeValue
    var inputField = document.createElement("input")
    inputField.type = "text"
    inputField.value = editValue
    inputField.setAttribute("class", "li-text")
    e.parentNode.childNodes[0].replaceWith(inputField)
    var saveBtn = document.createElement("button")
    saveBtn.appendChild(document.createTextNode("Save"))
    saveBtn.setAttribute("class", "btn")
    saveBtn.setAttribute("onClick", "saveItem(this)")
    e.parentNode.childNodes[1].replaceWith(saveBtn)
}

function doneItem(e) {
    var leaf = e.parentNode;
    var content = e.parentNode.childNodes[3].childNodes[0].data
    if (content == "Done") {
        leaf.setAttribute("class", "checked");
        e.parentNode.childNodes[3].childNodes[0].data = "Undone"
    } else {
        leaf.setAttribute("class", "unchecked");
        e.parentNode.childNodes[3].childNodes[0].data = "Done"
    }
}

function saveItem(e) {
    var textNode = e.parentNode.childNodes[0].value
    console.log(textNode)
    var editBtn = document.createElement("button")
    editBtn.appendChild(document.createTextNode("Edit"))
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onClick", "editItem(this)")
    e.parentNode.childNodes[0].replaceWith(textNode)
    e.parentNode.childNodes[1].replaceWith(editBtn)
}

function deleteAll() {
    list.innerHTML = " ";
}
