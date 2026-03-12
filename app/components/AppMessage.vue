<template>
<div v-if="message" :class="['alert', message.type, message.value.type]">
    <h1 style="font-size: 1.4rem">{{title || message.value}}</h1>
  <div class="alert__message" v-if="message">{{message.value.value}}</div>
  <span class="alert__close" @click="close">&times;</span>
  </div>
</template>

<script setup>
import { computed } from "vue"

        const errorStore = useErrorStore()

        const TITLE_COMPLETE = {
            primary: 'Успешно!',
            danger: 'Ошибка!',
            warning: 'Внимание!' 
        }
        const message = computed(() => errorStore.error)
        
        const title = computed(() => message.value ? TITLE_COMPLETE[message.value.value.type] : null )
        const close = () => {
            errorStore.error = null
        }
</script>

<style scoped>
h1{
        font-family: "LINE Seed JP", sans-serif;
        font-weight: 100;
        font-style: normal;
    }
.alert{
background-color: #fff;
width: 250px;
padding: 20px;
top: 0;
left: 0;
right: 0;
margin: 0 auto;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
border-radius: 0 0 10px 10px;
position: fixed;
z-index: 50000000;
}
.alert h1{
    padding: 0;
}
.alert__message{
    font-size: 1rem;
    padding-top: 1rem;
    font-weight: 500;
}
.alert.danger{
    border-left: 6px solid red;
}
.alert.warning{
    border-left: 6px solid orange;
}
.alert.primary{
    border-left: 6px solid rgb(0, 165, 0);
}
.alert__close{
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>