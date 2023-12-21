let containerEl = document.querySelector(".container")
let careers = ["Rachid", "a Hydraulics Engineer", "a Web Developer", "a Freelancer"]
let careesIndex = 0
let charCareesIndex = 0

updateText()

function updateText() {
   charCareesIndex++
   containerEl.innerHTML = `<h1 style>I am ${careers[careesIndex].slice(0, charCareesIndex)}</h1>`
   if (charCareesIndex === careers[careesIndex].length) {
      careesIndex++
      charCareesIndex = 0
   }
   if (careesIndex === careers.length) {
      careesIndex = 0
   }
   setTimeout(updateText, 300)

}