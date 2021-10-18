document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')



function control(e){
    //control the dino
    if(e.keycode === 32) {
        //
    }
}

document.addEventListener('keyup', control)


function jump(){
    let position = 0
    let timerId = setInterval(function () {

            //move dwn
        if (position ===150){
            clearInterval(timerId)
            let downTimerId = setInterval(function () {
                if(position ===0){
                    clearInterval(downTimerId)
                }
                position-=30
                dino.style.bottom = position +'px'
            },20)
           
        }

        //mve up
        position +=30
        dino.getElementsByClassName.bottom = position + 'px'
    },20)
}



})