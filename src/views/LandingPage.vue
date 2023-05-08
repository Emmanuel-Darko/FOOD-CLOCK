<template>
    <main class="landing-page flex-center">
        
        <img class="home-logo" src="/images/homeLogo.svg" alt="food-clock logo">


            <router-link to="/signup">
                <button class="btn home-btn">Get Started</button>
            </router-link> 
        

        <img class="banner" src="/images/bg-img.svg" alt="banner">

    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.landing-page{
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
}
.home-logo{
    height: 160px;
    /* box-shadow: 0px 4px 20px rgba(101, 101, 101, 0.15); */ 
}
.home-btn{
width:190px;
height: 56px;
background: #5DB075;
box-shadow: 0px 8px 20px rgba(97, 62, 234, 0.32);
border-radius: 6px;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.1px;
color: #FFFFFF;
border: none;
transition: all 0.3s ease-in-out;

}
.home-btn:hover{
    background: #348a4c;
}

.banner{
width: 276px;
height: 251px;
}


</style>