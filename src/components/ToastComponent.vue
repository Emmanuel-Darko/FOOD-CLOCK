<template>
    <div class="container flex-center">
        <Transition appear-active-class="fade">
            <div>
                <!-- {{ message }} -->
                all fields are mandatory
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        props:[
            "message"
        ]
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
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        border-left: 10px solid rgb(243, 49, 49);
        color: #fff;
        background-color: #348a4c;
        box-shadow: 5px 5px 9px #93cea4,
        -5px -5px 9px #c6e4cf
    }
    .v-enter-active,
    .v-leave-active {
        transition:font-size 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        font-size: 0px;
    }
</style>