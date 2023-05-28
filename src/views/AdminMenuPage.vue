<template>
    <div class="menu-page flex-center">
        <header class="menu-header flex-center">
            <span>
                <img src="/images/notifications.svg" alt="notification">
                <span class="notification">{{ notifications }}</span>
            </span>
        </header>
        <UpdateMealComponent 
            v-if="updateActive" 
            :category_name="updateMeal.category_name" 
            :icon="updateMeal.icon" 
            :toggleEditePage="toggleEditMealPAge"
            :updateOne="updateOne"
        />

        <main class="flex-center" v-if="!updateActive">
            <img class="menu-logo" src="/images/menuLogo.svg" alt="menu logo">
            
            <div class="menu-list flex-center">
                <div v-for="(item ,index) in mealList" :key="index" class="menu-item flex-center">
                <div class="menu-item-header flex-center"> 
                    <img :src="icons[index]" :alt="item.category_name">
                    <h4>{{ item.category_name }}</h4>
                </div>
                    {{ item.item_name }}
                    <img v-on:click="()=>handleEditMeal(item, index)"  class="edit-meal" src="/images/🦆 icon _pencil_.svg"  alt="edit meal">
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
    import axios from 'axios'
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
                    category_name:"",
                    category_id:"",
                    menu_day_id:""
                   },
                updateActive:false,
                mealList: [],
                icons:[
                    "/images/icon_breakfast.svg",
                    "/images/icon_lunch.svg",
                    "/images/icon_dinner.svg",
                ]

            }
        },
        beforeMount(){
            this.getMenu()
        },
        methods:{
            handleEditMeal(item, index){
                this.updateMeal.icon = this.icons[index]
                this.updateMeal.category_name = item.category_name
                this.updateMeal.menu_day_id = this.mealList[index].menu_day_id
                this.updateMeal.category_id = this.mealList[index].category_id
                this.toggleEditMealPAge()
                
            },
            toggleEditMealPAge(){
                this.updateActive=!this.updateActive
            },
            updateOne(menuInput){
                let updateMenuRequest = {
                    menu_day_id: this.updateMeal.menu_day_id,
                    category_id: this.updateMeal.category_id,
                    item_name: menuInput,
                }
                console.log(updateMenuRequest);
                const token = localStorage.getItem('usertoken')
                axios.put('http://192.168.1.53:3000/menu/meal', updateMenuRequest, {headers: {token}})
                .then(res => {
                    this.getMenu()
                    this.toggleEditMealPAge()
                })
                .catch(err => {
                    console.log(err);
                })
            },
            getMenu(){
                const token = localStorage.getItem('usertoken')
                axios.get('http://192.168.1.53:3000/menu', {headers: {token}})
                .then(res => {
                    console.log(res.data);
                    this.mealList = res.data
                })
                .catch(err => {
                    console.log(err);
                })
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