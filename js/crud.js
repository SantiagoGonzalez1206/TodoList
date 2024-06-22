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
        return { status: 406, message: "Los datos de la tarea no estÃ¡n llegando correctamente" };
    }
};
