
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    document.getElementById("button-sound").play();
    count += 1
    countEl.innerText = count
}
function save() {
    document.getElementById("button-sound").play();
    let countStr = count + " - "
    saveEl.innerText += countStr
}
