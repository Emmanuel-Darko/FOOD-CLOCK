<template>

    <main class="admin-page flex-center">
            <img class="menu-logo" src="/images/menuLogo.svg" alt="menu logo">
            
            <div class="menu-list flex-center">
                <MenuInputCard/>
            </div>

        </main>
        
</template>

<script>
import MenuInputCard from '../components/MenuInputCard.vue';
    
export default {
  components: { MenuInputCard },
    name: 'FoodClockAdminPage',
 

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
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