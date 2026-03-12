<template>
  <header class="header">
    <NuxtLink :to="{name: 'auth-login'}" class="logo">F&F</NuxtLink>
  </header>

  <slot/>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header{
    position: fixed;
    width: calc(100% - 30px);
    top: 0;
    z-index: 1000;
    box-sizing: border-box;
    padding: 8px 0px 8px 0px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #000000;
    background-color: #fff;
    .logo{
        font-size: 23px;
        font-weight: 600;

    }
}
</style>