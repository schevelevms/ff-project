
import { defineStore } from 'pinia'
export const useErrorStore = defineStore('errorStore', {
  state: () => ({
      error: null,
    }),
  getters: {
    getError(){
        return this.error
    }
  },
  actions: {
    setMessage(message){
        this.error = message
        setTimeout(() => {
            this.error = null
        }, 5000)
    }
} 
})
