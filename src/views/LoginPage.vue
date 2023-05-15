<template>
   
        <div class="auth-page flex-center">
        <header class="auth-page-header flex-center">
            <!-- <span></span> -->
            <div class="header-text">
                <h3>Login</h3>
                <router-link to="/signup">Sign Up</router-link>
            </div>

        </header>
        <img class="auth-logo" src="/images/homeLogo.png"/>
        <main class="main">
            <form  @submit.prevent="handleLogin" class="page-form auth-form">

                <div class="input-container flex-center">
                    <InputField :inputType="inputFieldData[0].type" :placeholder="inputFieldData[0].placeholder" :showBtn="inputFieldData[0].showBtn" :inputName="inputFieldData[0].name"
                        :inputActive="inputFieldData[0].fieldActive" :toggleInputActive="()=>toggleInputActive(0)" :clearActive="this.clearActive" :handleInput="handleInput"
                   
                    />
                    <InputField  :toggleShowPassword="this.toggleShowPassword" :handleInput="handleInput" :inputName="inputFieldData[1].name"
                         :inputType="inputFieldData[1].type" :placeholder="inputFieldData[1].placeholder" :showBtn="inputFieldData[1].showBtn" 
                        :inputActive="inputFieldData[1].fieldActive" :toggleInputActive="()=>toggleInputActive(1)" :clearActive="this.clearActive"
                        
                    />
                </div>
                    <button type="submit" class="home-btn btn flex-center">
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
            <ToastComponent />
        </main>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue';
import ToastComponent from '../components/ToastComponent.vue';
// import router from '@/router'
    export default {
        components:{
            InputField,
            ToastComponent
        },
        data(){
            return{
                inputActive:false,
                inputFieldData:[
                    {
                        type:'email',
                        placeholder:"Email *",
                        value:"",
                        name: "email",
                        showBtn:"noshow",
                        fieldActive: false
                    },
                    {
                        type: "password",
                        placeholder:"Password *",
                        value:'',
                        name: "password",
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
            },
            handleLogin(){
                console.log(this.inputFieldData);
                // router.replace('/menu')
            },
            handleInput(value){
                value.name=='password'
                ?this.inputFieldData[1].value=value.data
                :this.inputFieldData[0].value=value.data
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
.header-text a{
    display: absolute;
    right: 0
}
.auth-logo{
width: 100px;
color: #000000;
}
.auth-alternate-text{
 justify-content: space-between;
}
</style>