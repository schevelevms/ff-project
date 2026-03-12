export default defineNuxtRouteMiddleware((to, from) => {
    const storeToken = useTokenStore()
    const isAuth = storeToken.isAuth

    if(!isAuth){
    return navigateTo('/')
    }

})
