export const taskPending = (infoPend)=>{
    let plantilla = ""
        for (let i = 0; i < infoPend.length; i++){
            plantilla+= /*html*/`
            <div id="fallingElement" class="tasks_menu_task">
                <div>
                    <p>${infoPend[i].task}</p>
                </div>
                <div class="task_imgs"> 
                    <img data-id="${infoPend[i].id}" id="check" src="./storage/imgs/check.webp">
                    <img data-id="${infoPend[i].id}" id="delete" src="./storage/imgs/trash.webp">
                </div>
            </div>
            `
            }
        return plantilla
    }

export const taskComplete = async(infoComp)=>{
    let plantilla = ""
        for (let i = 0; i < infoComp.length; i++){
        plantilla+= /*html*/`
        <div id="fallingElement" class="tasks_menu_task_complete">
            <div>
                <del>${infoComp[i].task}</del>
            </div>
            <div class="task_imgs"> 
                <img  data-id="${infoComp[i].id}" id="reuse" src="./storage/imgs/ex.png">
                <img data-id="${infoComp[i].id}" id="delete" src="./storage/imgs/trash.webp">
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
