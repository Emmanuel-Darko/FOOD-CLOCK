<template>
    <fieldset class="input-field flex-center" v-on:focusout="clearActive" :class="{active: inputActive}">
        <Transition appear-active-class="fade">
            <legend v-show="inputActive" class="legendText" :class="{active: inputActive}">
                {{placeholder}}
            </legend>
        </Transition>
        <input  :type="inputType" :placeholder="inputActive? null : placeholder" v-on:focus="toggleInputActive(index)" v-model="value" v-on:change="() => handleInput({name:inputName, data:value})"/>
        <span v-on:click="toggleShowPassword" :class="showBtn">show</span>
   </fieldset>
</template>

<script>
export default {
    name: 'FoodClockInputField',

    data(){
        return {
            value: ''
        };
    },

    mounted() {
        
    },
    props:[
        "index",
        "inputActive",
        "inputType",
        "placeholder",
        "inputValue",
        "inputName",
        "showBtn",
       "toggleShowPassword",
       "toggleInputActive",
       "clearActive",
       "handleInput"
    ],

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

.input-field{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.2px;
    color: #A6AAB4;
    border: 0.5px solid #A6AAB4;
    border-radius: 6px;
    width: 100%;
    position: relative;
    width: 343px;
    padding:16px 20px;
}
.input-field.active{
    border: 0.5px solid #5DB075;
}
.legendText.active{
    color: #348a4c;
}
.v-enter-active,
.v-leave-active {
  transition:font-size 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  font-size: 0px;
}
.input-field input{
    border: none;
    background-color: var(--background-color);
    outline:none;
    flex:1;
    width:100%;
    height: 24px;
 /* background: #000; */
}
.input-field .noshow{
    display: none;
}

.input-field .show{
    cursor: pointer;
    z-index: 99;
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #5DB075;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(-50%);
}
.input-field .show:hover{
    color: #348a4c;
}

</style>