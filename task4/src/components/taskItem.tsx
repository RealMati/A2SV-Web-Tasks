import {  useState } from "react";
import { task } from "../App";

export default function TaskItem({task, deletee, edit}: {task: task, deletee: any, edit: any}) {
    const [isEditing, setIsEditing] = useState(false)
    // const [newText, setNewText] = useState("")

    function handleEdit() : void{
        const neww = document.getElementById('editTaskText') as HTMLInputElement;

        var taskk: task = {name: neww.value, id: task.id}

        edit(taskk)
        setIsEditing(false)
 
    }
    
     
    function handleDelete(): void {
        deletee(task.id)
    }

    return (
        <>
            <div className="taskItem">
                <p>{task.name}</p>
                <div>
                    <button onClick={handleDelete} >
                        <img src="https://www.svgrepo.com/show/499905/delete.svg" alt="delete" style={{width: 30, height: 30}}></img>
                    </button>
                    <button onClick= {() => {
                        console.log(isEditing)
                        setIsEditing(true)
                        console.log(isEditing)

                    }}>
                        <img src="https://www.svgrepo.com/show/521132/edit-2.svg" alt="edit" style={{width: 30, height: 30}}></img>
                    </button>
                </div>
            </div>

            {isEditing &&
                <div className="popup" id="popup">
                    <div className="popup-content">
                        <textarea id="editTaskText" cols={90} rows={2} ></textarea>
                        <button onClick={handleEdit}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Close</button>
                    </div>
                </div>
            }
        </>
    );
}