
import { defineStore } from 'pinia'
export const useTokenStore = defineStore('tokenStore', {
  state(){
    return{
      tokenAuth: '',
      profile: {},
      tokenCheckRefresh: false
    } 
    },
  getters: {
    token(){
      return this.tokenAuth
    },
    isAuth(){
      return !!this.token
    }
  },
  
  actions: {
    async getAuth(){
      const id = localStorage.getItem('jwt-token')
      const url = `https://ff-project-nuxt-default-rtdb.firebaseio.com/auth/${id}.json`
      const data = await $fetch(url, {
        method: 'GET'
       })
       
       return await data
    },

    async register(payload){
      try{
      const url = `https://ff-project-nuxt-default-rtdb.firebaseio.com/auth.json`
      const localId = randomId() 
       const get = await $fetch(`https://ff-project-nuxt-default-rtdb.firebaseio.com/auth.json`,{method:'GET'})
       
       let haveNickname = false
        await Object.values(get).forEach(obj => {
          if(obj.nickname.includes(payload.nickname)){
            haveNickname = true       
          }
        })
          if (!haveNickname) {
           let data = await $fetch(url, {
              method: 'POST',
              body: {...payload, localId: localId, photo: '/_nuxt/assets/avatar.png'}
            })
            this.profile = {...payload, localId: localId}
            this.tokenAuth = data.name
            localStorage.setItem('jwt-token', data.name)
            const errorStore = useErrorStore()
            errorStore.setMessage(loginError('Регистрация прошла успешно!'))
          }else{
            throw new Error('Такой пользователь уже существует')
          }
      }catch(e){    
        const errorStore = useErrorStore()
        errorStore.setMessage(loginError(e.message))
      } 
    },
    async login(payload){
      try {
        const url = `https://ff-project-nuxt-default-rtdb.firebaseio.com/auth.json`
      const data = await $fetch(url, {
        method: 'GET'
       })
       let haveNickname = false
       let localId = null
       let i = 0
          Object.values(data).forEach(obj => {
            i++
          if(obj.nickname === payload.nickname && obj.password === payload.password){
            haveNickname = true
            
            this.profile = obj
            
            localId = Object.keys(data)[i-1]
            }
           })
        
        if(haveNickname){
          this.tokenAuth = localId
          localStorage.setItem('jwt-token', localId)
          this.tokenCheckRefresh = false
          const errorStore = useErrorStore()
          errorStore.setMessage(loginError('Вы вошли в аккаунт'))
        }else{
          throw new Error('Имя пользователя или пароль не верные')
        }
        }catch (e) { 
          console.log(e);
          
          const errorStore = useErrorStore()
          errorStore.setMessage(loginError(e.message))
        }
    },
    logout(){
      this.tokenAuth = ''
      localStorage.removeItem('jwt-token')
      
    }
  },
})
