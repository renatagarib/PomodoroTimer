//npm install pinia
import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
    state: () => ({
        pomodoro: {
          minutes: 25,
          time: 25,
          default: 25
        },
        shortBreak: {
          minutes: 5,
          time: 5,
          default: 5
        },
        longBreak: {
          minutes: 15,
          time: 15,
          default: 15
        }
      }),

    getters: {
      
      getPomodoroMinutes(state) {
        return state.pomodoro.minutes
      },
      getPomodoroDefault(state) {
        return state.pomodoro.default
      },
      
      getShortBreakMinutes(state) {
        return state.shortBreak.minutes
      },
      getShortBreakDefault(state) {
        return state.shortBreak.default
      },

      getLongBreakMinutes(state) {
        return state.longBreak.minutes
      },
      getLongBreakDefault(state) {
        return state.longBreak.default
      },

    },

    actions: {
        setPomodoroMinutes(time) {
          this.pomodoro.minutes = time
        },
        setShortBreakMinutes(time) {
            this.shortBreak.minutes = time
        },
        setLongBreakMinutes(time) {
            this.longBreak.minutes = time
        },

        setPomodoroTime(time) {
          this.pomodoro.time = time
        },
        setShortBreakTime(time) {
          this.shortBreak.time = time
        },
        setLongBreakTime(time) {
          this.longBreak.time = time
        },

        getMinutes(type) {
          return this[type].minutes
        },

        saveInLocalStorage() {
            localStorage.setItem('pomodoroTime', this.pomodoro.minutes)
            localStorage.setItem('shortBreakTime', this.shortBreak.minutes)
            localStorage.setItem('longBreakTime', this.longBreak.minutes)
        },

        retrieveFromLocalStorage() {
            this.pomodoro.minutes = localStorage.getItem('pomodoroTime')
            this.shortBreak.minutes = localStorage.getItem('shortBreakTime')
            this.longBreak.minutes = localStorage.getItem('longBreakTime')
        }
      },

  })
