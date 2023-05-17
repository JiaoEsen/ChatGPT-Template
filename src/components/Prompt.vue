<template>
    <div class="prompt-wrapper">
        <div class="prompt-logo">
            <img :src="getAssetsImages('ai-robot.png')" alt="">
        </div>
        <div class="prompt-content">
            <div v-for="item in promptData" :key="item.id" class="prompt-content-list">
                <div class="icon">
                    <img :src="getAssetsImages(item.icon)" alt="">
                </div>
                <div v-for="text in item.textList" :key="text" class="text" @click="onClick(text)">{{ text }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { getAssetsImages } from '@/utils/index';

const emit = defineEmits(['change'])

const promptData = reactive([
    {
        icon: 'lets-imagine.png',
        id: '1',
        textList: ['编写一份xx报告，500字。', '写一份周报，要求50字以上', '2023年创业的方向有哪些？']
    }, {
        icon: 'time-is-money.png',
        id: '2',
        textList: ['编写一份创业的PPT大纲？', '写一份系统升级报告。', '糖醋里脊有哪些做法？']
    }, {
        icon: 'javascript-coding.png',
        id: '3',
        textList: ['JavaScript冒泡排序。', 'Python如何连接mysql？', 'HTML如何生成一个按钮？']
    }
])

const onClick = (text: string) => {
    emit('change', {
        value: text
    })
}
</script>

<style lang="scss" scoped>
.prompt-wrapper {

    .prompt-logo {
        text-align: center;

        img {
            width: 150px;
            height: 150px;
        }
    }

    .icon {
        width: 100px;
        height: 100px;
        padding-bottom: 25px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .prompt-content {
        display: flex;
        justify-content: space-between;

        .prompt-content-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 30px;

            .text {
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 200px;
                min-width: 200px;
                min-height: 35px;
                max-height: 35px;
                padding: 10px 20px;
                border-radius: 8px;
                margin-bottom: 18px;
                background-color: #fff;
                word-wrap: break-word;
                cursor: pointer;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            }
        }
    }
}
</style>