<template>
    <div class="menu-input-card flex-center">
            <div v-for="(day,index) in weekMenuInputList" :key="index" class="dropdown-menu flex-center">

                <div  v-on:click="()=>toggleDropDown(index)" class="flex-center menu-day" :class="{active:day.open}">
                    {{ day.name }} <img src="/images/arrow.svg" alt=""> 
                </div>



                <MenuInputField  class="input-fields" :class="{active:day.open}" :buttonText="day.btn"/>



            </div>
    </div>
</template>

<script>
import MenuInputField from './MenuInputField.vue';
export default {
  components: { MenuInputField },
    name: 'FoodClockMenuInputCard',

    data() {
        return {
            dropdown:false,
            weekMenuInputList:[
                {name:"Monday",btn:"Save",open:false},
                {name:"Tuesday", btn:"Save",open:false},
                {name:"Wednesday", btn:"Save",open:false},
                {name:"Thursday",btn:"Save",open:false},
                {name:"Friday", btn: "Save",open:false},
                {name:"Saturday" ,btn:"Save",open:false},
                {name:"Sunday", btn:"Submit",open:false}
            ]

            
        };
    },

    mounted() {
        
        
    },
    methods: {
        toggleDropDown(index){
            this.weekMenuInputList.map((item,i)=>(i===index?item.open=!item.open:item.open=false))
        }
    },
};
</script>

<style lang="css" scoped>

.menu-input-card{
    width:100%;
    padding: 2px 10px;
    /* background: #602222; */
    justify-content: center;
    font-family: 'Inter';
    font-style: normal;
    flex-direction: column;
}
.dropdown-menu{
font-weight: 400;
font-size: 15px;
line-height: 18px;
flex-direction: column;
justify-content: space-around;
text-transform:uppercase;
color: #454242;
/* background: #000; */
width: 300px;
}

.dropdown-menu .input-fields{
    height: 0px;
    overflow: hidden;
 
}

.dropdown-menu .input-fields.active{
    height: 307px;
    transition: height .3s ease-in-out;
}
.menu-day{
    padding: 19px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    width:100% ;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 19px;
}

.menu-day>img{
    transform: rotate(0deg);
    transition: all .3s ease-in-out;
}
.menu-day.active >img{
    transform: rotate(180deg);
}



</style>