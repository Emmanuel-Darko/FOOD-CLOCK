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
                    <InputField v-for="(inputItem,index) in inputFieldData" :toggleShowPassword="this.toggleShowPassword" 
                        :key="index" :inputType="inputItem.type" :placeholder="inputItem.placeholder" :showBtn="inputItem.showBtn" 
                        :inputActive="inputItem.fieldActive" :toggleInputActive="toggleInputActive" :index="index" :clearActive="this.clearActive"
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
                        showBtn:"noshow",
                        fieldActive: false
                    },
                    {
                        type: "password",
                        placeholder:"Password *",
                        value:this.showPassword,
                        showBtn:"show",
                        fieldActive: false
                    },
                    {
                        type:"password",
                        placeholder:"Confirm Password *",
                        value:"",
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
                router.replace('/login')
            }
        }
    }
</script>

<style lang="css" scoped>



</style>