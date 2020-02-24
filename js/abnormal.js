// $('.notic_btn').click(function () {
//     $('.notic_btn').removeClass('active');
//     $(this).addClass('active');
//     var index = $('.notic_btn').index(this);
//     $('.notic_content').removeClass('active');
//     $(`.notic_content:nth-child(${index+1})`).addClass('active');
// });

$('.nl__navbar__btn').click(function () {
    $('.nav__listWrap').toggleClass("active")
})
$('.nav__listWrap').click(function (e) {
    e.stopPropagation()
    if (e.target.id === 'nav__listWrap') {
        $('.nav__listWrap').removeClass("active")
    }
    console.log(e.target.id)
})

$('#tab1').click (function () {
    $('#tab1').addClass('active')
    $('#tab2').removeClass('active')
    $('#tab3').removeClass('active')
    $('.abnormal').removeClass('d-none')
    $('.complete').addClass('d-none')
    $('.announcement').addClass('d-none')
    $('.dateInfo span').removeClass('invisible')

    if($('.notic_content').hasClass('d-block') == true){ 
        $('.notic_content').removeClass('d-block');
    }
})
$('#tab2').click(function () {
    $('#tab2').addClass('active')
    $('#tab1').removeClass('active')
    $('#tab3').removeClass('active')
    $('.abnormal').addClass('d-none')
    $('.complete').removeClass('d-none')
    $('.announcement').addClass('d-none')
    $('.dateInfo span').removeClass('invisible')

    if($('.notic_content').hasClass('d-block') == true){ 
        $('.notic_content').removeClass('d-block');
    }
})
$('#tab3').click(function () {
    $('#tab3').addClass('active')
    $('#tab2').removeClass('active')
    $('#tab1').removeClass('active')
    $('.abnormal').addClass('d-none')
    $('.complete').addClass('d-none')
    $('.announcement').removeClass('d-none')
    $('.dateInfo span').addClass('invisible')
    
    if($('.notic_content').hasClass('d-block') == true){ 
        $('.notic_content').removeClass('d-block');

    }
})

$('.noticeBox__btnBox__btn').click(function () {
    $('.body').removeClass('d-none')
    $('#tab1').addClass('active')
    $('#tab2').removeClass('active')
    $('#tab3').removeClass('active')
    $('.abnormal').removeClass('d-none')
    $('.complete').addClass('d-none')
    $('.announcement').addClass('d-none')
    $('.dateInfo span').removeClass('invisible')
    $('.noticeBox').addClass('d-none')
})

$('.change-detail').click(function(){
    $('.notic_main').addClass('d-block');
    $('.complete').addClass('d-none');
})

function back_to_complete() {
    $('.notic_main').removeClass('d-block');
    $('.complete').removeClass('d-none');
}

$('.announce').click(function(){
    $('.noticplacard_main').addClass('d-block');
    $('.announcement').addClass('d-none');
})

function back_to_announcement() {
    $('.noticplacard_main').removeClass('d-block');
    $('.announcement').removeClass('d-none');
}