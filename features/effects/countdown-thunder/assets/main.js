
let counterValue = document.querySelector('#counterValue')
let image = document.querySelector('#fire')
let check = false
let counter = 3

function countExplosion(){
    let timer;
    if(check == false){
        timer = setInterval(function(){
            playBeep()
            counterValue.innerHTML = counter
            counter--;
            if(counter === -1){
                image.src = "assets/thunder.gif"
                playThunder()
                clearInterval(timer)
            }
        }, 1000)
        check = true
    }
}

function playBeep(){
    let beep = new Audio()
    beep.src = "assets/countdown-beep.mp3"
    beep.play()
}

function playThunder(){
    let beep = new Audio()
    beep.src = "assets/thunder-sound-effect.mp3"
    beep.play()
}