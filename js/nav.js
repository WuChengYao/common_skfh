$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.cover').toggleClass('d-none')
    });

    $('#sidebar > div.cover').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.cover').toggleClass('d-none')
    });

    $('.navbar_icon .dropdown-toggle').on('click', function () {
        $('.navbar_icon .dropdown-menu').toggleClass('active');
        $('.cover').toggleClass('d-none')
    });

    // 初始化colaspedMenu
    $('.cover').click(function(){
        $('.cover').toggleClass('d-none')
        $('#sidebar').toggleClass('active');
        $('.list-unstyled').removeClass("collapse show")
        $('.list-unstyled').addClass("collapse")
        $('.level-1-ul > li > a').addClass("collapsed")
        $('.level-1-ul > li > a').attr("aria-expanded","false")
    })

    //點擊其他標題收合其他標題
    $('.level-1-ul > li > a').click(function(){
        // if($('.level-1-ul > li > ul').hasClass('show')){
        //     $('.level-1-ul > li > ul').not(this).removeClass('show')
        // }

        //remove all
        // $('.level-1-ul > li > ul').removeClass('show');
        
        //addthis
        // console.log(this);
        
        // $('').collapse('show')
        
    })

    //點擊收著的選單icon會啟動側邊選單

    $('#sidemenu_collapse_1').on('show.bs.collapse', function () {
        $('#sidebar').addClass('active');
        $('.cover').removeClass('d-none')
    });
    
    $('#sidemenu_collapse_2').on('show.bs.collapse', function () {
        $('#sidebar').addClass('active');
        $('.cover').removeClass('d-none')
    });

    $('#sidemenu_collapse_3').on('show.bs.collapse', function () {
        $('#sidebar').addClass('active');
        $('.cover').removeClass('d-none')
    });

    $('#sidemenu_collapse_4').on('show.bs.collapse', function () {
        $('#sidebar').addClass('active');
        $('.cover').removeClass('d-none')
    });

    $('#sidemenu_collapse_5').on('show.bs.collapse', function () {
        $('#sidebar').addClass('active');
        $('.cover').removeClass('d-none')
    });

    $('#sidemenu_collapse_6').on('show.bs.collapse', function () {
        $('#sidebar').addClass('active');
        $('.cover').removeClass('d-none')
    });

    //init calendar date
    var dt = new Date();
    $('.calendar-date').text(dt.getDate());
});