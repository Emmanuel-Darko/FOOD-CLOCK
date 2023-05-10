<template>
    <div class="home-menu-page flex-center">
        <header class="home-menu-header flex-center">
            <span>
                <img src="/images/notifications.svg" alt="notification">
                <span class="notification">{{ notifications }}</span>
            </span>
        </header>
        <main class="flex-center">
            <img class="menu-logo" src="/images/menuLogo.svg" alt="menu logo">
            
            <div class="menu-list flex-center">
                <div v-for="(item ,index) in mealList" :key="index" class="menu-item flex-center">
                <div class="menu-item-header flex-center"> 
                    <img :src="item.icon" :alt="item.mealType">
                    <h4>{{ item.mealType }}</h4>
                </div>
                    {{ item.meal }}
                </div>
            </div>

        </main>
        <img class="footer-img" src="/images/bg-img.svg" alt="dinning">
        
            <FloatingMenuComponentVue class="float-menu"/>
        
       
    </div>
</template>

<script>
import FloatingMenuComponentVue from '../components/FloatingMenuComponent.vue';
    export default {
        components:{
            FloatingMenuComponentVue
        },
        data(){
            return{
                notifications:5,
                mealList:[
                    {
                    meal:'Tea & bread',
                    icon:'/images/icon_breakfast.svg',
                    mealType:"breakfast",
        
                },  {
                    meal:'Rice and Beans stew',
                    icon:'/images/icon_lunch.svg',
                    mealType:"lunch"
                },
                {
                    meal:'Fufu',
                    icon:'/images/icon_dinner.svg',
                    mealType:"dinner"
                },
            ]
            }
        }
        
    }
</script>

<style lang="css" scoped>
.home-menu-page{
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    position:relative;
}
.home-menu-header{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    justify-content: flex-end;
    padding:0px 36px;
    width:100%;
    /* background: #000; */
}
.home-menu-header >span{
    position: relative;
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius:50% ;
    transition: all .3s ease-in-out;
}

.home-menu-header >span img{
    width: 100%;
    height: 100%;
}
.notification{
    display: block;
    position: absolute;
    top: 40%;
    left: 70%;
    transform: translate(-50%,-50%);
    font-size: 10px;
    color: #f00a0a;
    /* background: #fff; */
    border-radius:100%;
    padding: 0 2px;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}
.home-menu-header>span:hover{
    box-shadow: 2px 2px 4px rgba(101, 101, 101, 0.736);
   
}

.home-menu-page main{
    flex-direction: column;
}

.menu-logo{
    width: 135px;
    /* margin-bottom:px; */
}

.menu-list{
    flex-direction: column;
    justify-content: center;
    row-gap: 13px;

}

.menu-item{
    width: 256px;
    height: 105px;
    background: #AABB85;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
}
.menu-item h4{
    margin: 0;
    padding: 0;
    text-align: center;
    width:100%;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #3B3737;
}
.menu-item-header{
    flex-direction: column;
}

.footer-img{
    height: 150px;;
    
}

.float-menu{
    position: absolute;
    bottom: 10px;
    right: 10px;
}


</style>