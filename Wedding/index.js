const invitation = document.querySelector('.invitation')
const first = document.getElementById('first')
const second = document.getElementById('second')
const last = document.getElementById('last')
const combine = document.getElementById('combined')
const date = document.getElementById('pick-date')
const where = document.getElementById('where')

const buttonOne = document.getElementById('button1')
const buttonTwo = document.getElementById('button2')
const buttonThree = document.getElementById('button3')

//actual functions start here

const firstNameInput = document.getElementById('First-Name')
// const typingNameOne = () => {
//     first.innerHTML = firstNameInput.value 
// }
// firstNameInput.addEventListener("keyup", typingNameOne)

const secondNameInput = document.getElementById('Second-Name')
// const typingNameTwo = () => {
//     second.innerHTML = secondNameInput.value 
// }
// secondNameInput.addEventListener("keyup", typingNameTwo)

//initials function

const firstChar = ()=> {
  second.innerHTML = firstNameInput.value.substr(0,1) + ' & ' + secondNameInput.value.substr(0,1);
}
firstNameInput.addEventListener("keyup", firstChar)
secondNameInput.addEventListener("keyup", firstChar)

// const firstNameInput = document.getElementById('First-Name')
// const secondNameInput = document.getElementById('Second-Name')

// const firstChar = $('#First-Name', '#Second-Name').val().substr(0, 1);
// firstNameInput.addEventListener("keyup", firstChar)
// secondNameInput.addEventListener("keyup", firstChar)

// const firstNameInput = document.getElementById('First-Name')
// const secondNameInput = document.getElementById('Second-Name')

const typingBoth = () => {
  combined.innerHTML = firstNameInput.value + ' & ' + secondNameInput.value
}
firstNameInput.addEventListener("keyup", typingBoth)
secondNameInput.addEventListener("keyup", typingBoth)

// const combiningNames = ()=> {
//   combined.innerHTML = firstNameInput.value + '&' + secondNameInput.value
// }
// combined.addEventListener("keyup", combiningNames)


const lastNameInput = document.getElementById('Last-Name')
const typingLastName = () => {
    last.innerHTML = lastNameInput.value 
}
lastNameInput.addEventListener("keyup", typingLastName)

const dateInput = document.getElementById('date')
const choosingDate = (event) => {
    const dateNumber = event.srcElement.valueAsNumber
    const dateObject = new Date(dateNumber) 
    const newMonth = dateObject.getMonth() + 1
    const newDay = dateObject.getDate() + 1
    const newYear = dateObject.getFullYear()
    const newDate = newMonth + ' / ' + newDay + ' / ' + newYear
    date.innerHTML = newDate
    console.log(event)
    }
dateInput.addEventListener("onChange", choosingDate)

// .map((date)=> value.split("-"))

const locationInput = document.getElementById('location')
const typingLocation = () => {
    where.innerHTML = locationInput.value 
}
locationInput.addEventListener("keyup", typingLocation)

//color picker

// const colorPicker = document.getElementById('color')
// const changingColor = () => {
//   invitation.style.background = colorPicker.value
// }
// colorPicker.addEventListener("input", changingColor)


//button functions here

const onBasicButton = () => {
  // invitation.className="basic";
  invitation.classList.toggle("basic");
}

buttonOne.addEventListener("click", onBasicButton)

const onKismetButton =() => {
  invitation.classList.toggle("kismet")
}

buttonTwo.addEventListener("click", onKismetButton)

const onElegantButton = () => {
  // invitation.className="basic";
  invitation.classList.toggle("elegant");
}

buttonThree.addEventListener("click", onElegantButton)
