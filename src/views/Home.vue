<template>
  <div class="home">
    <!-- titile -->
    <div class="title">{{title}}</div> 
    <div class="btns">
       <el-button v-if="auto" type="primary" icon="el-icon-refresh" @click="refresh">{{refreshName}}</el-button>
       <el-button  v-else  type="danger" icon="el-icon-error" @click="refresh">{{refreshName}}</el-button>

    </div>

 
    <div class="nodeitem">
       <div class="item_title">
         主节点
        </div>
        <Node1  :tableData="master"/>
    </div>
    <div class="nodeitem">
      <div class="item_title">
            节点
      </div>
      <Node2  :tableData="Node"/>
    
    </div>

    <!-- 版权信息 -->
    <div class="b_msg">
      上海悦高软件股份有限公司 2008 - 2021 @ 版权所有
       <br> <span>版本号: {{bbh}}</span>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Node1 from '@/components/Node1.vue'
import Node2 from '@/components/Node2.vue'
export default {
  name: 'Home',
  components: {
    Node1,
    Node2
  },
  data() {
    return {
     title: "",
     bbh: '',
    master: [],
    Node: [],
    auto: true,
    refreshName: "自动刷新",
    timer: '',
    timer2: '',
    timeVlaue: "",
    outVlaue: '',
    baseURL: ''

  }
  },
  created: function () {
    var  number = Math.ceil(Math.random()*100000);  
      this.$http 
      .get('config.json?bbh='+ number ,)
      .then(res => {
          var  JsonData  = res.data
          this.title = JsonData.title;
          this.bbh = JsonData.bbh;
          this.timeVlaue = JsonData.timeVlaue<3000 ?  3000 :JsonData.timeVlaue;
          this.baseURL =JsonData.baseURL
          this.outVlaue = this.timeVlaue/1000
          this.getNode()
      })
 
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
  },
  methods:{
    async  getNode(){
      var pram =  {
          "FUNC_ID": "1000004",
          "CONTENT": {}
      }
     const  { data } = await   this.$http .post(this.baseURL+'/arbitration/',JSON.stringify(pram))
     if(data.ErrorCode == 0){
       var obj =  JSON.parse(data.Data)  
        this.master = obj.master
        this.Node = obj.Node
     }   
    },
    refresh(){
      this.auto  = ! this.auto 
      if(!this.auto){
        this.refreshName = "停止刷新"
        this.getNode()
        this.$message({
          message: '已开启自动刷新数据!',
          type: 'success'
        });
    
        this.timer = setInterval(this.getNode, this.timeVlaue);
        this.timer2 = setInterval(this.time_j, 1000);
        
      }else{
        this.$message({
          message: '已关闭自动刷新数据!',
          type: 'success'
        });
        this.refreshName = "自动刷新"
        clearInterval(this.timer);
        clearInterval(this.timer2);
         document.title = this.title
      }
    
    },
    time_j(){
      this.outVlaue --;
      document.title = '刷新计时'+ this.outVlaue+ "秒"
      if(this.outVlaue ==0){
        this.outVlaue = this.timeVlaue/1000
      }
    }


  }
}
</script>
<style scoped lang="scss">
.home{
  width: 90%;
  margin: 0  auto;
}
.title{
  
  text-align: center;
  font-size: 30px;
  line-height: 60px;
}
.btns{
  text-align: right;
}
.nodeitem{
  margin: 20px 0;
  border: 1px  solid  #ccc;
  .item_title{
    padding:   10px;
    font-size: 20px;
    line-height: 30px;
  }
}
.b_msg{
  margin-top:  20px;
  text-align: center;
  color: #999;
    font-size: 12px;
  span{
    font-size: 10px;
  }
}

</style>
