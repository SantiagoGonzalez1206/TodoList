import { AddToDo, getAllCompleteTasks, getAllPendingTasks } from "./crud.js";
import { taskPending, taskComplete} from "./tasks.js";

// const agregarTarea = async () => {
//     let act = {};
//     act.task = prompt("Ingrese la tarea:");
//     act.status = "On Hold";
//     let resultado = await AddToDo(act);
//     console.log(resultado);
// };

// agregarTarea();

let onHold = document.querySelector(".onHold")
let complete = document.querySelector(".complete")

addEventListener("DOMContentLoaded", async()=>{
    let infoPend = await getAllPendingTasks()
    console.log(infoPend);

    onHold.innerHTML = await taskPending(infoPend)

    let infoComp = await getAllCompleteTasks()
    console.log(infoComp);

    complete.innerHTML = await taskComplete(infoComp)

})