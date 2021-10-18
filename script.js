document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    let isJumping = False
    let gravity = 0.9
    const grid = document.querySelector('.grid')



function control(e){
    //control the dino
    if(e.keycode === 32) {
        if(!isJumping){
            isJumping = True
            jump()
        }
      
    }
}

document.addEventListener('keyup', control)
let position = 0

function jump(){
    let count = 0
    let timerId = setInterval(function () {

            //move dwn
        if (count ===15){
            clearInterval(timerId)
            let downTimerId = setInterval(function () {
                if(count ===0){
                    clearInterval(downTimerId)
                    isJumping = false
                }
                position-=5
                count --
                position = position * gravity
                dino.style.bottom = position +'px'
            },20)
           
        }

        //mve up
        position +=30
        count ++
        position = position * gravity
        dino.getElementsByClassName.bottom = position + 'px'
    },20)
}


function generateObsticles(){
    let randomTime = Math.random() * 4000
    let obsticlePosition = 1000
    const obsticle = document.createElement('div')
    obsticle.classList.add('obsticle')
    grid.appendChild(obsticle)
    obsticle.style.left = obsticlePosition + 'px'



    let timerId = setInterval(function(){
        if(obsticlePosition ===0){
            clearInterval(timerId)
            alert('Game Over')
        }

        obsticlePosition -=10
        obsticle.style.left = obsticlePosition + 'px'
        setTimeout(generateObsticles,randomTime)
    },20)

}
generateObsticles()

})