<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<style>
body {
    background: var(--app-bg);
    min-height: 100vh;
}
#app {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
</style>
