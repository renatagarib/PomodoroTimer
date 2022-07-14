<template>
    <div id="card">
      <div class="pomodoro types">
        <p @click="typeTime('pomodoro', 'Pomodoro')"  :class="{active: tag == 'Pomodoro'}">Pomodoro</p>
      </div>
      <div class="shortBreak types">
        <p @click="typeTime('shortBreak', 'Short Break')"  :class="{active: tag == 'Short Break'}">Short Break</p>
      </div>
      <div class="longBreak types">
        <p @click="typeTime('longBreak', 'Long Break')" :class="{active: tag == 'Long Break'}">Long Break</p>
      </div>
      <div class="time">
        <div class="time-currently">
          <span class="minutes">{{ minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 }) }}</span>:<span
            class="seconds">{{ seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 }) }}</span>
        </div>
        <button v-show="!played" class="play btn" @click="start">
          START
        </button>
        <button v-show="played" class="stop btn" @click="stop">
          STOP
        </button>
        <img class="restart" @click="restartTimer" src="../assets/PomodoroTimer/imgs/resetart.svg" alt="restart-button">
      </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import buttonSound from "../assets/PomodoroTimer/sounds/minecraft_click.mp3"
import alertFinish from "../assets/PomodoroTimer/sounds/alarm.mp3";
import { useSettings } from "@/store/settings";

const settings = useSettings();

const type = ref("pomodoro")
var minutes = ref(settings.getPomodoroMinutes)
const seconds = ref(0)
const played = ref(false)
const tag = ref("Pomodoro")



//som do botão
const btnSound = new Audio(buttonSound)
//som do alerta
const alertSound = new Audio(alertFinish)
// variavel para o intervalo
let timer

//coloca o valor do pomodoro, short break ou long break na variavel minuto
const typeTime = (typechan, name) => {
  document.querySelector(".restart").classList.remove("active")
  type.value = typechan
  minutes.value = settings.getMinutes(type.value)
  tag.value = name
  seconds.value = 0
  played.value = false
  clearInterval(timer)
}

//começa o timer
const start = () => {
  document.querySelector(".restart").classList.add("active")
  played.value = true

  btnSound.play()
  alertSound.pause()

  // intervalo -> contagem regressiva
  timer = setInterval(() => {
    seconds.value--
    //diminui os minutos a cada 60 segundos, caso minutos > 0
    if (seconds.value < 0 && minutes.value != 0) {
      minutes.value--
      seconds.value = 59
    }
    // termina o intervalo quando minutos e segundos são 0
    if (minutes.value <= 0 && seconds.value <= 0) {
      clearInterval(timer)
      played.value = false
      alertSound.play()
      console.log("finalizo");
    }
  }, 1000)
}

//parar timer
const stop = () => {
  document.querySelector(".restart").classList.remove("active")
  played.value = false

  btnSound.play()
  clearInterval(timer)
}

//recomeçar timer
const restartTimer = () => {
  minutes.value = settings.getMinutes(type.value)
  played.value = false
  seconds.value = 0
  clearInterval(timer)
}
</script>

<style lang="scss" scoped>
#card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 1fr;
  border-radius: 10px;
  @media (min-width: 768px) {
    margin: 50px;
  }
  text-align: center;
  background-color: #DF4D30;
  padding: 50px;
  .time {
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
    position: relative;
    padding: 20px;
    .time-currently {
      font-size: 110px;
      font-weight: bold;
      color: #FAF9F9;
    }
    .btn {
      font-family: 'Varela Round', sans-serif;
      padding: 10px 0;
      font-size: 30px;
      border: none;
      background-color: #FAF9F9;
      border-radius: 10px;
      font-weight: bold;
      width: 70%;
      margin-bottom: 20px;
      color: #000000;
      cursor: pointer;
      margin-top: 10px;
      &.play {
        transform: translateY(-5px);
      }
    }
    .restart {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 30px;
      bottom: 93px;
      transition: all 0.5s ease;
      transform: scale(0);
      opacity: 0;
      @media (max-width: 764px) {
        width: 25px;
        height: 25px;
        right: 15px;
      }
      &.active {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  .types {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FAF9F9;
    font-weight: bold;
    margin-top: 20px;
    p {
      cursor: pointer;
      border-radius: 5px;
      padding: 5px;
      border-radius: 5px;
      &.active {
        transition: 0.2s ease-in-out;
        background-color:rgba($color: #a43721, $alpha: 0.8);
      }
    }
  }
}
</style>
