<template>
   
        <div class="auth-page flex-center">
        <header class="auth-page-header flex-center">
            <span></span>

            <h1>Login</h1>
            <router-link to="/signup">Sign Up</router-link>

        </header>
        <img class="auth-logo" src="/images/homeLogo.svg"/>
        <main>
            <form class="page-form auth-form">

                <div class="input-container flex-center">
                    <InputField v-for="(inputItem,index) in inputFieldData" :toggleShowPassword="this.toggleShowPassword" 
                        :key="index" :inputType="inputItem.type" :placeholder="inputItem.placeholder" :showBtn="inputItem.showBtn" 
                        :inputActive="inputItem.fieldActive" :toggleInputActive="toggleInputActive" :index="index" :clearActive="this.clearActive"
                    />
                </div>
                    <button class="home-btn btn flex-center">
                        <span>LOGIN</span>
                    </button>
                    <p class="auth-alternate-text flex-center">
                        <span>
                            <router-link to="/">Forgot password</router-link>
                        </span>
                        <span>
                            Not registered? <router-link to="/signup">Sign Up</router-link>
                        </span>
                        
                    </p>
            </form>
        </main>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue';
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
            }
        }
    }
</script>

<style lang="css" scoped>
.auth-page{
    flex:1;
    justify-content: center;
    gap: 30px;
}
.auth-logo{
width: 100px;
}
.auth-alternate-text{
 justify-content: space-between;
}
</style>