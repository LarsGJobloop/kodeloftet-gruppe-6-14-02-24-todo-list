function addTask() {
    // Finn input elementet
    const inputElement = document.querySelector("#input-title")
    const taskTitle = inputElement.value

    if (taskTitle === "") {
        console.warn("Du må skrive inn noe i tekst feltet")
    } else {
        // 1. Konstruer Gjøremåls objektet objektet
        const newTask = {
            title: taskTitle,
        }

        // 2. Lag alle HTML elementene
        const liElement = document.createElement("li")
        const divElement = document.createElement("div")
        const h2Element = document.createElement("h2")

        // Konfigurer elementen
        divElement.className = "task"
        h2Element.textContent = newTask.title

        // Koble de sammen
        liElement.appendChild(divElement)
        divElement.appendChild(h2Element)

        // 3. Legg til det nye elementet i HTML
        const taskList = document.querySelector("#task-list")
        taskList.appendChild(liElement)

        // 4. Tilbakestill tekst input feltet
        inputElement.value = ""
    }
}

const addTaskButton = document.querySelector("#add-task")
addTaskButton.addEventListener("click", addTask)