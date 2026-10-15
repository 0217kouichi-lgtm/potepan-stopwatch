let timecounter = 0;
let timerID = null;

const startBtn = document.querySelector("#startbtn");
const stopBtn = document.querySelector("#stopbtn");
const resetBtn = document.querySelector("#resetbtn");

const Hour = document.querySelector(".hour");
const Minute = document.querySelector(".minute");
const Second = document.querySelector(".second");
const milliSecond = document.querySelector(".millisecond");


startBtn.addEventListener("click", () => {

  startBtn.disabled = true;
  stopBtn.disabled = false;


  timerID = setInterval(() => {
    timecounter++;          // カウントを1増やす

    if (timecounter === 10) {
      timecounter = 0;
      Second.textContent = Number(Second.textContent) + 1;
    }
    // timeDisplays[3] ではなく、milliSecond を使う！
    milliSecond.textContent = timecounter;

    if (Number(Second.textContent) === 60) {
      Second.textContent = 0;
    Minute.textContent = Number(Minute.textContent) + 1;
    }

     if (Number(Minute.textContent) === 60) {
      Minute.textContent = 0;
    Hour.textContent = Number(Hour.textContent) + 1;
    }

    console.log(timecounter);
  }, 100);


});



// ストップボタン
stopBtn.addEventListener("click", () => {

  if (timerID !== null) {
    stopBtn.disabled = true;
  }

  startBtn.disabled = false;

  clearInterval(timerID);
  timerID = null;
});



// リセットボタン
resetBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = false;

  // タイマーが動いていたら止める＆変数も0に戻す
  clearInterval(timerID);
  timerID = null;
  timecounter = 0;


  Hour.textContent = "0";
  Minute.textContent = "0";
  Second.textContent = "0";
  milliSecond.textContent = "0";
});




