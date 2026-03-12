<template>
  <section class="new-photo">
    <h1 class="new-photo__title">create new post</h1>
  <div class="post-content">
  
  <form action="" class="post-content-form" @submit.prevent="postsStore.post(formPost)">

    <input type="text" id="file" class="photo-input" v-model="img"/>

    <div class="photo-avatar">
    <img :src="img" :style="{visibility: !img ? 'hidden' : ''}" class="avatar">
    </div>
    <div class="form__nickname">
    <label for="description">DESCRIPTION:</label>
    <input type="text" name="description" id="description" v-model="description">
    </div>


    <div class="submit">
        <button class="btn-post">POST</button>
    </div>

  </form>

  </div>
  </section>
</template>

<script  setup>
definePageMeta({
    layout: 'main',
    middleware: 'auth'
})
const postsStore = usePostsStore()
const tokenStore = useTokenStore()
const description = ref('')
const img = ref('')
const date = new Date().toLocaleDateString()


const formPost = reactive({
  description,
  img,
  nickname: tokenStore.profile.nickname,
  date
})       

    
</script>

<style lang="scss" scoped>
.new-photo{
  .new-photo__title{
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    margin: 20px 0 0 0;
  }
  .post-content{
    display: flex;
    justify-content: center;
    gap: 60px;
    .photo-input{
      border: none;
      border-bottom: 2px solid grey;
      font-size: 35px;
      &:focus{
        outline: none;
     }
    }
    .photo-avatar{
      width: 400px;
        height: 400px;
        margin: 20px auto 40px;
        border-radius: 50%;
        border: 3px solid #767676;
        .avatar{
        width: 400px;
        height: 400px;
        object-fit: cover ;
        border-radius: 50%;
        }
    }
    .post-content-form{
        padding-top: 20px;
        display: flex;
        max-width: 500px;
        flex-direction: column;
        justify-content: space-between;
        .file-photo{
            display: inline-block;
            padding: 6px 12px;
            cursor: pointer;
            
            border-radius: 4px;
            background-color: #ececec;
            margin-bottom: 10px;
        }
        .submit{
            .btn-post{
                width: 100%;
                font-size: 20px;
                padding: 6px;
                background-color: #767676;
                border-radius: 8px;
                color: #fff;
                margin: 40px 0 20px 0;
                transition: 0.5s ease;
                &:hover{
                    background-color: #4b4b4b;
                }
            }
        }
        .form__nickname{
                display: flex;
                flex-direction: column;
                label{
                    font-size: 35px;
                    font-weight: 100;
                    padding-bottom: 10px;
                }
                input{
                    border: none;
                    border-bottom: 2px solid grey;
                    font-size: 35px;
                    &:focus{
                        outline: none;
                    }
                }
            }
    }
    
}
}
@media (max-width: 940px) { 
  .new-photo{
    .new-photo__title{
      font-size: 40px;
    }
    .post-content{
    .photo-avatar{
        width: 200px;
        height: 200px;
        .avatar{
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        }
    }
    .post-content-form{
        padding-top: 20px;
        max-width: 250px;
      .form__nickname{
        input{
          font-size: 15px;
        }
        label{
          font-size: 25px;
        }
      }
    }
    
}
  }

}
</style>