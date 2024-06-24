export const taskPending = (infoPend)=>{
    let plantilla = ""

    for (let i = 0; i < infoPend.length; i++){
    plantilla+= /*html*/`
    <div class="tasks_menu_task">
        <div>
            <p>${infoPend[i].task}</p>
        </div>
        <div class="task_imgs"> 
            <img class="check" src="./storage/imgs/check.webp">
            <img src="./storage/imgs/trash.webp">
        </div>
    </div>
    `
    }
    console.log(plantilla);
    return plantilla
}

export const taskComplete = async(infoComp)=>{
    let plantilla = ""

    for (let i = 0; i < infoComp.length; i++){
    plantilla+= /*html*/`
    <div class="tasks_menu_task_complete">
        <div>
            <del>${infoComp[i].task}</del>
        </div>
        <div class="task_imgs"> 
            <img src="./storage/imgs/check.webp">
            <img src="./storage/imgs/trash.webp">
        </div>
    </div>
    `
    }
    return plantilla
}

export const taskPending1 = (infoPend)=>{
    let plantilla = ""

    plantilla+= /*html*/`
    <div class="tasks_menu_task">
        <div>
            <p>${infoPend}</p>
        </div>
        <div class="task_imgs"> 
            <img src="./storage/imgs/check.webp">
            <img src="./storage/imgs/trash.webp">
        </div>
    </div>
    `

    console.log(plantilla);
    return plantilla
}
