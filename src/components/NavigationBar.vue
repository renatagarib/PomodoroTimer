<template>
  <div>
    <nav>
      <div id="logo">
        <img src="../assets/NavBar/imgs/logo.png" alt="tomato">
        <div id="tit">
          <h2>POMODORO timer</h2>
        </div>
      </div>
      <div id="options">
        <div class="config">
          <img src="../assets/NavBar/imgs/settings.png" @click="openSettings" alt="settings">
        </div>
        <div class="config">
          <img src="../assets/NavBar/imgs/close.png" v-show="fullscreen" @click="fullClose" alt="minimizise"/>
          <img src="../assets/NavBar/imgs/expand.png" v-show="!fullscreen" @click="fullOpen" alt="maximizise"/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const fullscreen = ref(false)

const openSettings = () => {
  const settings = document.getElementById('settings-id')
  console.log('oi')
  settings.classList.toggle("active")
}

const fullOpen = () => {
  document.getElementById('app').requestFullscreen()
  fullscreen.value = true
}

const fullClose = () => {
  document.exitFullscreen()
  fullscreen.value = false
}
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    border: 0;
    padding: 0;
    background-color: #246A73;
    #logo {
      padding: 10px;
      display: flex;
      align-items: center;
        img {
          height: 30px;
        }
        #tit {
          margin-left: 10px;
          color: #ffffff;
        }
    }
    #options {
      display: flex;
      align-items: center;
      div {
        margin-right: 10px;
      }
      .config {
        height: 30px;
        padding: 5px;
        cursor: pointer;
        &:hover {
          height: 40px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
