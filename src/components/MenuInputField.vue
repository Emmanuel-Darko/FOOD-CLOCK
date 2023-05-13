<template>
    <div class="admin-input-list flex-center">
        <input type="text" placeholder="Breakfast">
        <input type="text" placeholder="Lunch">
        <input type="text" placeholder="Dinner">
        <button class="menu-save-btn">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'FoodClockMenuInputField',

    data() {
        return {
            
        };
    },
    props:[
       'buttonText'
    ],

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.admin-input-list{
    flex-direction: column;
    row-gap:22px;
}

.admin-input-list input{
    background: #D5DBC9;
border-radius: 8px;
height: 50px;
width: 256px;
border:none;
outline: #D5DBC9;
padding-left: 16px;
}
.admin-input-list input::placeholder{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: rgba(120, 121, 115, 0.74);
}

.menu-save-btn{
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

.menu-save-btn:hover{
    background: #348a4c;
}
</style>