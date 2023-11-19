let input = document.querySelector("#task-input");

input.addEventListener("keypress", function(event) {

    if (event.key != "Enter") {
        return;
    }
    if (input.value == ''){
        return;
    }

    let newTask = document.createElement("li");
    newTask.innerHTML = '<input type="checkbox" class="checkbox" onchange="taskChecked(event)"/>' + input.value;
    newTask.draggable = "true";
    newTask.ondragstart="drag(event)";


    let taskList = document.querySelector("#task-list");
    taskList.appendChild(newTask);

    input.value = "";
    
});

function taskChecked(event) {
    let task = event.target.parentElement;
    task.classList.toggle('checked');
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var draggedElement = document.querySelector('[draggable=true][data-dragging=true]');

    // Se o elemento foi encontrado
    if (draggedElement) {
    // Move o item antes do elemento de destino
        event.target.parentNode.insertBefore(draggedElement, event.target);
        draggedElement.removeAttribute('data-dragging');
    }
}

document.addEventListener('dragover', function (event) {
    var draggingElement = document.querySelector('[draggable=true][data-dragging=true]');
    if (draggingElement) {
        event.preventDefault();
    }
});

document.addEventListener('dragstart', function (event) {
    event.target.setAttribute('data-dragging', 'true');
});

function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var draggedElement = document.querySelector('[draggable=true][data-dragging=true]');

    // Se o elemento foi encontrado
    if (draggedElement) {
        // Move o item antes do elemento de destino
        event.target.parentNode.insertBefore(draggedElement, event.target);
        draggedElement.removeAttribute('data-dragging');
    }
}

document.addEventListener('dragover', function (event) {
    var draggingElement = document.querySelector('[draggable=true][data-dragging=true]');
    if (draggingElement) {
        event.preventDefault();
    }
});

document.addEventListener('dragstart', function (event) {
    event.target.setAttribute('data-dragging', 'true');
});