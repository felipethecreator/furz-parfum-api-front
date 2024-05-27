<script setup>
import HeaderHome from '../components/Header.vue'
</script>

<template>
  <div class="container">
    <p class="pageTitle">
      <p class="title">Furz<br>parfum</p>
    </p>
    <p class="subTitle">
      <p>Desperte seus sentidos, libere a sua essência</p>
    </p>
    <p class="loginButton">
      <button>Login</button>
    </p>
    </div>
</template>


<style>

@font-face {
  font-family: PetitFormal;
  src: url(../assets/fonts/PetitFormalScript-Regular.ttf);
}
@font-face {
  font-family: Kurale;
  src: url(../assets/fonts/Kurale-Regular.ttf);
}
@font-face {
  font-family: Poppins;
  src: url(../assets/fonts/Poppins-Light.ttf);
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(../assets/images/landingpage.png);
  background-size: cover;
  font-family: 'Poppins', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 20vh; /* Ajuste conforme necessário */
  box-sizing: border-box;
  

}

.pageTitle {
  font-family: 'PetitFormal', serif;
  font-size: 150px;
  margin: 0;
line-height: 1;
background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Suporte para Safari */
}

.subTitle {
  font-family: 'Kurale', serif;
  font-size: 30px;
  margin-top: 1em;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Suporte para Safari */
}

.loginButton {
  margin-top: 2em;
}

button {
  font-family: 'Poppins', sans-serif;
  padding: 0.5em 1em;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: #3F3244;
  color: white;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .pageTitle {
    font-size: 2em;
  }

  .subTitle {
    font-size: 1.2em;
  }

  button {
    font-size: 0.9em;
    padding: 0.4em 0.8em;
  }
}


</style>
