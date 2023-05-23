<template>
    <div class="update-meal flex-center">

        <div class="update-card flex-center">
            <div class="meal-info">
                <img :src="icon" alt="meal icon">
                <p>{{ mealType }}</p>
            </div>
            <input  type="text" placeholder="enter meal update">
            <button v-on:click="handleUpdateMeal" class="update-meal-btn">Save</button>
        </div>
        
    </div>
</template>

<script>
// import router from '@/router'/
export default {
    name: 'FoodClockUpdateMealComponent',

    data() {
        return {
            
        };
    },
    props:[
        'mealType',
        'icon',
        'toggleEditePage'
    ],
    mounted() {
        
    },

    methods: {
        handleUpdateMeal(){
            this.toggleEditePage()

            // router.path('/success')
        }
        
    },
};
</script>

<style lang="css" scoped>
.update-meal{
    height: 341px;
    width: 100%;
    justify-content: center;
}

.update-card{
width: 256px;
height: 187px;
background: #AABB85;
box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.06);
border-radius: 6px;
flex-direction: column;
justify-content: space-evenly;
/* row-gap: 14px; */
}

.meal-info img{
    width: 43px;
    height: 38px;
}
.meal-info p{
    margin: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #454242;
}
.update-card input{
    background: #D5DBC9;
    border-radius: 8px;
    border: none;
    width: 80%;
    outline: #AABB85;
    padding: 14px 0px;
    padding-left: 14px;
    /* font-family: 'Sarabun'; */
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    /* identical to box height */


    /* color: rgba(120, 121, 115, 0.74); */
    }

    .update-card input::placeholder{
        font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    /* identical to box height */


    color: rgba(120, 121, 115, 0.74);
    }


.update-meal-btn{
    width: 93px;
    height: 45px;
    background: #5DB075;
    border-radius: 100px;
    border: none;
    transition: all .3s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E0DDDD;
}
.update-meal-btn:hover{
    background: #348a4c;
}

</style>