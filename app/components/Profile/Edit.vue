<template>
<section class="edit-content">
  <div class="photo-avatar">
    <img src="@/assets/avatar.png" alt="avatar" class="avatar">
  </div>
  
  <form  @click.prevent="" class="edit-content-form">
    <!-- <label for="file" class="file-photo">upload a profile picture</label>
    <input type="file" id="file" @change="fileSelected" hidden/> -->
    <div class="form__nickname">
    <label for="nickname">NICKNAME:</label>
    <input type="text" name="nickname" id="nickname" v-model="nickname">
    </div>
    <div class="submit">
        <button @click.prevent="" class="btn-edit" style=" cursor: not-allowed;">SAVE</button>
    </div>
  </form>
</section>
</template>

<script setup>
import { ref } from "vue";
const tokenStore = useTokenStore()
const authProfile =  await tokenStore.getAuth()

const nickname = ref(authProfile.nickname);
let photo = ref('')
    

const formData = new FormData()
</script>

<style lang="scss" scoped>
.edit-content{
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: 80px 0;
    border-bottom: 1px solid #000000;
    .photo-avatar{
        width: 400px;
        height: 400px;
        .avatar{
        width: 400px;
        height: 400px;
        object-fit: cover ;
        border-radius: 50%;
        border: 3px solid #767676;


        }
    }
    .edit-content-form{
        padding-top: 50px;
        display: flex;
        max-width: 350px;
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
            .btn-edit{
                width: 100%;
                font-size: 20px;
                padding: 6px;
                background-color: #767676;
                border-radius: 8px;
                color: #fff;
                margin: 40px 0;
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
@media (max-width: 940px) { 
.edit-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    padding: 80px 0;
    border-bottom: 1px solid #000000;
    .photo-avatar{
        width: 200px;
        height: 200px;
        .avatar{
        width: 200px;
        height: 200px;
        object-fit: cover ;
        border-radius: 50%;
        border: 3px solid #767676;
        }
    }
    .edit-content-form{
        padding-top: 20px;
        max-width: 250px;
   
    }
    
}
}
</style>