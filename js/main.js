import { AddToDo } from "./crud.js";

const agregarTarea = async () => {
    let act = {};
    act.task = prompt("Ingrese la tarea:");
    act.status = "On Hold";
    let resultado = await AddToDo(act);
    console.log(resultado);
};

agregarTarea();