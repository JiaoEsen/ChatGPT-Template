<template>
    <div class="main-container">
        <div class="search-container">
            <Search />
        </div>
        <div class="prompt-container">
            <Prompt />
        </div>
        <div class="dialog-container">
            <DiaLogWrapper />
        </div>

    </div>
</template>

<script setup lang="ts">
import Search from './Search.vue'
import Prompt from './Prompt.vue'
import DiaLogWrapper from './dialog/DiaLogWrapper.vue'
</script>

<style lang="scss" scoped>
.main-container {
    box-sizing: border-box;
    flex: 1;
    height: 100%;
    background-color: #F3F8FC;
    overflow: auto;
    padding-bottom: 120px;

    &::-webkit-scrollbar {
        display: none;
    }
}

.search-container {
    position: fixed;
    bottom: 0;
    right: 0;
    width: calc(100% - 280px);
    height: 120px;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), #eff3fe 58.85%);
    z-index: 99;
}



.prompt-container {
    box-sizing: border-box;
    width: 800px;
    margin: 0 auto;
    padding: 10vh 0;
}
</style>