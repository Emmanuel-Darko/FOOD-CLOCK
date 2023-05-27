<template>
    <div class="admin-input-list flex-center">
        <input type="text" placeholder="Breakfast" v-model="localMenu.breakfast">
        <input type="text" placeholder="Lunch" v-model="localMenu.lunch">
        <input type="text" placeholder="Dinner" v-model="localMenu.dinner">
        <button @click="() => saveMenu(buttonText)" class="menu-save-btn btn">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    name: 'FoodClockMenuInputField',
    
    data() {
        return {
            localMenu: {
                breakfast: '',
                lunch: '',
                dinner: ''
            }
        };
    },
    props:[
       'buttonText',
       'breakfast',
       'lunch',
       'dinner',
       'menu'
    ],

    mounted() {
        
    },

    methods: {
        saveMenu(buttonText){
            this.menu.breakfast = this.localMenu.breakfast
            this.menu.lunch = this.localMenu.lunch
            this.menu.dinner = this.localMenu.dinner
            if(buttonText == 'Submit')
                this.submit()
        },
        submit(){
            this.$emit('submitMenu')
        }
    },
};
</script>

<style lang="css" scoped>
.admin-input-list{
    flex-direction: column;
    row-gap:22px;
}

.admin-input-list input{
    height: 50px;
    width: 256px;
    border:none;
    outline: #D5DBC9;
    padding-left: 16px;
    border: 0.5px solid #5DB075;
    border-radius: 8px;
    background: linear-gradient(145deg, #f3f9e0, #ccd2bc);
    box-shadow:  2px 2px 5px #c3c8b4,
             -2px -2px 5px #ffffee;
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