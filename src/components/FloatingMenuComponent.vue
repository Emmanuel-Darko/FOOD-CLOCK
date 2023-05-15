<template>
    <div class="floating-menu-container flex-center">
        <ul class="flex-center" :class="{active:menuActive}">
            <li>Hello</li>
            <li>Back</li>
            <li @click="logoutHandler">Logout</li>
        </ul>

        <button @click.prevent="toggleActiveMenu" class="menu-btn flex-center" :class="{active:menuActive}">
            <span></span>
        </button>
        
    </div>
</template>

<script>
import router from '@/router'
export default {
    name: 'FoodClockFloatingMenuComponent',

    data() {
        return {
            menuActive:true
        };
    },

    mounted() {
        
    },

    methods: {
        toggleActiveMenu(){
            this.menuActive = !this.menuActive;
        },
        logoutHandler(){
            localStorage.clear('usertoken')
            router.push('/login')
        }
    },
};
</script>

<style lang="css" scoped>
.floating-menu-container{
    flex-direction: column;
    /* width:100px; */
    align-items: flex-end;
    /* background: #000; */

}
.floating-menu-container ul{
    list-style:  none;
    flex-direction: column;
    gap: 10px;
    /* background: #7a2929; */
    padding: 0;
    margin: 0;
    margin-bottom:10px ;
    transition: all .3s ease-in-out;
    overflow: hidden;
    animation: menu-animate-f 1s linear forwards;
}

.floating-menu-container ul li{
    display: block;
    width: 80px;
    color: #5DB075;
}

.floating-menu-container ul li:hover{
    color: #348a4c;
}
.floating-menu-container ul.active{
    animation: menu-animate 1s linear forwards;
    transition: all .3s ease-in-out;
}
@keyframes menu-animate {
    0% {height: 90px;}
    25% {height: 50px;}
    50%{height: 25px;}
    100%{height: 0px;}
}
@keyframes menu-animate-f {
    0%{height: 0px;}
    25%{height: 25px;}
    50%{height: 50px;}
    100% {height: 90px;}
}


.menu-btn{
    flex-direction: column;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    position:relative;
    overflow: hidden;
    cursor: pointer;
    padding: 0;
    transition: all .3s ease-in-out;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.616);
    z-index: 999;
}

.menu-btn span{
    width: 100%;
    height: 4px;
    
    background: transparent;
    transition: all .3s ease-in-out;
    
}

.menu-btn  span::before, .menu-btn span::after{
    content: '';
    position: absolute;
    background: #348a4c;
    width: 100%;
    height: 4px;
    left: 0;
    transition: all .3s ease-in-out;
} 
.menu-btn.active span::after{
    bottom: 0px;
    transform: rotate(0deg);
}
.menu-btn.active span::before{
    top: 0px;
    transform: rotate(0deg);
}

.menu-btn span::after{
    bottom: 8px;
    transform: rotate(40deg);
}
.menu-btn span::before{
    transform: rotate(-45deg);
    top: 8px;
}
.menu-btn.active span{
    background: #348a4c;
}
.menu-btn:hover{
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.616);
}

.menu-btn.active{


}

</style>