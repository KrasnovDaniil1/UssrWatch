<script setup>
import logo from "@/assets/images/logo.png";

const navigation = [
    {
        link: "/",
        title: "Часы",
    },
    {
        link: "/mechanisms",
        title: "Механизмы",
    },
    {
        link: "/faq",
        title: "Правила",
    },
    {
        link: "/favourites",
        title: "Избранные",
    },
    {
        link: "/collection",
        title: "Коллекция",
    },
];
</script>

<template>
    <header>
        <router-link class="logo" to="/">USSRWATCH.RU</router-link>
        <nav>
            <ul>
                <li v-for="(item, i) in navigation" :key="i">
                    <router-link :to="item.link">{{ item.title }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--p-10);
    background: var(--main-bg);
    border-radius: var(--br-10);
    .logo {
        color: #D32F2F;
        font-weight: bold;
        font-size: 30px;
    }
    nav {
        font-size: 24px;
        ul {
            display: flex;
            gap: 0 var(--g-20);
            font-weight: bold;
        }
        .router-link-active {
            color: #D32F2F;
        }
    }
}
</style>
