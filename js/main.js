import { AddToDo, deleteTask, getAllCompleteTasks, getAllPendingTasks, reload } from "./crud.js";
import { taskPending, taskComplete, taskPending1} from "./tasks.js";


let onHold = document.querySelector(".onHold")
let complete = document.querySelector(".complete")
let search_input = document.querySelector("#search_input")
let search_button = document.querySelector(".search_button")
let deletes = document.querySelector(".delete")
let check = document.querySelector(".check")
let fallingElement = document.querySelector("#fallingElement")


addEventListener("DOMContentLoaded", async()=>{
    let infoPend = await getAllPendingTasks()


    onHold.innerHTML = await taskPending(infoPend)

    let infoComp = await getAllCompleteTasks()

    complete.innerHTML = await taskComplete(infoComp)

    let evento = search_input.addEventListener("change", (e) =>{
        const text = e.target.value
        search_input.value = null
        let search = taskPending1(text)
        onHold.innerHTML += search;
        let act = {};
        act.task = text
        act.status = "On hold";
        let resultado = AddToDo(act);   
        reload()
    })

    search_button.addEventListener("click", (e) =>{
        evento
    })
    
    // check.addEventListener("click", (e)=>{
    //     let taskCheck = {} 
    //     taskCheck.task = text
    //     taskCheck.status = "ready"
    //     let post = updateTask()
    // })

    document.querySelectorAll(".delete").forEach(basuraBtn => {
        basuraBtn.addEventListener("click", async (e) => {
            let dataId = e.target.dataset.id;
            await deleteTask(dataId);
            // console.log("eliminado")
            await getAllPendingTasks();
            e.target.parentElement.parentElement.remove();
            
            reload()
        })
    });
})
