<template>
    <main class="landing-page flex-center">

        <img class="home-logo" src="/images/homeLogo.png" alt="food-clock logo">


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
.landing-page {
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 100%;
}

.home-logo {
    width: 220px;
    /* height: 160px; */
    /* box-shadow: 0px 4px 20px rgba(101, 101, 101, 0.15); */
}

.home-btn {
    width: 190px;
}


.banner {
    width: 276px;
    height: 251px;
}
</style>