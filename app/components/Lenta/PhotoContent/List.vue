<template>

  <main class="photo-content">
    <div class="card" v-for="(post, index) in posts[0]" :key="post.description" >
      <div class="user-name">@{{ post.nickname}} </div>
      <div class="img"><img :src="post.img" class="img" ></div>
      <div class="description">
          <div class="info">
          <div class="title">{{post.description}}</div>
          <div class="data">{{post.date}}</div>
          </div>
          <div class="delete" @click="postsStore.delete(index)" v-if="post.nickname == profileNickname"><img src="@/assets/icons/delete.png" class="delete" alt="delete"></div>
      </div>
    </div>
  </main>
   
</template>

<script setup>
const postsStore = usePostsStore()
const tokenStore = useTokenStore()

await postsStore.getPosts()
const posts = computed(() => postsStore.posts) 
const profileNickname = computed(() => tokenStore.profile.nickname) 
</script>

<style lang="scss" scoped>
    .photo-content{
        padding: 100px;
        max-width: 1280px;
        justify-content: center;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 90px;
    }

    .card{
        width: 360px;
        border-radius: 25px;
        box-shadow: 0px 0px 15px 5px #e6e6e6;
        .user-name{
            padding: 12px 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .img{
            background-color: rgb(221, 221, 221);
            object-fit: cover ;
            width: 360px;
            height: 360px;
        }
        .description{
          display: flex;
          justify-content: space-between;
          align-items: center;
            height: 50px;
            padding: 20px 20px 15px 20px;
            .delete{
              width: 35px;
              height: 35px;
              cursor: pointer;
            }
            .data{
                font-size: 14px;
                margin-top: 5px;
                color: #767676;
            }
        }
    }
    @media (max-width: 599px) { 
  .card{
        width: 320px;
        .img{
          width: 320px;
            height: 320px;
        }
  }
}
</style>