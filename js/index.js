function getDate (date) {
    $('#dateSelected')[0].innerText = date
}
    // 側邊選單
    $('#header__btn').click(function () {
        $('#Slidebars').toggleClass("active")
        $('.wrap').toggleClass("SlidebarsAct")
        console.log($('body'))
    })
    $('#Slidebars').click(function (e) {
        e.stopPropagation()
        if (e.target.id === 'Slidebars') {
            $('#Slidebars').removeClass("active")
            $('.body').removeClass("SlidebarsAct")
        }
        console.log(e.target.id)
    })

    function getDate(date) {
        $('#dateSelected')[0].innerText = date
    }
    $("#checkAll").click(function () {
        if ($("#checkAll").prop("checked")) {
            $("input[name='checkbox']").prop("checked", true)
        } else {
            $("input[name='checkbox']").prop("checked", false)
        }
    })
    // 控制月份
    var index_year = $('#index-year')
    var index_month = $('#index-month')
    // 控制月份往前
    function index_prev_btn(){
        var oldmonth = index_month.text()
        var oldyear = index_year.text()

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

        return index_year.text(oldyear),index_month.text(oldmonth);
    }

    // 控制月份往後
    function index_next_btn(){
        var newmonth = index_month.text()
        var newyear = index_year.text()

        if(newmonth == 13){
            newmonth = '0'+ 1;
            newyear = Number(index_year.text()) + 1
        }
        else if (Number(newmonth) >= 9){
            newmonth = Number(index_month.text()) + 1
        }
        else{
            newmonth ='0' + (Number(index_month.text()) + 1)
        }

        return index_year.text(newyear),index_month.text(newmonth);
    }

    $('.demo-version').click(function(){
        alert("體驗版暫不開放")
    })

    //待辦清單全選功能

$("#checkAll").click(function () {
    if ($("#checkAll").prop("checked")) {
        $("input[name='checkbox']").prop("checked", true)
    } else {
        $("input[name='checkbox']").prop("checked", false)
    }
});

var flag = 0
$("#checkAll-mb").click(function () {
        if(flag==0){
            $("input[name='checkbox']").prop("checked", true)
            flag++
        }
        else{
            $("input[name='checkbox']").prop("checked", false)
            flag--
        }
});