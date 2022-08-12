$('.pp.slider').slick({
    dots: true
});
$('.dd.slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '25%',
    responsive: [
        {
        breakpoint: 480, 
        settings: {
            centerMode: false,
            centerPadding: '0%',
        }
    }
    ]
});
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });
    
    $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    });