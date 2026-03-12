
import { defineStore } from 'pinia'
export const usePostsStore = defineStore('postsStore', {
  state(){
    return{
      posts: reactive([])
    } 
    },
  getters: {
    
  },
  actions: {
  async post(values){
    try {
    const router = useRouter()
      const id = randomId()
  
      const {data} = await $fetch('https://ff-project-nuxt-default-rtdb.firebaseio.com/posts.json', {
      method: 'POST',
      body: values,
    })
    router.push({name: 'lenta'})
            const errorStore = useErrorStore()
            errorStore.setMessage(loginError('Пост добавлен успешно!'))
    } catch (error) {
      console.log(error);
      
    }
   
  },
  async getPosts(){
      const url = `https://ff-project-nuxt-default-rtdb.firebaseio.com/posts.json`
      const data = await $fetch(url, {
        method: 'GET'
       })
       
      this.posts = [data]
       
       return await data
    },
  async delete(id){
    try{
        await $fetch(`https://ff-project-nuxt-default-rtdb.firebaseio.com/posts/${id}.json`,{method: 'DELETE'})   
        this.posts = this.posts.map(post => Object.fromEntries(Object.entries(post).filter(key => key[0] !== id)))
            const errorStore = useErrorStore()
            errorStore.setMessage(loginError('Пост удален успешно!'))
    }catch(e){
        console.log(e);
        
    }
      
  }


}
})
