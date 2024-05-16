let counter = 0
let txtWU = 'webudvikler'
let txtDM = 'Digital media elev'
let speed = 80
let comb = txtDM + txtWU

function TypeWriter() {
  if (counter < comb.length) {
    document.querySelector("#redType").innerHTML += txtWU.charAt(counter)
    document.querySelector("#blueType").innerHTML += txtDM.charAt(counter)
    counter++
    setTimeout(TypeWriter, speed)
    
  }
}


// document.querySelector("#blueType").innerHTML += txtDM.charAt(counter)