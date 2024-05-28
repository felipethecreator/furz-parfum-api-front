<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
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
  padding-top: 20vh; 
  box-sizing: border-box;
}

.pageTitle {
  font-family: 'AlexBrush';
  font-size: 150px;
  margin: 0;
  line-height: 0.6;
}

.subTitle {
  font-family: 'Overlock';
  font-size: 30px;
  margin-top: 1em;
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
  background-color: #5F8575;
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

.cadastro {
  line-height: 2.9;
}

.hiperLink {
  color: blue;
}

@media (max-width: 2560px) {
  .container {
  width: 100%;
  max-width: 2560px;
  margin: 0 auto;
  }
  .pageTitle {
    font-size: 200px;
  }
  .subTitle {
    font-size: 40px;
  }
  .cadastro {
    font-size: 30px;
  }
}

/* Estilos para resoluções Full HD */
@media (max-width: 1920px) {
  .container {
    width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  }
  .pageTitle {
    font-size: 200px;
  }
  .subTitle {
    font-size: 40px;
  }
  .cadastro {
    font-size: 30px;
  }
}

/* Estilos para iPhone XR (ou dispositivos com largura semelhante) */
@media (max-width: 600px) {
  .container {
    max-width: 414px;
    padding: 0 10px; 
  }
  .pageTitle {
    font-size: 100px;
  }
  .subTitle {
    font-size: 30px;
  }
  .cadastro {
    font-size: 10px;
  }
}

</style>
