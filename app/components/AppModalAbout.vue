<template>
  <div class="modal--back-drop" @click="$emit('close')"></div>
  <div class="modal">
    <h1 class="title">About Us</h1>
    <div class="photo-avatar">
    <img src="@/assets/smile.png" alt="avatar" class="avatar">
  </div>
    <p class="description">
      In this app, you can share photos with all users and view their photos in the main feed!
       If you go to the profile section, you can change your profile picture and update your nickname.
    </p>
    
  </div>
</template>

<script lang="ts" >
export default {
    emits:['close'],
}
</script>

<style lang="scss" scoped>
.photo-avatar{
  display: flex;
  justify-content: center;
        .avatar{
        width: 150px;
        }
    }
.modal{
   position: fixed;
    top: 10%;
    max-width: 600px;
    padding: 1rem 1rem 0 1rem;
    background-color: #fff;
    z-index: 100000000;
    left: 50%;
    border-radius: 10px;
    transform: translateX(-50%);
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    .title{
      text-align: center;
    }
    .description{
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    }
}
.modal--back-drop{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
}
</style>

