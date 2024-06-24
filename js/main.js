import { AddToDo, getAllCompleteTasks, getAllPendingTasks, reload, updateTask } from "./crud.js";
import { taskPending, taskComplete, taskPending1} from "./tasks.js";


let onHold = document.querySelector(".onHold")
let complete = document.querySelector(".complete")
let search_input = document.querySelector("#search_input")
let search_button = document.querySelector(".search_button")
let check = document.querySelector(".check")

addEventListener("DOMContentLoaded", async()=>{
    let infoPend = await getAllPendingTasks()
    console.log(infoPend);

    onHold.innerHTML = await taskPending(infoPend)

    let infoComp = await getAllCompleteTasks()
    console.log(infoComp);

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

})
