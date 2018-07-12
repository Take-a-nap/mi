/**
 * Created by Administrator on 2018/7/12.
 */
var obj= {"id":2,"name":"电脑","prcice":8000};
var $sub=$("#content-inp");
var shopList=localStorage.shopList;
$.get('../json/tsconfig.json?id=4',function (ev) {
    //保存到浏览器的数据库
    localStorage.shopList=JSON.stringify(ev)
},"json");
shopList=JSON.parse(shopList);
$sub.on("click",function () {
    location.href="../html/shopping.html";
    console.log($('h4')[0].id);
    console.log(shopList);
    if($("h4")[0].id==obj.id){
        shopList[1].number+=1;
        console.log(shopList[1].number);
        localStorage.shopList=JSON.stringify(shopList)
    }else {
        
    }
});