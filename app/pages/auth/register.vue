<template>
    <AppMessage/>
<form class="form" @submit.prevent="submitRegister">  
    <h1 class="form-title" :style="{color: ePassword || eEmail ? 'rgb(219, 0, 0)' : 'black' }">Hello my new friend</h1>
    <img class="form-avatar" src="/assets/avatar.png" alt="avatar">
    <div class="errorMessage" v-if="error">{{error}}</div>
    <div class="form-input">
    <label for="nickname" :style="{color: eEmail ? 'rgb(219, 0, 0)' : 'black' }">nickname</label>  
    <input type="text" id="nickname" v-model="nickname" @blur="eBlur" :class='{invalid: eEmail}'> 
    <small class="error" v-if="eEmail">{{eEmail}}</small> 
    </div>
    <div class="form-input">
    <label for="password" :style="{color: ePassword ? 'rgb(219, 0, 0)' : 'black' }">password</label>  
    <input type="password" id="password" v-model="password" @blur="pBlur" :class='{invalid: ePassword}'> 
    <small class="error" v-if="ePassword">{{ePassword}}</small> 
    </div>
    <button type="submit" class="form-btn" :disabled='isSubmitting'>REGISTR</button>  
</form>  

 <div class="link">Log in to your account <NuxtLink :to="{name: 'auth-login'}" style="font-size: 17px"><b> Login up</b> </NuxtLink></div>
</template>

<script setup>
import {useLoginForm}  from '@/use/useLoginForm.js' 
import { computed } from 'vue';

const router = useRouter();
const tokenStore = useTokenStore()
const error = tokenStore.errorRegister
definePageMeta({
    layout: 'auth',
})
const { nickname, password, eEmail, ePassword,eBlur, pBlur, submitRegister, isSubmitting} = useLoginForm()
</script>

<style lang="scss" scoped>
@use "~/pages/auth/auth.scss";
</style>