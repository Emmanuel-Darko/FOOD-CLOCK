<template>
    <div class="menu-page flex-center">
        <header class="menu-header flex-center">
            <span>
                <img src="/images/notifications.svg" alt="notification">
                <span class="notification">{{ notifications }}</span>
            </span>
        </header>

        <UpdateMealComponent v-if="updateActive" :mealType="updateMeal.mealType" :icon="updateMeal.icon" :toggleEditePage="toggleEditMealPAge"/>

        <main class="flex-center" v-if="!updateActive">
            <img class="menu-logo" src="/images/menuLogo.svg" alt="menu logo">
            
            <div class="menu-list flex-center">
                <div v-for="(item ,index) in mealList" :key="index" class="menu-item flex-center">
                <div class="menu-item-header flex-center"> 
                    <img :src="item.icon" :alt="item.mealType">
                    <h4>{{ item.mealType }}</h4>
                </div>
                    {{ item.meal }}
                    <img v-on:click="()=>handleEditMeal(item)"  class="edit-meal" src="/images/🦆 icon _pencil_.svg"  alt="edit meal">
                </div>
            </div>

        </main>

            <img class="footer-img" src="/images/bg-img.svg" alt="dinning"/>
        
            <FloatingMenuComponentVue class="float-menu"/>
        
       
    </div>
</template>

<script>
import FloatingMenuComponentVue from '../components/FloatingMenuComponent.vue';
import UpdateMealComponent from '../components/UpdateMealComponent.vue';
    export default {
        components:{
            FloatingMenuComponentVue,
            UpdateMealComponent
        },
        data(){
            return{
                notifications:5,
                updateMeal:{
                    icon:"",
                    mealType:"",
                   },
                updateActive:false,
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
        },
        methods:{
            handleEditMeal(item){
                this.updateMeal.icon=item.icon
                this.updateMeal.mealType=item.mealType
                this.toggleEditMealPAge()
                
            },
            toggleEditMealPAge(){
                this.updateActive=!this.updateActive
            }
        }
        
    }
</script>

<style lang="css" scoped>
.edit-meal{
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
}
</style>