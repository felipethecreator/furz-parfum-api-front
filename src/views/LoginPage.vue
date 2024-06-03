<script setup></script>

<template>
<div class="login-container">
    <form class="login-form">
        <h2>Login</h2>
        <label for="username">Nome de exibição</label>
        <input type="text" id="username" name="username">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password">
        <a href="#" class="forgot-password">Esqueci a senha</a>
        <button type="submit">Entrar</button>
    </form>
</div>
</template>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #5F8575; 
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
  background-color: #5F8575;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.login-form button:hover {
  background-color: #5F8575;
}

</style>