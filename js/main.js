import { AddToDo, getAllCompleteTasks, getAllPendingTasks } from "./crud.js";
import { taskPending, taskComplete, taskPending1} from "./tasks.js";


let onHold = document.querySelector(".onHold")
let complete = document.querySelector(".complete")
let search_input = document.querySelector("#search_input")
let search_button = document.querySelector(".search_button")

addEventListener("DOMContentLoaded", async()=>{
    let infoPend = await getAllPendingTasks()
    console.log(infoPend);

    onHold.innerHTML = await taskPending(infoPend)

    let infoComp = await getAllCompleteTasks()
    console.log(infoComp);

    complete.innerHTML = await taskComplete(infoComp)

    search_input.addEventListener("change", (e) =>{
        let text = e.target.value
        search_input.value = null
        let search = taskPending1(text)
        onHold.innerHTML += search;
        let act = {};
        act.task = text
        act.status = "On hold";
        let resultado = AddToDo(act);
    })

    search_button.addEventListener("click", (e) =>{
        let text = e.target.value
        search_input.value = null
        let search = taskPending1(text)
        onHold.innerHTML += search;
        let act = {};
        act.task = text
        act.status = "On hold";
        let resultado = AddToDo(act);
        console.log(resultado)
    })

})