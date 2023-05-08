<template>
    <div class="signup-page flex-center">
        <header class="starter-page-header flex-center">
            <span></span>

            <h1>Sign Up</h1>
            <router-link to="/login">Login</router-link>

        </header>
        <main>
            <form class="page-form signup-form">

                <div class="input-container flex-center">
                    <InputField v-for="(inputItem,index) in inputFieldData" :toggleShowPassword="this.toggleShowPassword" 
                        :key="index" :inputType="inputItem.type" :placeholder="inputItem.placeholder" :showBtn="inputItem.showBtn" 
                        :inputActive="inputItem.fieldActive" :toggleInputActive="toggleInputActive" :index="index" :clearActive="this.clearActive"
                    />
                </div>
                <div class="btn-container flex-center">
                    <button class="flex-center">SIGN UP</button>
                </div>
                
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
            }
        }
    }
</script>

<style lang="css" scoped>
.signup-page{
    
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
}
.starter-page-header{
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 36px;
text-align: center;
color: #000000;
justify-content: space-between;
background: #000;
width: 100%;
}
.signup-form .input-container{
    flex-direction: column;
    gap: 16px;
    
}
.input-container{
    margin-bottom:18px;
}
.signup-form button{
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    background: transparent;
    border: none;
    color: #FFFFFF;
    width: 100%;
    height: 100%;
    background: #a63f3f;

}
.btn-container{
    
    background: #5DB075;
    box-shadow: 0px 8px 20px rgba(97, 62, 234, 0.32);
    border-radius: 6px;
    width: 100%;
    flex-direction: column;
    height: 56px;
    width: 343px;
      

}
</style>