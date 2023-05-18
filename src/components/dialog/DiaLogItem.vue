<template>
    <div class="item-wrapper">
        <div class="avatar">
            <img :src="getAssetsImages('ai-robot.png')" alt="">
        </div>
        <div class="text">
            <div v-if="props.diaLog.content == ''" class="dialog-loading">
                <img src="../../assets/images/ai-coding.gif" alt="">
            </div>
            <v-md-preview v-else :text="text"></v-md-preview>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAssetsImages } from '@/utils/index';

interface Props {
    diaLog: any
}

const props = withDefaults(defineProps<Props>(), {
    diaLog: {
        content: ''
    }
})
let abc = '# Hello, world!\nThis is **Markdown**.'
const text = ref(abc)


onMounted(() => {
    // jsonAnimation('.dialog-loading', loadingJson)
})
</script>
<style>
.github-markdown-body {
    padding: 10px;
}

.github-markdown-body p:last-child {
    margin-bottom: 0;
}
</style>
<style lang="scss" scoped>
.item-wrapper {
    display: flex;
    align-items: start;
    width: 100%;
    margin-bottom: 30px;

    .avatar {
        flex-shrink: 0;
        width: 65px;
        height: 65px;
        text-align: center;

        img {
            width: 100%;
            height: 100%;
        }

        .user-avatar {
            width: 50px;
            height: 50px;
        }
    }

    .dialog-loading {
        width: 160px;

        // height: 160px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .text {
        max-width: calc(100% - 70px);
        box-sizing: border-box;
        margin-left: 20px;
        padding: 10px;
        // min-height: 50px;
        word-wrap: break-word;
        border-radius: 8px;
        color: #24292f;
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
}
</style>