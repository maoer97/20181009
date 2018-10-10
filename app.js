
var app = new Vue({
  el:"#todolist",
  data:{
    addInp:"",
    amendInp:"",
    listItems:[],
    beforeEdit:""
  },
  computed:{
    num:function(){
      return this.listItems.filter(function(item){
        return !item.isCompleted
      }).length;
    },
    nd:function(){
      return this.listItems.filter(function(item){
        return !item.isCompleted
      });
    }
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
      this.beforeEdit=item.title;
    },
    amend:function(item){
      item.isclick=false;
    },
    goback:function(item){
      item.title=this.beforeEdit;
      item.isclick=false;
    },
    ndjob:function(){
      
    }
  }
})
