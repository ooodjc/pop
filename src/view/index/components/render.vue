<template>
    <div class="content" id="content">
        <div class="item p-2" v-for="item in renderData" :key="item.id" :style="getBorderStyle(item.id)">
            <div class="title flex justify-center text-xl">{{ item.title }}</div>
            <div class="row flex items-end" :class="row.center ? 'justify-center':''" v-for="row in item.rows" :key="row.id">
                <div class="m-0 align-bottom" v-for="column in row.columns" :key="column.id" :style="getFontSize(column.size)">{{column.content}}</div>
            </div>
            <div class="center mt-2 mr-2 text-xs" v-if="item.date !== ''">
                <div style="margin-left: auto;">活动日期：{{ item.date }}</div>
            </div>
        </div>
    </div>
    <el-button type="primary" @click="download">下载</el-button>
</template>

<script setup>
import { convertDivToImage } from '@/utils/Div2Img.js';

const renderData = useStore().state.renderData;

const data = reactive({
    //屏幕高度
    screenHeight: document.documentElement.clientHeight || document.body.clientHeight,
})

const content = ref(null);

//根据id返回对应边框样式
const getBorderStyle = computed(() => {
    return (id) => {
        switch (id) {
            case 1:
                return 'border-bottom: 1px solid #000; border-right: 1px solid #000;';
            case 2:
                return 'border-bottom: 1px solid #000;';
            case 3:
                return 'border-right: 1px solid #000;';
            default:
                return '';
        }
    }
})

//更具size返回对应字体大小
const getFontSize = computed(() => {
    return (size) => {
        switch (size) {
            case 'large':
                return 'font-size:25px; line-height: 25px;';
            case 'medium':
                return 'font-size:18px; line-height: 18px;';
            case 'small':
                return 'font-size:10px; line-height: 10px;';
            default:
                return '';
        }
    }
})

const download = () => {
    //ref="content"获取到的是一个dom对象
    const contentDom = content.value;
    //将dom对象转化为图片
    convertDivToImage('content', 'myImage.png').then(() => {
        console.log('图片已下载完成！')
    })
}
</script>

<style lang="scss" scoped>
.content{
    width: 600px;
    height: 425px;
    display: flex;
    flex-wrap: wrap;
    .item{
        width: 50%;
        height: 50%;
    }
}
</style>