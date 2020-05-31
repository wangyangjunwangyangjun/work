<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    name: "select",data() {
      return {
        options: [{
          value: '选项1',
          label: '全国'
        }, {
          value: '选项2',
          label: '四川'
        }, {
          value: '选项3',
          label: '浙江'
        }, {
          value: '选项4',
          label: '北京'
        }, {
          value: '选项5',
          label: '武汉'
        }],
        value: ''
      }
    }

  }
</script>

<style scoped>

</style>
