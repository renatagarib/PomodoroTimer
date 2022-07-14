<template>
  <div class="settings" id="settings-id">
    <div id="outside-settings" @click="closeSettings"></div>
    <div id="settings-window">
      <div class="timer-config section">
        <div class="time">
          <p>Pomodoro: </p>
          <input type="number" v-model="pomodoroMinutes">
        </div>
        <div class="time">
          <p>Short Break: </p>
          <input type="number" v-model="shortBreakMinutes">
        </div>
        <div class="time">
          <p>Long Break: </p>
          <input type="number" v-model="longBreakMinutes">
        </div>
      </div>
      <div class="section">
        <p>Auto Start Break</p>
        <SwitchButtonVue />
      </div>
      <div class="section">
        <button class="btn" @click="closeSettings">Okay </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import SwitchButtonVue from './SwitchButton.vue';
import { useSettings } from '../store/settings'
import { watch } from 'vue';
import { ref } from "@vue/reactivity";

const settings = useSettings()

//variaveis para o tempo de cada categoria
const pomodoroMinutes = ref(settings.getPomodoroMinutes)
const shortBreakMinutes = ref(settings.getShortBreakMinutes)
const longBreakMinutes = ref(settings.getLongBreakMinutes)

//caso o tempo do pomodoro seja editado, muda no store e faz o salvamento no cache do browser
watch(pomodoroMinutes, () => {
  settings.setPomodoroMinutes(pomodoroMinutes)
  settings.saveInLocalStorage()
})

//caso o tempo do shor break seja editado, muda no store e faz o salvamento no cache do browser
watch(shortBreakMinutes, () => {
  settings.setShortBreakMinutes(shortBreakMinutes)
  settings.saveInLocalStorage()
})

//caso o tempo do long break seja editado, muda no store e faz o salvamento no cache do browser
watch(longBreakMinutes, () => {
  settings.setLongBreakMinutes(longBreakMinutes)
  settings.saveInLocalStorage()
})

//fecha tela de opções
const closeSettings = () => {
  const settings = document.getElementById("settings-id")
  settings.classList.toggle("active")
}

</script>

<style lang="scss" scoped>

  .settings {
    display: none;
  }
  .settings.active {
    display: flex;
    justify-content: center;
  }
  #outside-settings {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba($color: #000000, $alpha: 0.3);
    justify-content: center;
    z-index: 90;
  }
    #settings-window {
      display: flex;
      flex-direction: column;
      color: #Ffffff;
      font-size: 150%;
      justify-content: center;
      align-items: center;
      background-color: #DF4D30;
      border-radius: 10px;
      top: 20%;
      padding: 2%;
      position: absolute;
      width: 40%;
      @media (max-width: 765px) {
        padding: 20px;
        width: 100%;
      }
      z-index: 100;
      .section {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        justify-content: space-between;

        .btn {
          font-family: 'Varela Round', sans-serif;
          padding: 10px 0;
          font-size: 20px;
          border: none;
          background-color: #FAF9F9;
          border-radius: 10px;
          font-weight: bold;
          width: 100%;
          color:#000000;
          cursor: pointer;
          transform: translateY(-5px);
          &:active {
            transform: translateY(5px);
          }
        }
        &.timer-config {
          display: flex;
          .time {
            
            input {
              font-family: 'Varela Round', sans-serif;
              display: block;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
              width: 80px;
              height: 30px;
              padding: 20px;
              font-size: 30px;
              font-weight: bold;
              margin-top: 10px;
              outline: none;
              border-radius: 5px;
              border: none;
              margin-left: auto;
              margin-right: auto;
            }
          }
        }
      }
    }

</style>
