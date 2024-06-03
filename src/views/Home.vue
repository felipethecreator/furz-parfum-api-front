<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container text-center">
    <div class="pageTitle">
      <p class="title">Furz<br>parfum</p>
    </div>
    <div class="subTitle">
      <p>Desperte seus sentidos, libere a sua essência</p>
    </div>
    <div class="loginButton">
      <RouterLink to="/login" target="_blank">
        <button>Login</button>
      </RouterLink>
    </div>

    <p class="cadastro">Não possui login? <RouterLink to="https://bonzi.link/" target="_blank"><a class="hiperLink">Cadastre-se</a></RouterLink></p>
  </div>
</template>

<style>

body {
  background-image: url("../assets/images/landingpage.png");
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 20vh; 
  box-sizing: border-box;
}

.pageTitle {
  font-family: 'AlexBrush';
  font-size: 200px;
  margin: 0;
  line-height: 0.6;
  color: #184E77;
}

.subTitle {
  font-family: 'Overlock';
  font-size: 40px;
  color: #184E77;
}

.loginButton {
  font-size: 20px;
}

button {
  font-family: 'Poppins', sans-serif;
  padding: 0.5em 1em;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: #5F8575;
  color: #fffff0;
  border-radius: 30px;
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

.cadastro {
  line-height: 2.9;
  font-size: 27px;
  color: #184E77;
}

.hiperLink {
  color: #5F8575;
}
</style>
