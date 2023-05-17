<template>
    <div class="home-container">
        <div class="home-wrapper">
            <side-bar />
            <main-component />
        </div>
    </div>
</template>

<script setup lang="ts">
import MainComponent from '@components/Main.vue'
import SideBar from '@components/SideBar.vue'
</script>

<style lang="scss" scoped>
    .home-wrapper {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
</style>