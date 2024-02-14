// Objekt som inneholder informasjon om et gjøremål
const task1 = {
    title: "Sunbath",
}

// docuement.createElement for å lage nye elemneter
const liWrapper = document.createElement("li")
const containerElement = document.createElement("div")
const taskTitle = document.createElement("h2")

// element.className kan brukes for å sette klassenavn
containerElement.className = "task"

// element.textContent kan brukes for å sette tekst innhold
taskTitle.textContent = task1.title

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
