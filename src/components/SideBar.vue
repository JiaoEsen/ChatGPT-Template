<template>
    <div class="side-bar-container">
        <div class="side-bar-top">
            <img :src="getAssetsImages('ai-laptop.png')" alt="" style="width: 150px;height: 150px">
            <span class="title">{{ appTitle }}</span>
        </div>
        <div class="side-bar-center">
            <div class="history-list">
                <div class="history-list-item active">
                    <img :src="getAssetsImages('chatting.png')" class="title-icon" alt="">
                    <span>这里是记录标题</span>
                    <!-- <el-input v-model="input" /> -->
                    <div class="tool">
                        <img :src="getAssetsImages('chat-create.png')" alt="">
                        <img :src="getAssetsImages('delete.png')" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="side-bar-bottom">
            <div class="create-btn">
                <img :src="getAssetsImages('create-chat.png')" alt="">
                <span>新建对话</span>
            </div>
            <div class="create-btn">
                <img :src="getAssetsImages('log-out.png')" alt="">
                <span>退出登录</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getAssetsImages } from '@/utils/index'
const appTitle = ref();

onMounted(() => {
    appTitle.value = import.meta.env.VITE_APP_TITLE;
})
</script>

<style lang="scss" scoped>
.side-bar-container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 280px;
    height: 100%;
    background-color: #eff3fe;
    border: 1px solid rgba(218, 218, 220, .6);

    div {
        box-sizing: border-box;
        text-align: center;
    }

    .side-bar-top {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 240px;
        padding: 20px;

        .title {
            font-size: 28px;
        }
    }

    .side-bar-center {
        flex: 1;
        padding: 0px 20px 20px;
        overflow: hidden;


        .history-list {
            height: 100%;
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }

            .history-list-item {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                padding: 8px 10px;
                margin-bottom: 8px;
                border-radius: 6px;
                cursor: pointer;

                &.active {
                    background-color: #fff;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }

                .title-icon {
                    flex-shrink: 0;
                    width: 30px;
                    height: 30px;
                    margin-right: 12px;
                }

                span {
                    flex: 1;
                    text-align: left;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .tool {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    margin-left: 10px;

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }

    // .history-list::-webkit-scrollbar {
    //     display: none;
    // }

    // .history-list:hover::-webkit-scrollbar {
    //     display: block;
    // }

    .side-bar-bottom {
        height: 190px;

        .create-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 50px;
            border: 1px solid rgba(218, 218, 220, .6);
            margin: 0 auto 10px;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

            img {
                width: 35px;
                height: 35px;
            }
        }
    }
}</style>
