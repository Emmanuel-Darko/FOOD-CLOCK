<template>
    <div class="auth-page flex-center">
        <header class="auth-page-header flex-center">
            <!-- <span></span> -->
            <div class="header-text">
                <h3>Sign Up</h3>
                <router-link to="/login">Login</router-link>
            </div>
            

        </header>
        <img class="auth-logo" src="/images/homeLogo.png"/>
        <main class="main">
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
            <ToastComponent :message="testToast"/>
        </main>

    </div>
</template>

<script>
import axios from 'axios'
import InputField from '../components/InputField.vue';
import ToastComponent from '@/components/ToastComponent.vue'
import router from '@/router'
    export default {
        components:{
            InputField,
            ToastComponent
        },
        data(){
            return{
                inputActive:false,
                testToast: '',
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
                const newUser = {
                    email: this.inputFieldData[0].value,
                    password: this.inputFieldData[1].value
                }
                const checkPass = this.inputFieldData[1].value !== this.inputFieldData[2].value
                if(checkPass)
                    return this.testToast = 'Password mismatch'

                if(!checkPass && newUser.email !== '' && newUser.password !== ''){
                    axios.post('http://192.168.1.53:3000/auth/signup', newUser)
                    .then((res) =>{
                        this.testToast = 'Success, redirecting to login'
                    })
                    .then(res => {
                        setTimeout(this.pushToLogin, 4000)
                    })
                    .catch(err => {
                        this.testToast = err.response.data.message
                    })
                }
                else{
                    this.testToast = 'Input fields cannot be empty!'
                }
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
            },
            pushToLogin(){
                router.push('/login')
            }
        }
    }
</script>

<style lang="css" scoped>

.auth-page-header{
    position: relative;
    height: 100px;
    margin-top: 50px

}
.header-text{
    position: absolute;
    right: 0;
    width: 69%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* background-color: blue; */
}
.main{
    margin-top: 35px;
}
.input-container{
    margin-bottom: 30px;
}

.auth-logo{
width: 100px;
}
.auth-alternate-text{
 justify-content: space-between;
}
.auth-alternate-text{
    margin-top: 40px;
}

</style>