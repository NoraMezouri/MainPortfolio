let counter = 0
let txt = 'webudvikler'
let speed = 80

function redTypeWriter() {
  if (counter < txt.length) {
    document.querySelector("#redType").innerHTML += txt.charAt(counter)
    counter++
    setTimeout(redTypeWriter, speed)
  }
}


