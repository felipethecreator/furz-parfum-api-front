<script setup></script>

<template>
<div class="login-container">
    <form class="login-form">
        <h2>Registrar</h2>
        <label for="username">Nome completo</label>
        <input type="text" id="username" name="username">
        <label for="displayname">Nome de exibição</label>
        <input type="text" id="displayname" name="displayname">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password"> 
        <div class="botao">
        <button type="submit" id="botaoRegistrar">Registrar</button>
      </div>
    </form>
</div>
</template>

<style>

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #184E77; 
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.login-form {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.login-form label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
  color: #555;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form .forgot-password {
  display: block;
  margin-bottom: 20px;
  color: #555;
  text-decoration: none;
  font-size: 0.9em;
}

.login-form .forgot-password:hover {
  text-decoration: underline;
}

.login-form button {
  background-color: #184E77;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.login-form button:hover {
  background-color: #184E77;
}

.botao {
  padding-top: 3vh; 

}

</style>