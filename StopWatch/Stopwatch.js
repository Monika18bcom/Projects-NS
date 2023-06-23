const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const stopBtn = document.querySelector("#stop")

startBtn.disabled = false;
pauseBtn.disabled = true;
stopBtn.disabled = true;


let hr = document.querySelector("#hours")
let min = document.querySelector("#minutes")
let sec = document.querySelector("#seconds")

let intervalNum = null;

function watch() {
    let h = Number(hr.innerText)
    let m = Number(min.innerText)
    let s = Number(sec.innerText)

    if (s == 59) {
        if (m == 59) {
            h++;
            m = 0;
        } else {
            m++;
        }
        s = 0;
    } else {
        s++;
    }

    hr.innerText = (h < 10) ? "0" + h : h
    min.innerText = (m < 10) ? "0" + m : m
    sec.innerText = (s < 10) ? "0" + s : s
}

startBtn.addEventListener("click", () => {

    intervalNum = setInterval(watch, 1000);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
})

pauseBtn.addEventListener("click", () => {

    if (pauseBtn.id == "pause") {
        clearInterval(intervalNum)
        pauseBtn.innerText = "Continue"
        pauseBtn.id = "continue"
    }else{
        intervalNum = setInterval(watch,1000)
        pauseBtn.innerText = "Pause"
        pauseBtn.id = "pause"
    }
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(intervalNum)
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;

    if(pauseBtn.id == "continue"){
        pauseBtn.innerText = "Pause"
        pauseBtn.id = "pause"
    }

    hr.innerText = "00"
    min.innerText = "00"
    sec.innerText = "00"
})
