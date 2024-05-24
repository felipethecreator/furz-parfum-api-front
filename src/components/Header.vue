<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <RouterLink class="router-link" to = "/">
        <h1 class="tituloHeader">Furz Parfum</h1>
            <div>
                <a href="#">Créditos</a>
                <a href="#">Contato</a>
            </div>
        </RouterLink>
    </header>
</template>

<style>

.tituloHeader {
    font-family: 'Courier New', Courier, monospace;
}

</style>