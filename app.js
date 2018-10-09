
var app = new Vue({
  el:"#todolist",
  data:{
    addInp:"",
    amendInp:"",
    listItems:[]
  },
  methods:{
    //添加列表
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false,isclick:false});
      this.addInp="";
    },
    del:function(index){
      this.listItems.splice(index,1);
    },
    dbclick:function(item){
      item.isclick=true;
    },
    amend:function(item){
      item.isclick=false;
    }
  }
})
