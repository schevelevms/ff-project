<template>
  <app-message/>
  <LentaIntro/>
  <CreatePhotoInfo/>
  <LentaPhotoContentList/>
  <AppIntroFooter/>
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