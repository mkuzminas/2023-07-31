const container = document.querySelectorAll(".skaicius");
const timerStart = document.getElementById("start");
const timerStop = document.getElementById("stop");
const timerReset = document.getElementById("reset");
const laikas = 600;

let tmp = laikas;
let timerID;
let isStopped = true;

const timeString = () => {
    let minutes = String(Math.trunc(tmp / 60));
    let seconds = String(tmp % 60);
    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
    if (seconds.length === 1) {
        seconds = "0" + seconds;
    }
    return minutes + seconds;
};

const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        timerID = setInterval(countDown, 1000);
    }
};

const stopTimer = () => {
    isStopped = true;
    if (timerID) {
        clearInterval(timerID);
    }
};

const resetTimer = () => {
    stopTimer();
    tmp = laikas;
    renderTime();
};

const countDown = () => {
    tmp -= 1;
    renderTime();
    if (tmp === 0) {
        stopTimer();
        tmp = laikas;
    }
};

const renderTime = () => {
    const time = timeString();
    container.forEach((count, index) => {
        count.innerHTML = time.charAt(index);
    });
};

timerStart.onclick = startTimer;
timerStop.onclick = stopTimer;
timerReset.onclick = resetTimer;
