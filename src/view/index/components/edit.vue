<template>
    <div class="content" :style="{ 'height': data.screenHeight - 50 + 'px' }">
        <h1>页面{{ page + 1 }}</h1>
        <el-form :model="renderData[page]" label-width="80px" label-position="left" inline>
            <el-form-item label="标题">
                <el-input v-model="renderData[page].title" placeholder="请输入标题" />
            </el-form-item>
            <el-form-item label="活动日期">
                <el-input v-model="renderData[page].date" placeholder="请输入活动日期" />
            </el-form-item>
        </el-form>
        <div class="flex items-center">
            <el-icon :size="25" @click="RowMinus(renderData[page].rows)"><Minus /></el-icon>
            <el-icon :size="25" @click="RowAdd(renderData[page].rows)"><Plus /></el-icon>
        </div>
        <div class="p-5 mt-5 flex items-center flex-wrap row" v-for="row in renderData[page].rows" :index="row.id">
            <div class="column mr-5" v-for="column in row.columns" :index="column.id">
                <el-input v-model="column.content" placeholder="请输入文字" />
                <!-- element-plus 下拉选择文字大小，选项：大，中，小 -->
                <el-select v-model="column.size">
                    <el-option label="大" value="large" />
                    <el-option label="中" value="medium" />
                    <el-option label="小" value="small" />
                </el-select>
            </div>
            <el-icon :size="25" @click="ColumnMinus(row.columns)"><Minus /></el-icon>
            <el-icon :size="25" @click="ColumnAdd(row.columns)"><Plus /></el-icon>
            <!-- 开关，是否居中 -->
            <el-switch v-model="row.center" active-text="居中" inactive-text="不居中" />
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';

const props = defineProps({
    page: 1,
})

const data = reactive({
    //屏幕高度
    screenHeight: document.documentElement.clientHeight || document.body.clientHeight,
})

const renderData = useStore().state.renderData;

//Row增加
const RowAdd = (rows) => {
    //判断长度，最多10个
    if(rows.length >= 10){
        //提示
        ElMessage({
            message: '最多10个',
            type: 'warning',
        })
        return;
    }
    rows.push({
        id: rows.length + 1,
        columns: [
            {
                id: 1,
                content: '',
                size: 'large',
            },
        ],
        center: false,
    })
}

//Row去除最后一个
const RowMinus = (rows) => {
    rows.pop();
}

const ColumnAdd = (columns) => {
    columns.push({
        id: columns.length + 1,
        content: '',
        size: 'large',
    })
}

//Column去除最后一个
const ColumnMinus = (columns) => {
    columns.pop();
}
</script>

<style lang="scss" scoped>
.content{
    overflow-y: auto;
}
.el-icon{
    /* 边框灰色 */
    border: 1px solid #dcdfe6;
    margin-right: 10px;
}
/* .el-icon选中变色 */
.el-icon:hover{
    color: #409eff;
    border-color: #409eff;
}
.row{
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    .column{
        .el-select{
            width: 60px;
        }
        .el-input{
            width: 200px;
        }
    }
}

.row:hover{
    border-color: #409eff;
}
</style>