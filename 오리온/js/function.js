$(function(){
    $('a').on('click',function(evt){
        evt.preventDefault();
    })

    //header 
    const header = $('header');
    const $lnb = $('header > .header-con > nav > ul > li > .lnb');
    const $lnbBG = $('header > .lnb-bg');
    const $nav = $('header > .header-con > nav > ul');
    const $navLi = $('header > .header-con > nav > ul > li > a');
    const arrTop = [];

    $(window).on('scroll',function(){
        const scroll = $(this).scrollTop();
        //헤더위치
        if(scroll>1){
            header.css({
                position:'fixed',
                height:70
            });
            header.find('.header-con').css({
                position:'fixed',
                left:0,
                width:'100%',
                margin:0
            });
            header.find('.logo').css({
                top:10,
                left:'50%',
                marginLeft:-500
            });
            header.find('.snb').css({
                display:'none'
            });
            header.find('nav').css({
                top:20,
                right:'50%',
                marginRight:-300
            });
            $lnbBG.css({height:0,background:'none',border:'none'});
            $lnbBG.children('.image').css({display:'none'});
            $lnb.find('li').css({display:'none'})
        }else {
            header.css({
                position:'relative',
                height:100
            });
            header.find('.header-con').css({
                position: 'relative',
                left: '50%',
                width: 1340,
                marginLeft: -670
            });
            header.find('.logo').css({
                top:40,
                left:0,
                marginLeft:0
            });
            header.find('.snb').css({
                display:'flex'
            });
            header.find('nav').css({
                top:50,
                right:0,
                marginRight:0
            });
            $lnbBG.css({height:300,background:'#fff',borderBottom:'2px solid red'});
            $lnbBG.children('.image').css({display:'block'});
            $lnb.find('li').css({display:'block'})
        }
    });
    $(window).on('scroll',function(){
        const scroll = $(this).scrollTop();
        for(let i=0;i<$navLi.length;i++){
            arrTop[i] = $('section').eq(i).offset().top;
        }
        for(let i=0;i<$navLi.length;i++){
            if(scroll>=arrTop[i+1]){
                $navLi.eq(i).parent().addClass('on').siblings().removeClass('on');
            }else if(scroll<arrTop[0]){
                $navLi.parent().removeClass('on');
            }
        }
    });

    let idx = null;
    $nav.on('mouseover',function(){
        $lnbBG.stop().slideDown();
        $lnb.stop().slideDown();
    });
    $nav.on('mouseout',function(){
        $lnbBG.stop().slideUp();
        $lnb.stop().slideUp();
    });
    $lnbBG.on('mouseover',function(){
        $nav.trigger('mouseover')
    });
    $lnbBG.on('mouseout',function(){
        $nav.trigger('mouseout')
    });
    header.find('.logo>a').on('click',function(){
        $('html,body').stop().animate({
            scrollTop:0
        },400);
    });

    //visual
    const $visual = $('section.visual > .visual-con');
    $(window).load(function(){
        $visual.css({
            animation :'visualAni 1.5s'
        })
    });
    
    //new product
    const $newSlide = $('section.new > .new-con > .slide > .Nslide-con');
    const $newSlideText = $('section.new > .new-con > .new-text > ul');
    const btnPrev = $('section.new > .new-con > .slide > .prev > a');
    const btnNext = $('section.new > .new-con > .slide > .next > a');
    const indicator = $('section.new > .new-con > .slide > .indicator > span');
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop>$('section.new').offset().top/2){
            $('section.new').find('h2').fadeIn(600);
            $('section.new').find('.slide').fadeIn(600);
            $('section.new').find('.new-text').fadeIn(600);

        }else if(scrollTop<$('section.new').offset().top/2){
            $('section.new').find('h2').fadeOut(600);
            $('section.new').find('.slide').fadeOut(600);
            $('section.new').find('.new-text').fadeOut(600);
        }
    });

    btnPrev.on('click',function(){
        if(idx>0){
            idx--;
        }else{
            idx=3;
        }
        indicator.eq(idx).addClass('on').siblings().removeClass('on');
        $newSlide.stop().animate({
            left:-1500
        },600,function(){
            $('section.new > .new-con > .slide > .Nslide-con').children('p').last().prependTo($newSlide);
            $newSlide.css({left:-2000})
        });
        $newSlideText.stop().animate({
            left:850 * -3
        },600,function(){
            $('section.new > .new-con > .new-text > ul').children('li').last().prependTo($newSlideText);
            $newSlideText.css({left:850 * -4})
        });
    });
    btnNext.on('click',function(){
        if(idx<3){
            idx++;
        }else{
            idx=0;
        }
        indicator.eq(idx).addClass('on').siblings().removeClass('on');
        $newSlide.stop().animate({
            left: -2500 
        },600,function(){
            $('section.new > .new-con > .slide > .Nslide-con').children('p').first().appendTo($newSlide);
            $newSlide.css({left:-2000})
        });
        $newSlideText.stop().animate({
            left:850 * -5
        },600,function(){
            $('section.new > .new-con > .new-text > ul').children('li').first().appendTo($newSlideText);
            $newSlideText.css({left:850 * -4})
        });
    });


    //product
    const verLine = $('section.product > .product-con > .line > span.ver');
    const horLine = $('section.product > .product-con > .line > span.hor');
    const product = $('section.product > .product-con > .pdIMG-con');
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop>1300){
            verLine.css({
                animation : 'verline 2s alternate forwards'
            });
            horLine.css({
                animation : 'horline 2s alternate forwards'
            });
            product.css({
                animation :'productImg 2s alternate forwards'
            });
        }else{
            verLine.css({
                animation : 'verlineRe 2s alternate forwards'
            });
            horLine.css({
                animation : 'horlineRe 2s alternate forwards'
            });
            product.css({
                animation :'productImgRe 2s alternate forwards'
            });
        }
    });

    //service 
    const service = $('section.service');
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        if(scrollTop>service.offset().top-300){
            service.find('.service-con').css({
                animation:'service 1.5s forwards'
            });
        }else {
            service.find('.service-con').css({
                animation:'serviceRe 1.5s forwards'
            });
        }
    });

    //aside
    const $topBtn = $('aside > p > a');
    $topBtn.on('click',function(){
        $('html,body').stop().animate({
            scrollTop : 0
        });
    });
    $(window).on('scroll',function(){
        const scroll = $(this).scrollTop();
        const view = (scroll + $(this).height()) -$('footer').offset().top;
        if (view>0) {
            $('aside').css({
                marginBottom : view
            });
        }else{
            $('aside').css({
                marginBottom: 0
            });
        }
    });
});