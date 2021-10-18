document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    let isJumping = False
    let gravity = 0.9

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


function jump(){
    let count = 0
    let timerId = setInterval(function () {

            //move dwn
        if (position ===15){
            clearInterval(timerId)
            let downTimerId = setInterval(function () {
                if(count ===0){
                    clearInterval(downTimerId)
                    isJumping = false
                }
                position-=30
                count --
                dino.style.bottom = position +'px'
            },20)
           
        }

        //mve up
        count ++
        position +=30
        position = position * gravity
        dino.getElementsByClassName.bottom = position + 'px'
    },20)
}



})