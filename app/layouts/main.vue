<template>
   <app-message/> 
  <app-modal-about 
  v-if="isAbout"
  @close='isAbout = false'
  />
  <header class="header">
    <NuxtLink :to="{name: 'lenta'}"  class="logo"> F&F</NuxtLink>
    <nav class="nav">
        <ul class="nav-list">
            <li><NuxtLink class="nav-list-item" to="/profile">Profile</NuxtLink></li>
            <li><NuxtLink class="nav-list-item" to="/lenta">Lenta</NuxtLink></li>
            <li><NuxtLink class="nav-list-item" @click="isAbout = !isAbout">About</NuxtLink></li>
            <li><NuxtLink class="nav-list-item" to="/post">Add</NuxtLink></li> 
            <li><NuxtLink class="nav-list-item" @click="exit" to="/auth/login">Exit</NuxtLink></li>
        </ul>
    </nav>
    <nav class="menu">
        <a class="main-item" href="#" @click="dropMenu"><img src="@/assets/icons/menu.png" alt="menu" class="menu__img"></a>
          <ul class="sub-menu" id="sub-menu"> 
            <li><NuxtLink class="nav-list-item" to="/profile">Profile</NuxtLink></li> 
            <li><NuxtLink class="nav-list-item" to="/lenta">Lenta</NuxtLink></li> 
            <li><NuxtLink class="nav-list-item" @click="isAbout = !isAbout">About</NuxtLink></li> 
            <li><NuxtLink class="nav-list-item" to="/post">Add</NuxtLink></li> 
            <li><NuxtLink class="nav-list-item" @click="exit" to="/auth/login">Exit</NuxtLink></li>
          </ul> 
    </nav>
  </header>

  <slot/>
</template>

<script setup>
import { ref } from "vue";

const tokenStore = useTokenStore()
const isAbout = ref(false)

const dropMenu = () => {
  document.getElementById('sub-menu').classList.toggle("show");
}

const exit = () => tokenStore.logout()
</script>

<style lang="scss" scoped>
@media (max-width: 940px) { 
.menu{
  position: relative;
}
.sub-menu{
  display: none;
  padding: 20px;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.95);
  li{
    margin-bottom: 10px;
  }
}  
.show{
  display: block !important;
  top: 42px;
  z-index: 1000;
  left: 0;
  right: 0;
  margin: 0 15px;
}
  .nav{
    display: none;
  }
  .header{
    .menu{
    display: block !important;
    height: 23px;
    .menu__img{
    width: 25px;
    height: 25px;
    }
  }
  } 
}
.header{
    position: fixed;
    width: calc(100% - 30px);
    top: 0;
    z-index: 1000;
    box-sizing: border-box;
    padding: 8px 0px 8px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
    background-color: #fff;
    .menu{
        display: none;
    }
    .logo{
        font-size: 21px;
        font-weight: 600;
    }
    .nav-list{
        display: flex;
        gap: 50px;
        margin: 0px;
    }
}
</style>