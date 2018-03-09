/**
 * Created by Admin on 2018/1/27.
 */
window.onload=function () {
// //banner
//     let div=document.querySelector('.banner_img');
//     let img=document.querySelectorAll('.b_img li');
//     let left=document.querySelector('.jiantou_left');
//     let right=document.querySelector('.jiantou_right');
//     let circle=document.querySelectorAll('.lunbodian li')
//     let n=0;
//     function move() {
//         n++;
//         if(n==img.length){
//             n=0;
//         }
//         img.forEach(function (value,index) {
//             value.classList.remove('active');
//             circle[index].classList.remove('act');
//         })
//         img[n].classList.add('active');
//         circle[n].classList.add('act');
//     }
//     let time=setInterval(move,2000);
//     div.onmouseover=function () {
//         clearInterval(time);
//     }
//     div.onmouseout=function () {
//         time=setInterval(move,2000);
//     }
//     right.onclick=function () {
//         move()
//     }
//     left.onclick=function () {
//         n--;
//         if(n<0){
//             n=img.length-1;
//         }
//         img.forEach(function (value,index) {
//             value.classList.remove('active');
//             circle[index].classList.remove('act');
//         })
//         img[n].classList.add('active');
//         circle[n].classList.add('act');
//     }
//     circle.forEach(function (value,index) {
//         value.onclick=function () {
//             circle.forEach(function (val,ind) {
//                 val.classList.remove('act');
//                 img[ind].classList.remove('active');
//             })
//             this.classList.add('act');
//             img[index].classList.add('active');
//         }
//     })
//排行榜
//     let now_2=0;
//     let next_2=0;
//     let haohuo_bottom=document.querySelector('.haohuo_bottom');
//     let phb_list=document.querySelectorAll('.haohuo_bottom_list');
//     let phb_left=document.querySelector('.phb_left');
//     let phb_right=document.querySelector('.phb_right');
//     let width_2=parseInt(getComputedStyle(haohuo_bottom,null).width);
//     let dian=document.querySelectorAll('.dian');
//     let start=true;
//     phb_right.onclick=function () {
//         if(!start){
//             return;
//         }
//         start=false;
//         next_2=now_2+1;
//         if(next_2>=phb_list.length){
//             next_2=0;
//         }
//         phb_list[next_2].style.left='100%';
//         animate(phb_list[now_2],{left:-width_2});
//         animate(phb_list[next_2],{left:0},function () {
//             start=true;
//         });
//         dian[now_2].classList.remove('phb');
//         dian[next_2].classList.add('phb');
//         now_2=next_2;
//     }
//     phb_left.onclick=function () {
//         if(!start){
//             return;
//         }
//         start=false;
//         next_2=now_2-1;
//         if(next_2<0){
//             next_2=phb_list.length-1;
//         }
//         phb_list[next_2].style.left='-100%';
//         animate(phb_list[now_2],{left:width_2});
//         animate(phb_list[next_2],{left:0},function () {
//             start=true;
//         });
//         dian[now_2].classList.remove('phb');
//         dian[next_2].classList.add('phb');
//         now_2=next_2;
//     }
//     dian.forEach(function (value,index) {
//         value.onclick=function () {
//             if(index>now_2){
//                 if(!start){
//                     return;
//                 }
//                 start=false;
//                 phb_list[index].style.left='100%';
//                 animate(phb_list[now_2],{left:-width_2});
//                 animate(phb_list[index],{left:0},function () {
//                     start=true;
//                 });
//                 dian.forEach(function (val) {
//                     val.classList.remove('phb');
//                 })
//                 value.classList.add('phb');
//                 now_2=index;
//             }
//             else if(index<now_2){
//                 if(!start){
//                     return;
//                 }
//                 start=false;
//                 phb_list[index].style.left='-100%';
//                 animate(phb_list[now_2],{left:width_2});
//                 animate(phb_list[index],{left:0},function () {
//                     start=true;
//                 });
//                 dian.forEach(function (val) {
//                     val.classList.remove('phb');
//                 })
//                 value.classList.add('phb');
//                 now_2=index;
//             }
//
//         }
//     })

//大聚惠
    let chose=document.querySelectorAll('.dajuhui_top a.dajuhui_top_center');
    let main=document.querySelectorAll('.djh_bottom_left');
    let djh_left=document.querySelector('.djh_jt_left');
    let djh_right=document.querySelector('.djh_jt_right');
    let now_3=0;
    let next_3=0;
    chose.forEach(function (value,index) {
        value.onmouseover=function () {
            main.forEach(function (val_) {
                val_.style.left='0';
            })
            chose.forEach(function (val,ind) {
                val.classList.remove('active_');
                main[ind].classList.remove('mainactive_');
            })
            this.classList.add('active_');
            main[index].classList.add('mainactive_');
            now_3=index;
        }
    })
    djh_right.onclick=function () {
        next_3=now_3+1;
        if(next_3>=main.length){
            next_3=0;
        }
        main[next_3].style.left='100%';
        animate(main[now_3],{left:-1000});
        animate(main[next_3],{left:0});
        main[next_3].classList.add('mainactive_');
        chose[now_3].classList.remove('active_');
        chose[next_3].classList.add('active_');
        now_3=next_3;
    }
    djh_left.onclick=function () {
        next_3=now_3-1;
        if(next_3<0){
            next_3=main.length-1;
        }
        main[next_3].style.left='-100%';
        animate(main[now_3],{left:1000});
        animate(main[next_3],{left:0});
        main[next_3].classList.add('mainactive_');
        chose[now_3].classList.remove('active_');
        chose[next_3].classList.add('active_');
        now_3=next_3;
    }

//floor
    function Floor(floor_,asides_,aside_,back_,a,b,hidden_,somewhere_) {
        let floor=document.querySelectorAll(floor_);//楼层
        let wh=document.documentElement.clientHeight;//窗口高度
        let asides=document.querySelector(asides_);//侧导航
        let aside=document.querySelectorAll(aside_);//侧导航中的每一个导航
        let back=document.querySelector(back_);//返回顶部
        let hidden=document.querySelector(hidden_);//滚动后出现的搜索框
        let somewhere=document.querySelector(somewhere_);//在banner的位置出现搜索框
        let flag=true;
        window.onscroll=function () {
            let tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
            if(tops>=somewhere.offsetTop){
                hidden.style.display='block';
            }
            else {
                hidden.style.display='none';
            }
            if(!flag){
                return;
            }
            floor.forEach(function (val,ind) {
                if(tops>=val.offsetTop+200-wh){
                    asides.classList.add(a);//将含有display:block的类名赋给侧导航，侧导航出现
                    aside.forEach(function (value) {
                        value.classList.remove(b);
                    })
                    aside[ind].classList.add(b);//将含有颜色的类名赋给导航
                }
                if(tops<=floor[0].offsetTop+200-wh){
                    asides.classList.remove(a);
                }
            })
            aside.forEach(function (value,index) {
                value.onclick=function () {
                    flag=false;
                    animate(document.body,{scrollTop:floor[index].offsetTop-50},200,function () {
                        flag=true;
                    });
                    animate(document.documentElement,{scrollTop:floor[index].offsetTop-50},200,function () {
                        flag=true;
                    });
                    aside.forEach(function (val) {
                        val.classList.remove(b);
                    })
                    this.classList.add(b);
                }
            })
        }
        back.onclick=function () {
            if(!flag){
                return;
            }
            flag=false;
            animate(document.body,{scrollTop:0},1000,function () {
                flag=true;
            });
            animate( document.documentElement,{scrollTop:0},1000,function () {
                flag=true;
            });
        }
    }
    Floor('div.floor','.gd_left','.gd_left ul .gd_list','.gd_left ul .backtop','appear','change','.hidden','.dajuhui');
//     $(window).scroll(function () {
//         let roll=$(document).scrollTop();
//         if(roll>=$('.dajuhui').offset().top){
//             $('.gd_left').show()
//             $('.hidden').show();
//         }
//         else {
//             $('.gd_left').hide();
//             $('.hidden').hide();
//         }
//         $('.floor').each(function () {
//             let hei=$(this).offset().top;
//             let ind=$(this).index();
//             if(roll>=hei){
//                 $('.gd_list').eq($(this).index()-4).addClass('change').siblings().removeClass('change');
//             }
//             console.log(ind);
//         })
//     })
//         $('.gd_list').click(function () {
//             let heigh=$('.floor').eq($(this).index()-1).offset().top-50;
//             $('body,html').animate({scrollTop:heigh},500)
//             console.log($('.floor').eq($(this).index()))
//             console.log($(this).index()-1)
//         })
//         $('.backtop').click(function () {
//             $('body,html').animate({scrollTop:0},500);
//         })


//happy
    function happy() {
        let now=0;
        let next=0
        let happy_bottom=$('.happy_bottom');
        let happy=$('.happy_list');
        let h_left=$('.h_left');
        let h_right=$('.h_right');
        let width=$('.happy_bottom').width();
        h_right.click(function () {
            next=now+1;
            if(next>=happy.length){
                next=0;
            }
            happy.eq(next).css('left','100%');
            happy.eq(now).animate({left:-width},500);
            happy.eq(next).animate({left:0},500);
            now=next;
        })
        h_left.click(function () {
            next=now-1;
            if(next<0){
                next=happy.length-1;
            }
            happy.eq(next).css('left','-100%');
            happy.eq(now).animate({left:width},500);
            happy.eq(next).animate({left:0},500);
            now=next;
        })
    }
    happy();

// //card
//     let menu_box=document.querySelector('.menu_bigbox');
//     let menu_list=document.querySelectorAll('.menu_list');
//     let card=document.querySelector('.card');
//     let card_list=document.querySelectorAll('.card_list');
//     menu_box.onmouseenter=function () {
//         card.classList.add('block');
//         menu_list.forEach(function (value,index) {
//             value.onmouseenter=function () {
//                 card_list.forEach(function (val,ind) {
//                     val.classList.remove('come');
//                     menu_list.forEach(function (vals) {
//                         vals.classList.remove('come');
//                     })
//                     value.classList.add('come');
//                 })
//                 card_list[index].classList.add('come');
//                 card.style.zIndex=20;
//             }
//         })
//     }
//     menu_box.onmouseleave=function () {
//         card.classList.remove('block');
//         menu_list.forEach(function (vals) {
//             vals.classList.remove('come');
//         })
//     }




    function phb() {
        let nowphb=0;
        let nextphb=0;
        let widphb=$('.paihangbang_jiantou').width();
        let lenphb=$('.haohuo_bottom_list').length;
        $('.phb_right').click(function () {
            nextphb=nowphb+1;
            if(nextphb>=lenphb){
                nextphb=0;
            }
            $('.haohuo_bottom_list').eq(nextphb).css('left','100%');
            $('.haohuo_bottom_list').eq(nowphb).animate({left:-widphb},500)
            $('.haohuo_bottom_list').eq(nextphb).animate({left:0},500);
            $('.dian').eq(nextphb).addClass('d_phb').siblings().removeClass('d_phb');
            nowphb=nextphb;
        });
        $('.phb_left').click(function () {
            nextphb=nowphb-1;
            if(nextphb<0){
                nextphb=lenphb-1;
            }
            $('.haohuo_bottom_list').eq(nextphb).css('left','-100%');
            $('.haohuo_bottom_list').eq(nowphb).animate({left:widphb},500)
            $('.haohuo_bottom_list').eq(nextphb).animate({left:0},500);
            $('.dian').eq(nextphb).addClass('d_phb').siblings().removeClass('d_phb');
            nowphb=nextphb;
        });
        $('.dian').click(function () {
            if($(this).index()>nowphb){
                $('.haohuo_bottom_list').eq($(this).index()).css('left','100%');
                $('.haohuo_bottom_list').eq(nowphb).animate({left:-widphb},500)
                $('.haohuo_bottom_list').eq($(this).index()).animate({left:0},500);
                nowphb=$(this).index();
            }
            if($(this).index()<nowphb){
                $('.haohuo_bottom_list').eq($(this).index()).css('left','-100%');
                $('.haohuo_bottom_list').eq(nowphb).animate({left:widphb},500)
                $('.haohuo_bottom_list').eq($(this).index()).animate({left:0},500);
                nowphb=$(this).index();
            }
            $(this).addClass('d_phb').siblings().removeClass('d_phb');
        })
    }
    phb();



//右固定屏
    let icon=document.querySelectorAll('.icon_bb');
    let icon_=document.querySelectorAll('.icon_bb .icon_a');
    let icon_hidden=document.querySelectorAll('.icon_hidden_box');
    icon.forEach(function (value,index) {
        value.onmouseenter=function () {
            icon_[index].onmouseenter=function () {
                icon_hidden.forEach(function (value) {
                    value.classList.remove('icon_color');
                })
                this.style.background='#ffaa01';
                let icon_width=parseInt(getComputedStyle(icon_hidden[index],null).width);
                animate(icon_hidden[index],{left:-icon_width},150);
            }
            icon_[index].onmouseleave=function () {
                this.style.background='#ffaa01';
            }
        }
        value.onmouseleave=function () {
            icon_hidden[index].classList.add('icon_color');
            animate(icon_hidden[index],{left:0},150);
            icon_[index].style.background='#383838';
        }

    })


// //导航 移出屏
//     function daohang(box,daohang_a,hidden,height,White) {
//         let Box=document.querySelector(box);
//         let dh_a=document.querySelector(daohang_a);
//         let hid=document.querySelector(hidden);
//         let white=document.querySelector(White);
//         Box.onmouseenter=function () {
//             Box.classList.add('hidden_style');
//             white.classList.add('white');
//             dh_a.classList.add('jt_color');
//             animate(hid,{height:height},200);
//             hid.classList.add('hidden_style');
//         }
//         Box.onmouseleave=function () {
//             Box.classList.remove('hidden_style');
//             white.classList.remove('white');
//             dh_a.classList.remove('jt_color');
//             animate(hid,{height:0},200);
//             hid.classList.remove('hidden_style');
//         }
//     }
//     daohang('.dh','#website','.daohang_hidden',230,'.dh_white');
//     daohang('#shangjia','.shangjia','.shangjia_hidden',124,'.shangjia_white');
//     daohang('#kehu','.kehu','.kehu_hidden',124,'.kehu_white');
//     daohang('#dd','#dingdan','.dd_hidden',127,'.dingdan_white');
//     daohang('#yg','#yigou','.yigou_hidden',163,'.yigou_white');
//     daohang('#shouji','#suning','.shouji_hidden',222,'.shouji_white');

//视频
    function video() {
        let Now=0;
        let next_4=0;
        let shipins=$('.small_shipin_list');
        let right_4=$('.sp_right');
        let left_4=$('.sp_left');
        right_4.click(function () {
            next_4=Now+1;
            if(next_4>=shipins.length){
                next_4=0;
            }
            shipins.eq(next_4).css('left','100%');
            shipins.eq(Now).animate({left:-390},500);
            shipins.eq(next_4).animate({left:0},500);
            Now=next_4;
        })
        left_4.click(function () {
            next_4=Now-1;
            if(next_4<0){
                next_4=shipins.length-1;
            }
            shipins.eq(next_4).css('left','-100%');
            shipins.eq(Now).animate({left:390},500);
            shipins.eq(next_4).animate({left:0},500);
            Now=next_4;
        })
    }
    video();





//nav
    function show(a,b,hid,white) {
        $(a).mouseenter(function () {
            $(a).addClass('hidden_style');
            $(b).addClass('jt_color')
            tt=setTimeout(function () {
                $(hid).slideDown('fast').addClass('hidden_style');
            },500)
            $(white).addClass('white')
        }).mouseleave(function () {
            $(a).removeClass('hidden_style');
            $(b).removeClass('jt_color');
            clearTimeout(tt);
            $(hid).slideUp('fast').removeClass('hidden_style');
            $(white).removeClass('white')
        })
    }
    show('#website','.daohang','.daohang_hidden','.dh_white');
    show('#shangjia','.shangjia','.shangjia_hidden','.shangjia_white');
    show('#kehu','.kehu','.kehu_hidden','.kehu_white');
    show('#dd','#dingdan','.dd_hidden','.dingdan_white');
    show('#yg','#yigou','.yigou_hidden','.yigou_white');
    show('#shouji','#suning','.shouji_hidden','.shouji_white');
//card
    function card() {
        $('.menu_list').mouseenter(function () {
            $('.card').show();
            $('.card_list').eq($(this).index()).show().siblings().hide();
            $(this).addClass('come').siblings().removeClass('come');
        });
        $('.menu_bigbox').mouseleave(function () {
            $('.card').hide();
            $('.menu_list').mouseleave(function () {
                $(this).removeClass('come');
            })
        })
    }
    card();
//banner
    let i=0;
    let len=$('.b_img li').length;
    function banner() {
        i++;
        if(i>=len){
            i=0;
        }
        $('.b_img li').eq(i).addClass('active').siblings().removeClass('active');
        $('.lunbodian li').eq(i).addClass('act').siblings().removeClass('act');
    }
    $('.jiantou_right').click(function () {
        i++;
        if(i>=len){
            i=0;
        }
        $('.b_img li').eq(i).addClass('active').siblings().removeClass('active');
        $('.lunbodian li').eq(i).addClass('act').siblings().removeClass('act');
    })
    $('.jiantou_left').on('click',function () {
        i--;
        if(i<0){
            i=len-1;
        }
        $('.b_img li').eq(i).addClass('active').siblings().removeClass('active');
        $('.lunbodian li').eq(i).addClass('act').siblings().removeClass('act');
    })
    $('.lunbodian li').click(function () {
        $(this).addClass('act').siblings().removeClass('act');
        $('.b_img li').eq($(this).index()).addClass('active').siblings().removeClass('active');
        i=$(this).index();
    })
    let time=setInterval(banner,2000);
    $('.banner_img').mouseenter(function () {
        clearInterval(time)
    }).mouseleave(function () {
        time=setInterval(banner,2000);
    })


}