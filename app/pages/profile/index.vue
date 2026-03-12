<template>
  <ProfileEdit/>
  <CreatePhotoInfo/>
  <br>
  <AppFooter/>
</template>

<script setup>
definePageMeta({
    layout: 'main',
    middleware: 'auth'
})
</script>

<style>

</style>