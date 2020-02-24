$("#checkAll").click(function () {
    if ($("#checkAll").prop("checked")) {
        $("input[name='checkbox']").prop("checked", true)
    } else {
        $("input[name='checkbox']").prop("checked", false)
    }
});

$("#checkAll_mb").click(function () {
    if ($("#checkAll_mb").prop("checked")) {
        $("input[name='checkbox']").prop("checked", true)
    } else {
        $("input[name='checkbox']").prop("checked", false)
    }
});



$('.navbar__btn').click(function () {
    $('.nav__listWrap').toggleClass("active")
})
$('.nav__listWrap').click(function (e) {
    e.stopPropagation()
    if (e.target.id === 'nav__listWrap') {
        $('.nav__listWrap').removeClass("active")
    }
    console.log(e.target.id)
})

$('#cate-pad').change(function () {
    console.log($(this).val());
    if ($(this).val() === "leave") {
        $('.leaveCate-pad').removeClass('d-none');
    } else {
        $('.leaveCate-pad').addClass('d-none');
    }
});

$('#cate').change(function () {
    console.log($(this).val());
    if ($(this).val() === "leave") {
        $('.leaveCate').removeClass('d-none');
    } else {
        $('.leaveCate').addClass('d-none');
    }
});

$('#cate-pad').change(function () {
    console.log($(this).val());
    if ($(this).val() === "personnel") {
        $('.personnelList-pad').removeClass('d-none');
    } else {
        $('.personnelList-pad').addClass('d-none');
    }
});

$('#cate').change(function () {
    console.log($(this).val());
    if ($(this).val() === "personnel") {
        $('.personnelList').removeClass('d-none');
    } else {
        $('.personnelList').addClass('d-none');
    }
});

// 請假期間
var start_date;
var start_year = $('#start-year')
var start_month = $('#start-month')


// 控制月份往前
function start_prev_btn(){
    var oldmonth = start_month.text()
    var oldyear = start_year.text()

    if(oldmonth == 1){
        oldmonth = 13;
        oldyear = oldyear - 1;
    }
    else if (oldmonth <= 10){
        oldmonth = '0' + (oldmonth - 1)
    }
    else{
        oldmonth = oldmonth - 1
    }

    return start_year.text(oldyear),start_month.text(oldmonth);
}

// 控制月份往後
function start_next_btn(){
    var newmonth = start_month.text()
    var newyear = start_year.text()

    if(newmonth == 13){
        newmonth = '0'+ 1;
        newyear = Number(start_year.text()) + 1
    }
    else if (Number(newmonth) >= 9){
        newmonth = Number(start_month.text()) + 1
    }
    else{
        newmonth ='0' + (Number(start_month.text()) + 1)
    }

    return start_year.text(newyear),start_month.text(newmonth);
}

$('#date-start').click(function () {
    $('#day-start').toggleClass('d-block')
    $('.block').addClass('d-block')
    $('#date-start').blur()
})

$('.block').click(function () {
    $('#day-start').removeClass('d-block')
    $('#day-end').removeClass('d-block')
    $('#birth-day-start').removeClass('d-block')
    $('.block').removeClass('d-block')
})

$('#day-start .calendar__content__week.day span').not(".R").click(function () {
    start_date = $(this).data('date');

    $('#date-start input').val(`${start_year.text()}/${start_month.text()}/${start_date}`);


    $('#day-start').removeClass('d-block');
    $('.block').removeClass('d-block')
});

var end_date;
var end_year = $('#end-year')
var end_month = $('#end-month')

// 控制月份往前
function end_prev_btn(){
    var oldmonth = end_month.text()
    var oldyear = end_year.text()

    if(oldmonth == 1){
        oldmonth = 13;
        oldyear = oldyear - 1;
    }
    else if (oldmonth <= 10){
        oldmonth = '0' + (oldmonth - 1)
    }
    else{
        oldmonth = oldmonth - 1
    }

    return end_year.text(oldyear),end_month.text(oldmonth);
}

// 控制月份往後
function end_next_btn(){
    var newmonth = end_month.text()
    var newyear = end_year.text()

    if(newmonth == 13){
        newmonth = '0'+ 1;
        newyear = Number(end_year.text()) + 1
    }
    else if (Number(newmonth) >= 9){
        newmonth = Number(end_month.text()) + 1
    }
    else{
        newmonth ='0' + (Number(end_month.text()) + 1)
    }

    return end_year.text(newyear),end_month.text(newmonth);
}

$('#date-end').click(function () {
    $('#day-end').toggleClass('d-block')
    $('.block').addClass('d-block')
    $('#date-end').blur()
})

$('#day-end .calendar__content__week.day span').not(".R").click(function () {
    end_date = $(this).data('date');
    console.log('fuck')
    $('#date-end input').val(`${end_year.text()}/${end_month.text()}/${end_date}`);
    $('#day-end').removeClass('d-block');
    $('.block').removeClass('d-block')
});

// 手機板

// 請假期間
var start_date;
var start_year_md = $('#start-year-md')
var start_month_md = $('#start-month-md')


// 控制月份往前
function md_start_prev_btn(){
    var oldmonth = start_month_md.text()
    var oldyear = start_year_md.text()

    if(oldmonth == 1){
        oldmonth = 13;
        oldyear = oldyear - 1;
    }
    else if (oldmonth <= 10){
        oldmonth = '0' + (oldmonth - 1)
    }
    else{
        oldmonth = oldmonth - 1
    }

    return start_year_md.text(oldyear),start_month_md.text(oldmonth);
}

// 控制月份往後
function md_start_next_btn(){
    var newmonth = start_month_md.text()
    var newyear = start_year_md.text()

    if(newmonth == 13){
        newmonth = '0'+ 1;
        newyear = Number(start_year_md.text()) + 1
    }
    else if (Number(newmonth) >= 9){
        newmonth = Number(start_month_md.text()) + 1
    }
    else{
        newmonth ='0' + (Number(start_month_md.text()) + 1)
    }

    return start_year_md.text(newyear),start_month_md.text(newmonth);
}

$('#date-start-md').click(function () {
    $('#day-start-md').toggleClass('d-block')
    $('.block').addClass('d-block')
    $('#date-start-md').blur()
})

$('.block').click(function () {
    $('#day-start-md').removeClass('d-block')
    $('#day-end-md').removeClass('d-block')
    $('#birth-day-start-md').removeClass('d-block')
    $('.block').removeClass('d-block')
})

$('#day-start-md .calendar__content__week.day span').not(".R").click(function () {
    start_date = $(this).data('date');

    $('#date-start-md').val(`${start_year_md.text()}/${start_month_md.text()}/${start_date}`);


    $('#day-start-md').removeClass('d-block');
    $('.block').removeClass('d-block')
});

var end_date;
var end_year_md = $('#end-year-md')
var end_month_md = $('#end-month-md')

// 控制月份往前
function md_end_prev_btn(){
    var oldmonth = end_month_md.text()
    var oldyear = end_year_md.text()

    if(oldmonth == 1){
        oldmonth = 13;
        oldyear = oldyear - 1;
    }
    else if (oldmonth <= 10){
        oldmonth = '0' + (oldmonth - 1)
    }
    else{
        oldmonth = oldmonth - 1
    }

    return end_year_md.text(oldyear),end_month_md.text(oldmonth);
}

// 控制月份往後
function md_end_next_btn(){
    var newmonth = end_month_md.text()
    var newyear = end_year_md.text()

    if(newmonth == 13){
        newmonth = '0'+ 1;
        newyear = Number(end_year_md.text()) + 1
    }
    else if (Number(newmonth) >= 9){
        newmonth = Number(end_month_md.text()) + 1
    }
    else{
        newmonth ='0' + (Number(end_month_md.text()) + 1)
    }

    return end_year_md.text(newyear),end_month_md.text(newmonth);
}

$('#date-end-md').click(function () {
    $('#day-end-md').toggleClass('d-block')
    $('.block').addClass('d-block')
    $('#date-end-md').blur()
})

$('#day-end-md .calendar__content__week.day span').not(".R").click(function () {
    end_date = $(this).data('date');
    $('#date-end-md').val(`${end_year_md.text()}/${end_month_md.text()}/${end_date}`);
    $('#day-end-md').removeClass('d-block');
    $('.block').removeClass('d-block')
});

$("#noneKeybord").click(function(){
    $(this).blur()
})

$(".btn").click(function(){
    $('i').removeClass("fa-caret-up")
    $(this).find('i').toggleClass("fa-caret-up");
});