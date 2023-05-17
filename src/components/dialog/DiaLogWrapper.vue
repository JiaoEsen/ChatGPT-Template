<template>
    <div class="dialog-content">
        <DiaLogItem />
        <DiaLogItem :diaLog="{ content: '你好' }" />
    </div>
</template>

<script setup lang="ts">
import DiaLogItem from './DiaLogItem.vue';
</script>

<style lang="scss" scoped>
.dialog-content {
    width: 800px;
    margin: 0 auto;
    transform: translateX(-65px);

}
</style>