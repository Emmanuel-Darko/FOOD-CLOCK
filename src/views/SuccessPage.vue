<template>
    <div class="flex-center update-success">

        <header class="flex-center">
            <router-link to="/adminmenu">
                <button>Done</button>
            </router-link>

        </header>
        <main class="flex-center">
            <div class="success-circle flex-center">

                <img src="/images/successchecked.svg" alt="update success">
            </div>
            <h1>MENU UPDATED</h1>
        </main>
        
    </div>
</template>

<script>
export default {
    name: 'FoodClockUpdateSuccessComponents',

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
.update-success{
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding-top: 67px;
}
.update-success header{
width: 100%;
justify-content: flex-end;
padding:0px 20px;
}

.update-success button{
    border: none;
    font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #454242;
background: transparent;
}

.update-success button:hover{
background: #348a4c;
}

.update-success main{
    flex: 1;
    width: 100%;
    justify-content: center;
    flex-direction: column;
}

.update-success main h1{
    /* font-family: 'Sarabun'; */
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 30px;
    text-align: center;
    color: #43453A;
}

.success-circle{
    height: 160px;
    width: 160px;
    border-radius:50% ;
    border: 3px solid rgba(104, 84, 84, 0.2);
    box-shadow: 0px 4px 20px rgba(101, 101, 101, 0.15);
    object-fit: cover;
    justify-content: center;
}

</style>