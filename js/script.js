$(function(){
    let n=0;
    viewSlide(n);

    $('.slide-left').click(function(){
        n--;
        if(n < 0 ){
            n=4;
        }
        viewSlide(n);
    });

    $('.slide-right').click(function(){
        n++;
        if(n > 4 ){
            n=0;
        }
        viewSlide(n);
    });

    $('.small-list').hover(function(){
        $(this).find('.small-navbox').toggle();
    });

    /*검색이벤트*/
    $('.search-select').click(function(){
        if($(this).find('.fa-solid').hasClass('fa-angle-down')){
        $(this).find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');

        $('.select-value').slideDown(100);
        }
        else{
            $(this).find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
            $('.select-value').slideUp(100);
        }
    }) ;

    $('.select-value li').click(function(){
        const txt = $(this).text();  // 선택한 텍스트 가져옴

        $('.select-value li').removeClass('active');  // li에 모든 active를 지운다.
        $(this).addClass('active'); // 선택한 li에 active를 준다.

        $('.search-select>span').text(txt); // span에 가져온 text를 입력.
        $('.search-form').focus();
    });

    $('.slider-list li').mouseenter(function(){
        $('.slider-list li').removeClass('active');
        $(this).addClass('active');
        
    });
    // $('.click').click(function(){
    //     autoSlide();
    // })

    setInterval(autoSlide, 10000);


    $.ajax({
        type :'get',
        url:'../data/list.json',
        dataType:'json',
        success:function(data){

            // console.log(data.list);

            let li="";

            const rs = data.list;
            const lists = rs.filter((item, index) => index < 10);
            // console.log(lists);

            for(let i=0; i<data.list.length; i++){
                li +=`<li>
                <a href="#">
                <div class="d-flex align-items-center">                                                        
                    <div class="img-thumb">
                        <img src="images/list/${lists[i].img}" alt="pop01">
                    </div>
                    <p class="pop-num">${i+1}</p>
                    <p class="pop-text">
                        ${data.list[i].title}
                    </p>
                    <p class="pop-cafe-list"> ${data.list[i].cafename}</p>
                    <span class="pop-comment">${data.list[i].comment}</span>

                </div>
                    
                </a>
           </li>`;

        //    li +=`<li>
        //         <a href="#">
        //         <div class="d-flex align-items-center">                                                        
        //             <div class="img-thumb">
        //                 <img src="images/list/${data.list[i].img}" alt="pop01">
        //             </div>
        //             <p class="pop-num">${i+1}</p>
        //             <p class="pop-text">
        //                 ${data.list[i].title}
        //             </p>
        //             <p class="pop-cafe-list"> ${data.list[i].cafename}</p>
        //             <span class="pop-comment">${data.list[i].comment}</span>

        //         </div>
                    
        //         </a>
        //    </li>`;

      

           $('.pop-list').html(li);

            }
            // console.log(li);
           

        },
        error:function(request, status,error){
            console.log(error);
        }
        
    });



}); // jquery

    // $('.slide-btn').click(function(e){
    //     e.preventDefault();  // a태그 기능 x
    //     // alert("클릭");
    //     //1. 현재 보여지고 있는 row의 순서값을 받는다.
    //     //z-index가 있는 row
    //     $('.slide-row').each(function(item,index){
    //         if($(this.hasClass('zindex')))
    //     }

   function autoSlide(){
        let slide = $('.slide-row');
        let index = slide.index($('.zindex')); // zindex가 위치한 순서를 읽어옴
        // alert(index);
        
        if(index == 4){ // 4보다 높으면 0으로 초기화
            n = 0;
        
        }else{
            n= index+1;
        }
        viewSlide(n);



   }


    function viewSlide(n) {
        $('.slide-row').removeClass('zindex');

        $('.slide-row').eq(n).addClass('zindex');
        $('.slider-list>li').css({
            opacity:0,
            top:'30px',
            position:'relative'
        });
        
        $('.slider-list>li').animate({
            opacity:1,
            top:'0px'
        }, 500);
    }    


  
  
