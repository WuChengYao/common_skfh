// 側邊選單
$('#header__btn').click(function () {
    $('#Slidebars').toggleClass("active")
    $('.wrap').toggleClass("SlidebarsAct")
    console.log($('body'))
})
$('.Slidebars').click(function (e) {
    e.stopPropagation()
    if (e.target.id === 'Slidebars') {
        $('#Slidebars').removeClass("active")
        $('.wrap').removeClass("SlidebarsAct")
    }
    console.log(e.target.id)
})



$('#vacation_type').change(function () {
    if ($('#vacation_type')[0].value === "產假") {
        $('.birth').removeClass('d-none')
    } else {
        $('.birth').addClass('d-none')
    }
})



// 請假期間
var start_year,start_month,start_date,end_year,end_month,end_date;

$('#date-start').click(function(){
    var year = $('#year-start')
    var day = $('#day-start')
    if(year.hasClass('d-block')){
        year.toggleClass('d-block')
    }
    else if (day.hasClass('d-block')){
        day.toggleClass('d-block')
    }
    else{
        year.toggleClass('d-block')
        $('#year-end').removeClass('d-block')
        $('#day-end').removeClass('d-block')
    }
})

$('#year-start .month').click(function(){
    $('#year-start').toggleClass('d-block')
    $('#day-start').toggleClass('d-block')
    start_month =  $(this).data('date');
})

$('#day-start .calendar__content__week.day span').click(function(){
    start_date =  $(this).data('date');
    $('#date-start').val(`2018/${start_month}/${start_date}`);
    $('#day-start').removeClass('d-block');
});

//

$('#date-end').click(function(){
    var year = $('#year-end')
    var day = $('#day-end')
    if(year.hasClass('d-block')){
        year.toggleClass('d-block')
    }
    else if (day.hasClass('d-block')){
        day.toggleClass('d-block')
    }
    else{
        year.toggleClass('d-block')
        $('#year-start').removeClass('d-block')
        $('#day-start').removeClass('d-block')
    }
})

$('#year-end .month').click(function(){
    $('#year-end').toggleClass('d-block')
    $('#day-end').toggleClass('d-block')
    end_month =  $(this).data('date');
})

$('#day-end .calendar__content__week.day span').click(function(){
    end_date =  $(this).data('date');
    $('#date-end').val(`2018/${end_month}/${end_date}`);
    $('#day-end').removeClass('d-block');
});


// 請假期間 
$(".apply_type_select").click(function () {
    var apply_type_index = $(".apply_type_select").index(this);
    var option_items=[];

    $('.apply_type_select').removeClass("active");
    $(this).addClass('active');

    if(apply_type_index === 0){

        $("#apply_type_radio_1").attr("checked", true);
        $("#apply_type_radio_2").attr("checked", false);
        option_items = [
            {text:'請選擇',value:''},
            {text:'特別休假',value:'特別休假'},
            {text:'產假',value:'產假'},
            {text:'普通傷病假(未住院)',value:'普通傷病假(未住院)'},
            {text:'事假',value:'事假'}];
    }else{
        $("#apply_type_radio_1").attr("checked", false);
        $("#apply_type_radio_2").attr("checked", true);
        option_items = [
            {text:'請選擇',value:''},
            {text:'忘記刷卡',value:'忘記刷卡'},
            {text:'誤點',value:'誤點'}];
    }
    //clear all select options
    $("#vacation_type").empty();
    //change select options
    $.each(option_items, function (i, item) {

        $('#vacation_type').append($('<option>', {
            value: item.value,
            text : item.text
        }));
    });
});