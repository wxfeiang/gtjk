<template>
  <div class="node">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-style="rowClass">
      <el-table-column
        prop="服务器IP"
        label="服务器IP"
        width="180">
      </el-table-column>
      <el-table-column
        prop="服务器编号"
        label="服务器编号"
        width="180">
      </el-table-column>
         <el-table-column
        prop="上海行情"
        label="上海行情">
      </el-table-column>
         <el-table-column
        prop="深圳行情"
        label="深圳行情">
      </el-table-column>
        
      <el-table-column
        prop="上涨推送状态 "
        label="上涨推送状态 ">
      </el-table-column>
   
        <el-table-column
          prop="下跌推送状态"
          label="下跌推送状态">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Node2',
  props: {
    tableData: Array
  },
  methods:{
      rowClass (rowData, index) {
          if(rowData.row['推送状态'] ==="故障"){
              return { "background-color": "#F56C6C","color": "#fff" }
          }
          },
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
