<template>
    <fieldset class="input-field" v-on:focusout="clearActive">
        <legend>
            {{ inputActive?placeholder: null }}
        </legend>
        <input  :type="inputType" :placeholder="inputActive? null : placeholder" v-on:focus="toggleInputActive(index)"/>
    
            <span v-on:click="toggleShowPassword" :class="showBtn">show</span>
   </fieldset>
</template>

<script>
export default {
    name: 'FoodClockInputField',

    data() {
        return {
                        
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
        "showBtn",
       "toggleShowPassword",
       "toggleInputActive",
       "clearActive"
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
    /* background: #000; */
    position: relative;
    height: 56px;
    width: 343px;
    padding: 16px 20px;



}
.input-field input{
    border: none;
    background-color: var(--background-color);
    outline:none;
    /* background: #8d3636; */
    width:100%;
    height: 100%
  
}
.input-field .noshow{
    display: none;
}

.input-field .show{
    cursor: pointer;
    z-index: 99;
    font-style: normal;
    font-weight: 500;
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