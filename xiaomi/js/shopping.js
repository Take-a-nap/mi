/**
 * Created by Administrator on 2018/7/12.
 */
$(function () {
    var shopList=localStorage.shopList;
    shopList=JSON.parse(shopList);
    console.log(shopList);
    $.each(shopList,function (index,value) {
        $(".table").append("<tr>" +"<td>"+value.name+"</td>"+
            "<td>"+value.prcice+"</td>"+"<td>"+"<input type='text' class='shop-num'/>"+"</td>"+
            "<td>"+"<input type='submit' value='删除' class='delete'/>"+"</td>"+ "</tr>");
         $('.shop-num').eq(index).val(value.number)
    });
    $('.delete').css({"background-color":"#ff6700","height":"40px","width":"200px","color":"#ffffff","border":"none"});
    $('.shop-num').css({"height":"40px","width":"200px"});
    $('.delete').on("click",function (ev) {

        $(this).closest("tr").remove();
    })
});