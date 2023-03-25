let text = document.getElementById("text")
let tags = document.getElementById("tags")
let result = document.getElementById("result")

generateTags()

text.addEventListener("input", () => {
  generateTags()
})

function generateTags() {
  tags.innerHTML = ""
  for (let word of text.value.split(" ")) {
    tags.innerHTML += `<div class='tag'><span>${word}</span></div>`
  }
  result.innerHTML = ""
  html2canvas(tags).then(canvas => {
    result.appendChild(canvas)
  });
}