<script setup>
import HeaderHome from '../components/Header.vue'
</script>

<template>
<div class="pageTitle">
    <p class="Title">Furz<br>parfum</p>
</div>
<div class="subTitle">
    <p>Desperte seus sentidos, libere a sua essência</p>
</div>
</template>

<style>

@font-face {
    font-family: PetitFormal;
    src: url(../assets/fonts/PetitFormalScript-Regular.ttf)
}
@font-face {
    font-family: Kurale;
    src: url(../assets/fonts/Kurale-Regular.ttf);
}
body {
    background-image: url(../assets/images/landingpage.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
}
.pageTitle {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.Title {
    font-family: PetitFormal, sans-serif;
    font-size: 170px;
    color: #000; 
    line-height: 0.9;
}
.subTitle {
    font-family: Kurale;
    font-size: 50px;
    position: absolute;
    top:53%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    

}
</style>