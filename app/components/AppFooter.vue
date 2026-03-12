<template>
  <footer class="footer">
    <div class="footer-info">

        <div class="footer-icons">
            <img src="/assets/icons/leftLogo.svg" alt="left_logo">
            <img src="/assets/icons/rightLogo.svg" alt="right_logo">
        </div>

        <div class="footer-info-block">
        <div class="footer-info-block-contact">
            <h3>CONTACT</h3>
            <p>7 (980) 889-54-18</p>
            <div class="telegam">@schevelev_13q</div>
        </div>
        <div class="footer-info-block-social">
            <h3>SOCIAL</h3>
            <ul class="footer-info-block-contact__links">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LeetCode</a></li>
            </ul>
        </div>
        </div>
    </div>

        <div class="footer-union">
            <img src="@/assets/icons/unionLogo.svg"  alt="Frame&Form">
        </div>

  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer{
    border-top: 1px solid #000000;
    h3{
        margin: 0 0 10px 0;
    }
    .footer-info{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 80px;
        height: 280px;
        .footer-info-block{
            display: flex;
            justify-content: space-around;
            width: 50%;
            p{
                font-size: 13px;
            }
            .telegam{
                font-size: 13px;
            }
            ul{
                padding: 0;
                li{
                    margin-bottom: 5px;
                }
            }
        }
        .footer-icons{
            display: flex;
            justify-content: start;
            
            gap: 5px;
            img{
                width: 30px;
             }
        }  
    }
     
    .footer-union{
        text-align: center;
        img{
            max-width: 100%;
            height: auto;
        }
    }
}
@media (max-width: 599px) { 
  .footer{
    h3{
        font-size: 16px;
    }
    .footer-info{
        justify-content: start;
        gap: 30px;
        .footer-info-block{
            gap: 30px;
            ul{
                li{
                    a{
                        font-size: 15px;
                    }
                }
            }
        }
        .footer-icons{
            justify-content: start;
        }  
    }
}
}
</style>