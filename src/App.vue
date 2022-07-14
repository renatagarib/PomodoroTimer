<template>
  <div id="content">
    <SettingsWinVue />
    <NavigationBarVue />
    <div id="timer-container">
      <div id="timer">
        <PomodoroTimerVue />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBarVue from './components/NavigationBar.vue'
import SettingsWinVue from './components/SettingsWin.vue'
import PomodoroTimerVue from './components/PomodoroTimer.vue'

//instancia os componentes
export default {
  name: 'App',
  components: {
    NavigationBarVue,
    SettingsWinVue,
    PomodoroTimerVue
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

  #app {
    height: 100vh;
    width: 100%;
    display: flex;
    font-family: 'Varela Round', sans-serif;
    justify-content: center;
    background-color: #160F29;
  }

  #content {
    position: center;
    width: 100%;
  }

  #timer-container {
    display: flex;
    justify-content: center;
  }

  #timer {
    position: relative;
    z-index: 2;
    width: 800px;
    @media (max-width: 767px) {
      width: 350px;
    }
  }
</style>
