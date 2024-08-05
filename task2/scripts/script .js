"use strict";
let currentTaskItem = null;
function handleAdd() {
    console.log("asd");
    const inputField = document.getElementById("addTask");
    const inputText = { name: inputField.value };
    if (inputText.name !== "") {
        const taskList = document.getElementById("taskList");
        var taskItem = document.createElement("div");
        taskItem.className = "taskItem";
        var p = document.createElement("p");
        p.textContent = inputText.name;
        taskItem.appendChild(p);
        var taskOptions = document.createElement("div");
        var deleteOption = document.createElement("button");
        var deleteImage = document.createElement("img");
        deleteImage.src = "https://www.svgrepo.com/show/499905/delete.svg";
        deleteImage.alt = "delete";
        deleteImage.style.width = "30px";
        deleteImage.style.height = "30px";
        deleteOption.addEventListener("click", function () {
            if (taskList) {
                taskList.removeChild(taskItem);
            }
        });
        var editOption = document.createElement("button");
        var editImage = document.createElement("img");
        editImage.src = "https://www.svgrepo.com/show/521132/edit-2.svg";
        deleteImage.alt = "edit";
        editImage.style.width = "30px";
        editImage.style.height = "30px";
        editOption.addEventListener("click", function () {
            currentTaskItem = taskItem;
            const edit = document.getElementById('editTaskText');
            edit.value = "";
            const popup = document.getElementById('popup');
            popup.style.display = 'block';
            console.log("Asasd");
        });
        deleteOption.appendChild(deleteImage);
        taskOptions.appendChild(deleteOption);
        editOption.appendChild(editImage);
        taskOptions.appendChild(editOption);
        taskItem.appendChild(taskOptions);
        taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(taskItem);
        inputField.value = "";
    }
}
function handleEdit() {
    if (currentTaskItem) {
        const neww = document.getElementById('editTaskText');
        const newText = neww.value;
        const p = currentTaskItem.querySelector('p');
        p.innerText = newText;
        closeEdit();
    }
}
function closeEdit() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
