const task1 = {
    title: "Sunbath",
}

// createElement for å lage nye elemneter
const liWrapper = document.createElement("li")
const containerElement = document.createElement("div")
const taskTitle = document.createElement("h2")

// className kan brukes for å sette klassenavn
containerElement.className = "task"

// textConten kan brukes for å sette teks innhold
taskTitle.textContent = task1.title

// appendChild brukes for å kombiner elementer
containerElement.appendChild(taskTitle)
liWrapper.appendChild(containerElement)

// Finne ut hvor i HTML (DOMet) vi ønsker å sette inn
// det nye elementet vårt
// Kan bruke .qeuerySelector for å finne elmenter
// ved samme syntakst som CSS selector
const taskList = document.querySelector(".task-list")

// Legg til det nye elementet vårt
taskList.appendChild(liWrapper)
