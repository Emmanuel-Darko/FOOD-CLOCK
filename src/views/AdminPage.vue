<template>

    <main class="admin-page flex-center">
            <img class="menu-logo" src="/images/menuLogo.svg" alt="menu logo">
            
            <div class="menu-list flex-center">
                <MenuInputCard :menu="menu" @submitMenu="submitMenu()"/>
            </div>

        </main>
        
</template>

<script>
import MenuInputCard from '../components/MenuInputCard.vue';
import axios from 'axios'
export default {
  components: { MenuInputCard },
    name: 'FoodClockAdminPage',
 

    data() {
        return {
            menu:[
                {day: 'monday', breakfast: '', lunch: '', dinner: ''},
                {day: 'tuesday', breakfast: '', lunch: '', dinner: ''},
                {day: 'wednesday', breakfast: '', lunch: '', dinner: ''},
                {day: 'thursday', breakfast: '', lunch: '', dinner: ''},
                {day: 'friday', breakfast: '', lunch: '', dinner: ''},
                {day: 'saturday', breakfast: '', lunch: '', dinner: ''},
                {day: 'sunday', breakfast: '', lunch: '', dinner: ''},
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        submitMenu(){
            const token = localStorage.getItem('usertoken')
            axios.put('http://192.168.1.53:3000/menu', this.menu, {headers: {token: token}})
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
};
</script>

<style lang="css" scoped>
.admin-page{
    flex-direction:column;
    width: 100%;
    gap: 2rem;
    height: 100%;
    padding-top:2rem ;
    position: relative;
    justify-content: center;  
}
.admin-page img{
    width: 158px;
    z-index: 2;
}


.menu-list{
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
}
</style>