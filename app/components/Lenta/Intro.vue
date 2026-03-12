<template>
<section class="intro">
 <div class="intro-icons">
    <img src="/assets/icons/leftLogo.svg" alt="left_logo">
    <img src="/assets/icons/rightLogo.svg" alt="right_logo">
 </div>

 <div class="intro-description">
   CREATE & SHARE CONTENT FOR US WITH FRAME & FORM <br>RIGHT NOW
 </div>


 </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.intro{
    border-bottom: 1px solid #000000;
    background-image: url('@/assets/flower.png');
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    .intro-icons{
      display: flex;
      gap: 8px;
      padding: 19px 0;
    }
    .intro-description{
      height: 370px;
      max-width: 1000px;
      flex-wrap: wrap;
      padding-top: 10px;
      font-size: 60px;
      font-weight: 100;
    }
}
@media (max-width: 599px) { 
  .intro{
    .intro-icons{
      img{
        width: 60px;
      }
    }
    .intro-description{
      font-size: 40px;
    }
}
  
  }
</style>