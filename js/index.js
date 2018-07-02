


 $(function(){
        
  
   $(".header_right_kuang").mouseenter(function(){
  
    $(".header_kuang_tan").slideDown();
    })  

     $(".header_right_kuang").mouseleave(function(){
   
    $(".header_kuang_tan").slideUp();
    }) 




     $(".banner_aside li").mouseenter(function(){
       let index= $(this).index();
        $(".banner_aside_chu").css("display","none");
         $(".banner_aside_chu").eq(index).css({"display":"block"});
     });
     
      $(".banner_aside li").mouseleave(function(){ 
        $(".banner_aside_chu").css("display","none");
     });
      
      //banner
      let bannerli=$(".banner_img li img");
      let qiuli=$(".banner_qiu li ");
      let t=setInterval(move, 1000);
      let curindex=0;

      


      function move(){
          curindex++;

          if(curindex== bannerli.length){
            curindex=0;
          }
          
          bannerli.removeClass("bannerlunbo");
          bannerli.eq(curindex).addClass("bannerlunbo");
           qiuli.removeClass("qiubian").eq(curindex).addClass("qiubian");
      }

      
        $(".banner_qiul").click(function(){
          curindex--;
          if(curindex<0){
            curindex=bannerli.length-1;
          }
          bannerli.removeClass("bannerlunbo");
          bannerli.eq(curindex).addClass("bannerlunbo");
          qiuli.removeClass("qiubian").eq(curindex).addClass("qiubian");
        })
         
        $(".banner_qiur").click(function(){
          curindex++;

          if(curindex== bannerli.length){
            curindex=0;
          }
          
          bannerli.removeClass("bannerlunbo");
          bannerli.eq(curindex).addClass("bannerlunbo");
           qiuli.removeClass("qiubian").eq(curindex).addClass("qiubian");
        })


        $(".banner").mouseenter(function(){
          clearInterval(t);
        });
        
        $(".banner").mouseleave(function(){
          t=setInterval(move, 1000);
        });

     





      
      //家电
      $(".jiadian_headerR li").mouseenter(function(){
         let index= $(this).index();
         $(".jiadian_bottomR ul").css("display","none");
         $(".jiadian_bottomR ul").eq(index).css("display","block");
         $(".jiadian_headerR li").removeClass("active");
         $(this).addClass("active");
      });
      

      function dong(headerRli,bottomRul){
          $(headerRli).mouseenter(function(){
         let index= $(this).index();
         $(bottomRul).css("display","none");
         $(bottomRul).eq(index).css("display","block");
         $(headerRli).removeClass("active");
         $(this).addClass("active");
      }); 


      }




      //智能
      $(".zhineng_headerR li").mouseenter(function(){
        let v=$(this).index();
         $(".zhineng>.jiadian_bottom>.zhineng_bottomR>ul").css("display","none");
        $(".zhineng>.jiadian_bottom>.zhineng_bottomR>ul").eq(v).css("display","block");

         $(".zhineng_headerR li").removeClass("active");
         $(this).addClass("active");
      });

      //搭配
      let dapeiheaderR=$(".dapei_headerR li");
      let dapeibottomR=$(".dapei>.jiadian_bottom>.zhineng_bottomR>ul");
      dong(dapeiheaderR,dapeibottomR);

      //配件
      let peijianheaderR=$(".peijian_headerR>li");
      let peijianbottomR=$(".peijian>.jiadian_bottom>.zhineng_bottomR>ul");
      dong(peijianheaderR,peijianbottomR);
      
      //周边
      let zhoubianheaderR=$(".zhoubian_headerR>li");
      let zhoubianbottomR=$(".zhoubian>.jiadian_bottom>.zhineng_bottomR>ul");
      dong(zhoubianheaderR,zhoubianbottomR);



      //双下标
      
      
     
       function shuanfen(bottom_right, bottom_left,qiu,li1){

       let nowindex=0,nextindex=0;
        let widthyuan=li1.width();

      function run(type,widthyuan,qiu,li1){
        if(type=="next"){
          nextindex++;
        
           if(nextindex>=li1.length){
               nextindex=li1.length-1;
               return;
           }
           li1.eq(nextindex).css("left",296);
          li1.eq(nextindex).animate({left:"0"},1000 );
          li1.eq(nowindex).animate({left:-296},1000);
          qiu.removeClass("qiubian").eq(nextindex).addClass('qiubian');
          nowindex=nextindex;
        }
        else if(type=="prev"){
          nextindex--;
          if(nextindex<0){
             nextindex=0;
             return;
          }
          
          li1.eq(nextindex).css("left","-296px");
            qiu.removeClass("qiubian").eq(nextindex).addClass('qiubian');
           li1.eq(nextindex).animate({left:"0"},1000 );
           li1.eq(nowindex).animate({left:296},1000);

           nowindex=nextindex;
        }
      }
      
        
        let num=li1.length;
        
          bottom_right.click(function(){
        run("next",widthyuan,qiu,li1);
        
      })

       bottom_left.click(function(){
        run("prev",widthyuan,qiu,li1);
       
      })
       

       qiu.click(function(){
       let index= $(this).index();

        if(index>nowindex){
           nextindex=index-1;
         run("next",widthyuan,qiu,li1);
        }
       else{
          nextindex=index+1;
            run("prev",widthyuan,qiu,li1);
       }
        


       })
      }

      // 第一组
      let bottom_right=$(".neirong_bottom li:first .neirong_bottom_right");
      let bottom_left= $(".neirong_bottom li:first .neirong_bottom_left");
       let qiu=$(".neirong_bottom li:first .neirong_bottom_qiu>li");
       let li1=$(".neirong_bottom>li:first>.neirong_bottom_li1_1");
      shuanfen(bottom_right, bottom_left,qiu,li1);

      // 第二组
      let bottom_right2=$(".neirong_bottom li:nth-child(2) .neirong_bottom_right");
      let bottom_left2= $(".neirong_bottom li:nth-child(2) .neirong_bottom_left");
      let qiu2=$(".neirong_bottom li:nth-child(2) .neirong_bottom_qiu>li");
      let li12=$(".neirong_bottom>li:nth-child(2)>.neirong_bottom_li1_1");
      shuanfen(bottom_right2, bottom_left2,qiu2,li12);

      // 第三组
      
      let bottom_right3=$(".neirong_bottom li:nth-child(3) .neirong_bottom_right");
      let bottom_left3= $(".neirong_bottom li:nth-child(3) .neirong_bottom_left");
      let qiu3=$(".neirong_bottom li:nth-child(3) .neirong_bottom_qiu>li");
      let li13=$(".neirong_bottom>li:nth-child(3)>.neirong_bottom_li1_1");
      shuanfen(bottom_right3, bottom_left3,qiu3,li13);

      // 第四组
       
      let bottom_right4=$(".neirong_bottom li:nth-child(4) .neirong_bottom_right");
      let bottom_left4= $(".neirong_bottom li:nth-child(4) .neirong_bottom_left");
      let qiu4=$(".neirong_bottom li:nth-child(4) .neirong_bottom_qiu>li");
      let li14=$(".neirong_bottom>li:nth-child(4)>.neirong_bottom_li1_1");
      shuanfen(bottom_right4, bottom_left4,qiu4,li14);
      console.log(bottom_right4);
      
      let i=0;
      $(".star_btnR").click(function(){
        i++;
        let leftshu=1226*i;
        if(i>2){
          i=2;
          return;
        }

        if(i==1){
          $(".star_btnl").css("color","#BDB1B0");
           
        }
        if(i==2){
          $(".star_btnR").css("color","#E0E0E0");
        }
        $(".danpin2").animate({left:"-"+leftshu},0);
      })

        $(".star_btnl").click(function(){
        i--;
        let leftshu=1226*i;
        if(i<0){
          i=0;
          return;
        }

         if(i==1){
          $(".star_btnR").css("color","#BDB1B0");
           
        }
        if(i==0){
          $(".star_btnl").css("color","#E0E0E0");
        }
        $(".danpin2").animate({left:"-"+leftshu},0);
      })

      $(".logo3 li").mouseenter(function(){
          let i=$(this).index(".logo3 li");
          console.log(i)
          $(".logo3_xiala").css("display","none").eq(i).css("display","block");
      });

         $(".logo3 li").mouseleave(function(){
          let i=$(this).index(".logo3 li");
          console.log(i)
          $(".logo3_xiala").eq(i).css("display","none");
      });

      
   /*   $(".logo3_daohanga").mouseenter(function(){
          let i=$(this).index(".logo3_daohanga");
          console.log(i)
          $(".logo3_xiala").slideDown();
      });
        $(".logo3_daohanga").mouseleave(function(){
          let i=$(this).index(".logo3_daohanga");
          console.log(i)
          $(".logo3_xiala").slideUp();
      });*/













})

