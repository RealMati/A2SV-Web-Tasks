let currentTaskItem: HTMLElement | null = null;

interface task {
    name: string;
}

function handleAdd(): void {
    console.log("asd");
    const inputField = document.getElementById("addTask") as HTMLInputElement;
    const inputText: task = {name: inputField.value};

    if (inputText.name !== "") {
        const taskList : HTMLElement | null = document.getElementById("taskList");

        var taskItem : HTMLElement = document.createElement("div");
        taskItem.className = "taskItem";
        var p : HTMLElement= document.createElement("p");
        p.textContent = inputText.name;
        taskItem.appendChild(p);

        var taskOptions = document.createElement("div");

        var deleteOption = document.createElement("button");
        var deleteImage = document.createElement("img");
        deleteImage.src = "https://www.svgrepo.com/show/499905/delete.svg";
        deleteImage.alt = "delete"
        deleteImage.style.width = "30px";
        deleteImage.style.height = "30px";
        deleteOption.addEventListener("click", function () {
            if (taskList){
                taskList.removeChild(taskItem);
            }
        });

        var editOption : HTMLElement = document.createElement("button")
        var editImage : HTMLImageElement = document.createElement("img")
        editImage.src = "https://www.svgrepo.com/show/521132/edit-2.svg"
        deleteImage.alt= "edit"
        editImage.style.width = "30px"
        editImage.style.height = "30px";
        editOption.addEventListener("click", function () {
            currentTaskItem = taskItem;
            const edit = document.getElementById('editTaskText') as HTMLInputElement;
            edit.value=""
            const popup = document.getElementById('popup') as HTMLElement;
            popup.style.display = 'block';
            console.log("Asasd");
        });
        
        deleteOption.appendChild(deleteImage);
        taskOptions.appendChild(deleteOption);

        editOption.appendChild(editImage)
        taskOptions.appendChild(editOption)

        taskItem.appendChild(taskOptions);
        taskList?.appendChild(taskItem);



        inputField.value="";

    }
    
}



function handleEdit() : void{
    if (currentTaskItem) {
        const neww = document.getElementById('editTaskText') as HTMLInputElement;
        const newText = neww.value;
        
        const p = currentTaskItem.querySelector('p') as HTMLElement;
        p.innerText = newText;
        closeEdit();
    }
}

function closeEdit(): void {
    const popup = document.getElementById('popup') as HTMLElement;
    popup.style.display = 'none';
}

