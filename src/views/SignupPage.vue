<template>
    <div class="auth-page flex-center">
        <header class="auth-page-header flex-center">
            <span></span>

            <h1>Sign Up</h1>
            <router-link to="/login">Login</router-link>

        </header>
        <main>
            <form @submit.prevent="handleSignUp" class="page-form auth-form">

                <div class="input-container flex-center">
                    <InputField 
                         :inputType="inputFieldData[0].type" :placeholder="inputFieldData[0].placeholder" :showBtn="inputFieldData[0].showBtn" 
                        :inputActive="inputFieldData[0].fieldActive" :toggleInputActive="()=>toggleInputActive(0)" :clearActive="this.clearActive"
                        :handleInput="handleInput" :inputName="inputFieldData[0].name"
                    />
                    <InputField :toggleShowPassword="this.toggleShowPassword" :handleInput="handleInput" :inputName="inputFieldData[1].name"
                         :inputType="inputFieldData[1].type" :placeholder="inputFieldData[1].placeholder" :showBtn="inputFieldData[1].showBtn" 
                        :inputActive="inputFieldData[1].fieldActive" :toggleInputActive="()=>toggleInputActive(1)" :clearActive="this.clearActive"
                    />
                    <InputField 
                    :toggleShowPassword="this.toggleShowPassword" :handleInput="handleInput" :inputName="inputFieldData[2].name"
                         :inputType="inputFieldData[2].type" :placeholder="inputFieldData[2].placeholder" :showBtn="inputFieldData[2].showBtn" 
                        :inputActive="inputFieldData[2].fieldActive" :toggleInputActive="()=>toggleInputActive(2)" :clearActive="this.clearActive"
                    />
                </div>
                    <button type="submit" class="home-btn btn flex-center">
                        <span>SIGN UP</span>
                    </button>
                    <p class="auth-alternate-text">Already registered? <router-link to="/login">Login</router-link></p>
                
                
            </form>
        </main>

    </div>
</template>

<script>
import InputField from '../components/InputField.vue';
import router from '@/router'
    export default {
        components:{
            InputField
        },
        data(){
            return{
                inputActive:false,
                inputFieldData:[
                    {
                        type:'email',
                        placeholder:"Email *",
                        value:"",
                        name:'email',
                        showBtn:"noshow",
                        fieldActive: false
                    },
                    {
                        type: "password",
                        placeholder:"Password *",
                        value:"",
                        name:'password',
                        showBtn:"show",
                        fieldActive: false
                    },
                    {
                        type:"password",
                        placeholder:"Confirm Password *",
                        value:"",
                        name:'confirmPassword',
                        showBtn:"noshow",
                        fieldActive: false
                    }
                ]
            }
        },
        methods:{
            toggleShowPassword(){
                this.inputFieldData[1].type = this.inputFieldData[1].type == 'text' ? 'password' : 'text'
            },
            toggleInputActive(id){
                this.inputFieldData.map((item, index) => {
                    id === index ? item.fieldActive = true : item.fieldActive = false
                })
            },
            clearActive(){
                this.inputFieldData.map((item) => {
                    item.fieldActive = false
                })
            },
            handleSignUp(){
                console.log(this.inputFieldData);
                // router.replace('/login')
            },
            handleInput(value){
                if(value.name=='email'){
                    this.inputFieldData[0].value=value.data
                }
                if(value.name=='password'){
                    this.inputFieldData[1].value=value.data
                }
                if(value.name=='confirmPassword'){
                    this.inputFieldData[2].value=value.data
                }

                // value.type=='email'
                // ?this.inputFieldData[0].value=value.data
                // :value.name=='confirmPassword'
                // ?this.inputFieldData[2].value=value.data
                // :this.inputFieldData[1].value=value.data
            }
        }
    }
</script>

<style lang="css" scoped>



</style>