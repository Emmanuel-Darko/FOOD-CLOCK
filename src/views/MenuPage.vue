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
        <img class="footer-img" src="/images/bg-img.svg" alt="dinning">

        <FloatingMenuComponentVue class="float-menu" />


    </div>
</template>

<script>
import FloatingMenuComponentVue from '../components/FloatingMenuComponent.vue';
export default {
    components: {
        FloatingMenuComponentVue
    },
    data() {
        return {
            notifications: 5,
            mealList: [
                {
                    meal: 'Tea & Egg Bread',
                    icon: '/images/icon_breakfast.svg',
                    mealType: "breakfast",

                }, {
                    meal: 'Plain rice and Beans stew',
                    icon: '/images/icon_lunch.svg',
                    mealType: "lunch"
                },
                {
                    meal: 'Fufu',
                    icon: '/images/icon_dinner.svg',
                    mealType: "dinner"
                },
            ]
        }
    }

}
</script>

<style lang="css" scoped></style>