$(function(){
    // 公告
    var aUl = $('.notice').children('ul'),
        oLi = aUl.children('li'),
        oLiH = oLi.eq(0).height(),
        iNum = 0;
    var timer = setInterval(slide,3000);
    function slide(){
        iNum++;
        if(iNum < oLi.length){
            aUl.animate({
                top: -iNum * oLiH
            })
        }else{
            iNum = 0;
        }
    }
    //产品介绍切换
    var productBtn = $('.n-listt').children('button'),
        productD = $('.product').children('div');
    productBtn.eq(0).css('background','#008000');
    productBtn.on('click',function(){
        var iBtn = $(this).index();
        $(this).css('background','#008000').siblings().css('background','');
        productD.eq(iBtn).show().siblings().hide();
    })
});