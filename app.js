// create referencees to page elements
var addButton = document.getElementById("add");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");

// add new item to task list
addButton.onClick = function(){
    var task = taskInput.nodeValue;
    // do not add empty string
    if(task.trim()) {
        // add new task list iterm
        var newItem = document.createElement("Li");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        // clear text input box
        taskInput.value = "";
        taskList.appendChild(newItem);
    }
    else {
        alert("task cannot be empty!");
    }
})