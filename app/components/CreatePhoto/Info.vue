<template>
  <section >
    <div class="create-photo-info">
    <p class="title-end">Post a new photo today!</p>
    <div class="block">
    <button class="btn-photo" @click="router.push({name: 'post'})">ADD + </button>
    <p class="title-start">add description to all photos.</p>
    </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'

const router = useRouter();
</script>

<style lang="scss" scoped>
section{
  border-bottom: 1px solid #000000;
}
.create-photo-info{
  max-width: 830px;
  margin: 0 auto;
}
.block{
  max-width: 500px;
  right: 0;
}
.btn-photo{
  background-color: #767676;
  color: #fff;
  padding: 6px 12px;
  font-size: 35px;
  display: block;
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  text-align: end;
  font-style: italic;
  transition: 0.5s ease;
  &:hover{
    background-color: #4b4b4b;
  }
}
  .title-end{
    font-size: 40px;
    float: inherit;
    margin-bottom: 5px;
    text-align: end;
    padding-right: 30px;
    font-weight: 100;
    font-style: italic;
  }
  .title-start{
    font-size: 20px;
    margin: 0px 0 50px 0;
    text-align: end;
    padding-left: 30px;
    font-weight: 500;
    font-style: italic;
  }
  .create{
    text-align: center;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover{
      background-color: #e6e6e6;
    }
    .create-photo{
    width: 70px;
  }
  }
 @media (max-width: 599px) { 
.title-end{
  font-size: 28px;
  padding-right: 0;
  text-align: start;
  margin-bottom: 10px;
}
} 
</style>