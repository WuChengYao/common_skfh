$("#checkAll").click(function () {
    if ($("#checkAll").prop("checked")) {
        $("input[name='checkbox']").prop("checked", true)
    } else {
        $("input[name='checkbox']").prop("checked", false)
    }
});


//電腦板時禁止手風琴式收闔選單
function adjustCollapseView() {
    var desktopView = $(document).width();
    if (desktopView >= "768") {
        $(".collapseArea").removeClass("collapse")
    } else {
        $(".collapseArea").addClass("collapse")
    }
}

$(function () {
    adjustCollapseView();
    $(window).on("resize", function () {
        adjustCollapseView();
    });
});

// 檔案上傳顯示檔案名稱
var allInputFile = document.querySelectorAll(".input-file");
var allShowName = document.querySelectorAll(".show-name");

$(".input-file").change(function () {
    for (var i = 0; i < allInputFile.length; i++) {
        if (allInputFile[i].files.length != 0) {
            console.log(allInputFile[i].files[0].name, allShowName[i]);
            allShowName[i].innerHTML = allInputFile[i].files[0].name
        }
    }
});

// 檔案上傳顯示檔案名稱-手機板
var allInputFile_mb = document.querySelectorAll(".input-file-mb");
var allShowName_mb = document.querySelectorAll(".show-name-mb");

$(".input-file-mb").change(function () {
    for (var i = 0; i < allInputFile_mb.length; i++) {
        if (allInputFile_mb[i].files.length != 0) {
            console.log(allInputFile_mb[i].files[0].name, allShowName_mb[i]);
            allShowName_mb[i].innerHTML = allInputFile_mb[i].files[0].name
        }
    }
});

//--------------------客製化13工日曆初始化

var cus_datetime_picker_input_ary = document.querySelectorAll(".cus-datetime-picker");
cus_datetime_picker_input_ary.forEach(cus_datetime_picker_input => {

    $(cus_datetime_picker_input).parent(".dateInput").after(`
    <div class="calendar_modle">
        <div class="calendar_modle__title">
            <span class="month-pre"></span>
            <span class="mx-">
                <span class="calendar-year">2019</span>
                <span class="calendar-month">11</span>
                工
            </span>
            <span class="month-next"></span>
        </div>
        <div class="calendar_modle__content">
            <div
                class="calendar_modle__content__week">
                <span class="text-center">三</span>
                <span class="text-center">四</span>
                <span class="text-center">五</span>
                <span class="text-center">六</span>
                <span class="text-center">日</span>
                <span class="text-center">一</span>
                <span class="text-center">二</span>
            </div>
            <div
                class="calendar_modle__content__week day">
                <span class="text-center" data-date="02">02</span>
                <span class="text-center" data-date="03">03</span>
                <span class="text-center" data-date="04">04</span>
                <span class="R text-center">05</span>
                <span class="R text-center">06</span>
                <span class="text-center" data-date="07">07</span>
                <span class="text-center" data-date="08">08</span>
            </div>

            <div
                class="calendar_modle__content__week day">
                <span class="text-center" data-date="09">09</span>
                <span class="text-center" data-date="10">10</span>
                <span class="text-center" data-date="11">11</span>
                <span class="R text-center">12</span>
                <span class="R text-center">13</span>
                <span class="text-center" data-date="14">14</span>
                <span class="text-center" data-date="15">15</span>
            </div>

            <div
                class="calendar_modle__content__week day">
                <span class="text-center" data-date="16">16</span>
                <span class="text-center" data-date="17">17</span>
                <span class="text-center" data-date="18">18</span>
                <span class="R text-center">19</span>
                <span class="R text-center">20</span>
                <span class="text-center" data-date="21">21</span>
                <span class="text-center" data-date="22">22</span>
            </div>

            <div
                class="calendar_modle__content__week day">
                <span class="text-center" data-date="23">23</span>
                <span class="text-center" data-date="24">24</span>
                <span class="text-center" data-date="25">25</span>
                <span class="R text-center">26</span>
                <span class="R text-center">27</span>
                <span class="text-center" data-date="28">28</span>
                <span class="text-center" data-date="29">29</span>
            </div>
        </div>
    </div>
    `);

    var target_calendar = $(cus_datetime_picker_input).parent(".dateInput").next();

    $(cus_datetime_picker_input).click(function () {
        target_calendar.toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $(cus_datetime_picker_input).blur();
    })

    var birthday_year = target_calendar.find('.calendar-year');
    var birthday_month = target_calendar.find('.calendar-month');

    target_calendar.find('.day span').not(".R").on('click', function () {
        end_date = $(this).data('date');
        $(cus_datetime_picker_input).val(`${birthday_year.text()}/${birthday_month.text() - 1}/${end_date}`);
        $(target_calendar).removeClass('d-block');
        $('.block').removeClass('d-block')
    });

    target_calendar.find('.month-pre').on('click', function () {
        var oldmonth = birthday_month.text()
        var oldyear = birthday_year.text()

        if (oldmonth == 1) {
            oldmonth = 13;
            oldyear = oldyear - 1;
        } else if (oldmonth <= 10) {
            oldmonth = '0' + (oldmonth - 1)
        } else {
            oldmonth = oldmonth - 1
        }

        return birthday_year.text(oldyear), birthday_month.text(oldmonth);
    });

    target_calendar.find('.month-next').on('click', function () {
        var newmonth = birthday_month.text()
        var newyear = birthday_year.text()

        if (newmonth == 13) {
            newmonth = '0' + 1;
            newyear = Number(birthday_year.text()) + 1
        } else if (Number(newmonth) >= 9) {
            newmonth = Number(birthday_month.text()) + 1
        } else {
            newmonth = '0' + (Number(birthday_month.text()) + 1)
        }

        return birthday_year.text(newyear), birthday_month.text(newmonth);
    });
});

// -----------------------------------------
$('.block').click(function () {
    $('.calendar').removeClass('d-block')
    $('.calendar_modle').removeClass('d-block')
    $('.block').removeClass('d-block')
    $('.block').addClass('d-none')
})


// -----------------------------


$(".collapse_btn").parent().click(function () {
    $(".collapse_btn").find('i').removeClass("fa-caret-up")
    if($(this).hasClass('collapsed')){
        $(this).find('i').addClass("fa-caret-up")
    }
});


// 1.點擊判斷是否有其他人展開,若有則移除,給自己加上class
// 2.若是點擊自己則只移除class,不新增class
$('.the-collapse-btn').click(function () {
    $('.selectgroup').removeClass('bdred')
    $('.border-group').removeClass('bdred')
    $('.data-mid').removeClass('border-none')
    $('.data').css('padding', '5px')

    if($(this).hasClass('collapsed')){
        $(this).parent('.card').find('.selectgroup').addClass('bdred')
        $(this).parent('.card').find('.border-group').addClass('bdred')
        $(this).parent('.card').find('.data-mid').addClass('border-none')
        $(this).parent('.card').find('.data').css('padding', '15px 10px')
    }
})

