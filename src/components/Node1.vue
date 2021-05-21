<template>
  <div class="node">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-style="rowClass">
      <el-table-column
        prop="工作服务器Ip"
        label="工作服务器IP"
        width="180">
      </el-table-column>
      <el-table-column
        prop="工作服务器编号"
        label="工作服务器编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="类型"
        align="center"
        label="类型">
        <!-- <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row['类型'] }}</el-tag>
        </div>
      </template> -->
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
        prop="推送状态"
        label="推送状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Node1',
  props: {
    tableData: Array
  },
  methods:{
      rowClass (rowData, index) {
          if(rowData.row['推送状态'] ==="故障"){
            //  if(rowData.row['推送状态'] ==="正常"){
              return { "background-color": "#F56C6C","color": "#fff" }
          }

          },
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
