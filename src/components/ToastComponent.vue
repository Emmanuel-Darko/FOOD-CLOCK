<template>
    <div class="container flex-center">
        <Transition name="bounce">
            <div v-show="showMessage">
                {{ toastMessage }}
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        props:[
            "message"
        ],
        data(){
            return{
                toastMessage: '',
                showMessage: false
                
            }
        },
        watch:{
            message: function(newValue, oldValue){
                if(newValue !== oldValue){
                    this.toastMessage = newValue
                    this.handleShowAlert()
                }
            }
        },
        methods: {
            handleShowAlert(){
                this.showMessage = true
                setTimeout(this.setAlertTimeout, 4000)
            },
            setAlertTimeout(){
                this.showMessage = false
            }
        }
    }
</script>

<style lang="css" scoped>
    .container{
        justify-content: center;
        font-family: 'Sono';
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10%;
    }
    .container div{
        width: 50%;
        text-align: center;
        height: 60px;
        padding: 10px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        /* border-left: 10px solid rgb(243, 49, 49); */
        color: #fff;
        background-color: #348a4c;
        overflow: hidden;
        /* box-shadow: 5px 5px 9px #93cea4,
        -5px -5px 9px #c6e4cf; */
        z-index: 1;
    }
    .container div::before{
        content: "";
        position: absolute;
        left: 0;
        width: 0%;
        height: 100%;
        /* background-color: red; */
        z-index: -1;
        animation: toastAnimation 4s ease-in-out forwards;
    }
    @keyframes toastAnimation{
        0%{width: 0%; background-color: rgba(255, 0, 0, 0.55);}
        25%{width: 25%; background-color: rgba(255, 0, 0, 0.66);}
        50%{width: 50%; background-color: rgba(255, 0, 0, 0.806);}
        75%{width: 75%; background-color: rgba(255, 0, 0, 0.922);}
        100%{width: 100%; background-color: rgb(255, 0, 0);}
    }
    .bounce-enter-active {
    animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
    }
</style>