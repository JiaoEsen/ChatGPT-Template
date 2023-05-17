<template>
    <div class="search-wrapper">
        <div class="stop-response">
            <img :src="getAssetsImages('stop-sign.png')" alt="">
            <span>停止响应</span>
        </div>
        <div class="search-input">
            <div class="input">
                <div v-if="!input" class="placeholder">
                    <span>请输入您的问题...</span>
                </div>
                <el-input v-model="input" placeholder="" size="large" clearable />
            </div>
            <div v-if="props.loading" class="search-loading"></div>
            <img v-else :src="getAssetsImages('paper-plan.png')" alt="" style="width: 40px;height: 40px" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAssetsImages } from '@/utils/index'
import { jsonAnimation } from '@/utils/lottie-web'

import loadingJson from '@/assets/json/chat-bot-processing-data.json'

interface Props {
    loading: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    loading: false,
})

const input = ref()



onMounted(() => {
    jsonAnimation('.search-loading', loadingJson)
})
</script>

<style lang="scss" scoped>
.search-input {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 30px auto 0;

    .input {
        flex: 1;
        position: relative;
        background: #fff;

        .placeholder {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            padding-left: 15px;
            line-height: 38px;
            font-size: 14px;
            letter-spacing: 2px;
            overflow: hidden;

            span {
                display: block;
                width: 0;
                color: #999;
                animation: typing 4s steps(20, end) infinite;
            }
        }
    }

    .search-loading {
        width: 55px;
        height: 55px;
    }

    img {
        flex-shrink: 0;
        margin-left: 10px;
        cursor: pointer;
    }
}

/* 定义打字效果动画 */
@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

:deep(.el-input__wrapper)  {
    background-color: transparent !important;
}

.stop-response {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    z-index: 10;

    img {
        width: 36px;
        height: 36px;
        margin-right: 10px;
    }
}
</style>