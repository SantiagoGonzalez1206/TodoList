// Add

export const AddToDo = async (arg) => {
    let val = await validarAgregarTarea(arg);
    if (val) return val;

    let config = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(arg)
    };

    let res = await fetch("https://66760dffa8d2b4d072f2497f.mockapi.io/toDoList", config);
    let data = await res.json();
    return data;
};


const validarAgregarTarea = async (act) => {
    if (typeof act.task !== "string" || act.task === undefined) {
        return { status: 406, message: "Los datos de la tarea no estan llegando correctamente" };
    }
};

// Get

export const getAllPendingTasks = async()=>{
    console.log("Esperando .......");
    const url = `https://66760dffa8d2b4d072f2497f.mockapi.io/toDoList`;
    const options = {
        method: 'GET',
        headers: { "Content-type": "application/json" }
    };
    let res = await fetch(url, options);
    let data = await res.json();


    let filteredData = data.filter(item => item.status === "On hold");

    return filteredData;
}

export const getAllCompleteTasks = async()=>{
    console.log("Esperando .......");
    const url = `https://66760dffa8d2b4d072f2497f.mockapi.io/toDoList`;
    const options = {
        method: 'GET',
        headers: { "Content-type": "application/json" }
    };
    let res = await fetch(url, options);
    let data = await res.json();


    let filteredData = data.filter(item => item.status === "ready");

    return filteredData;
}