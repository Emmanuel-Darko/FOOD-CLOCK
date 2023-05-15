<template>
    <div class="menu-page flex-center">

        <header class="menu-header flex-center">
            <span>
                <img src="/images/notifications.svg" alt="notification">
                <span class="notification">{{ notifications }}</span>
            </span>
        </header>
        <main class="flex-center">
            <img class="menu-logo" src="/images/menuLogo.svg" alt="menu logo">
                <h2 class="menu-day">{{menuDay}} MENU</h2>
            <div class="menu-list flex-center">
                <div v-for="(item, index) in mealList" :key="index" class="menu-item flex-center">
                    <div class="menu-item-header flex-center">
                        <img :src="item.icon" :alt="item.mealType">
                        <h4>{{ item.mealType }}</h4>
                    </div>
                    {{ item.meal }}
                </div>
            </div>

        </main>
        <!-- <img class="footer-img" src="/images/bg-img.svg" alt="dinning"> -->

        <FloatingMenuComponentVue class="float-menu" />
        <!-- <ActionButtonContainer class="float-menu" /> -->


    </div>
</template>

<script>
import FloatingMenuComponentVue from '../components/FloatingMenuComponent.vue';
import ActionButtonContainer from '../components/ActionButtonContainer.vue';
import router from '@/router'
import axios from 'axios'
export default {
    components: {
        FloatingMenuComponentVue,
        ActionButtonContainer
    },
    data() {
        return {
            notifications: 5,
            menuDay:'',
            mealList: [
                {
                    meal: '',
                    icon: '/images/icon_breakfast.svg',
                    mealType: "breakfast",

                }, {
                    meal: '',
                    icon: '/images/icon_lunch.svg',
                    mealType: "lunch"
                },
                {
                    meal: '',
                    icon: '/images/icon_dinner.svg',
                    mealType: "dinner"
                },
            ]
        }
    },
    beforeMount() {
        const token = localStorage.getItem('usertoken')
        if(!token){
            router.push('/login')
        }
    },
    mounted() {
        const token = localStorage.getItem('usertoken')
        this.getMenu(token)
    },
    methods: {
        getMenu(token){
            axios.get('http://192.168.1.53:3000/menu', {headers: {token}})
            .then(res => {
              const  results=res.data
              console.log(results)
                this.mealList[0].meal=results[0].item_name
                this.mealList[1].meal=results[1].item_name
                this.mealList[2].meal=results[2].item_name
                this.menuDay=results[0].menu_day.toUpperCase()

                // this.mealList.map((list, index) => (
                //   console.log(list[index].meal )
                // ))
            })
            .catch(err => {
                console.log(err)

            })
        }
    }

}
</script>

<style lang="css" scoped>
.menu-day{
    font-family: "Sono";
    color: #348a4c;
}
</style>