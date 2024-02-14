/**
 * Funksjon som tar imot et task objekt
 * genererer et nytt element og legger det til
 * i HTML
 */
function createTask(task) {
    // docuement.createElement for å lage nye elemneter
    const liWrapper = document.createElement("li")
    const containerElement = document.createElement("div")
    const taskTitle = document.createElement("h2")

    // element.className kan brukes for å sette klassenavn
    containerElement.className = "task"

    // element.textContent kan brukes for å sette tekst innhold
    taskTitle.textContent = task.title

    // element.appendChild brukes for å kombiner elementer
    containerElement.appendChild(taskTitle)
    liWrapper.appendChild(containerElement)

    // Finne ut hvor i HTML (DOMet) vi ønsker å sette inn
    // det nye elementet vårt
    // Kan bruke document.qeuerySelector for å finne elementer
    // ved samme syntakst vi bruker i CSS
    const taskList = document.querySelector(".task-list")

    // Legg til det nye elementet vårt
    taskList.appendChild(liWrapper)
}

// Finne hvordan kjøre koden når knappen blir trykt på
// 1. Finn knappen
const addTaskButton = document.querySelector("#add-task")

// 2. Lage funksjon som skal kjøre når kappen trykkes
/**
 * Funksjon som skal kjøre når knappen blir trykket
 * og skal lese av verdien i input feltet, lage et
 * nytt Task objekt for å sende videre til createTask funksjonen vår
 */
function addTask() {
    // Objekt som inneholder informasjon om et gjøremål
    const task1 = {
        title: "Sunbath",
    }

    // Lage Task objektet vårt fra det som står skrevet i
    // input feltet
    
    
    // Gi til createTask funksjonen vår
    createTask(task1)
}

// 3. Kjør funksjonen hver gang knappene trykkes
addTaskButton.addEventListener("click", addTask)
