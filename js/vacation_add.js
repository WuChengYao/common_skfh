    // 側邊選單
    $('#header__btn').click(function () {
        $('#Slidebars').toggleClass("active")
        $('.wrap').toggleClass("SlidebarsAct")
    })
    $('.Slidebars').click(function (e) {
        e.stopPropagation()
        if (e.target.id === 'Slidebars') {
            $('#Slidebars').removeClass("active")
            $('.wrap').removeClass("SlidebarsAct")
        }
    })



    $('#vacation_type').change(function () {
        if ($('#vacation_type')[0].value === "產假") {
            $('.birth').removeClass('d-none')
        } else {
            $('.birth').addClass('d-none')
        }
    })

    $('#vacation_type2').change(function () {
        if ($('#vacation_type2')[0].value === "產假") {
            $('.birth2').removeClass('d-none')
        } else {
            $('.birth2').addClass('d-none')
        }
    })

    $('#vacation_type2').change(function () {
        $('.ruleS').addClass('d-none')
        $('.ruleB').addClass('d-none')
        $('.ruleN').addClass('d-none')
        $('.ruleE').addClass('d-none')

        if ($('#vacation_type2')[0].value === "特別休假") {
            $('#vacation_type option:nth-child(1)').val('特別休假')
            $('.ruleS').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type2')[0].value === "產假")) {
            $('#vacation_type option:nth-child(1)').val('產假')
            $('.ruleB').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type2')[0].value === "普通傷病假(未住院)")) {
            $('#vacation_type option:nth-child(1)').val('普通傷病假(未住院)')
            $('.ruleN').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type2')[0].value === "事假")) {
            $('#vacation_type option:nth-child(1)').val('事假')
            $('.ruleE').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type2')[0].value === "none")) {
            $('#vacation_type option:nth-child(1)').val('none')
            $('.ruleA').removeClass('d-inline-block')
        }
    })

    $('#vacation_type').change(function () {
        $('.ruleS').addClass('d-none')
        $('.ruleB').addClass('d-none')
        $('.ruleN').addClass('d-none')
        $('.ruleE').addClass('d-none')

        if ($('#vacation_type')[0].value === "特別休假") {
            $('.ruleS').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type')[0].value === "產假")) {
            $('.ruleB').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type')[0].value === "普通傷病假(未住院)")) {
            $('.ruleN').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type')[0].value === "事假")) {
            $('.ruleE').toggleClass('d-none')
            $('.ruleA').addClass('d-inline-block')
        } else if (($('#vacation_type')[0].value === "none")) {
            $('.ruleA').removeClass('d-inline-block')
        }
    }) 


    // 請假期間
    var start_date;
    var start_year = $('#start-year')
    var start_month = $('#start-month')


    // 控制月份往前
    function start_prev_btn() {
        var oldmonth = start_month.text()
        var oldyear = start_year.text()

        if (oldmonth == 1) {
            oldmonth = 13;
            oldyear = oldyear - 1;
        } else if (oldmonth <= 10) {
            oldmonth = '0' + (oldmonth - 1)
        } else {
            oldmonth = oldmonth - 1
        }

        return start_year.text(oldyear), start_month.text(oldmonth);
    }

    // 控制月份往後
    function start_next_btn() {
        var newmonth = start_month.text()
        var newyear = start_year.text()

        if (newmonth == 13) {
            newmonth = '0' + 1;
            newyear = Number(start_year.text()) + 1
        } else if (Number(newmonth) >= 9) {
            newmonth = Number(start_month.text()) + 1
        } else {
            newmonth = '0' + (Number(start_month.text()) + 1)
        }

        return start_year.text(newyear), start_month.text(newmonth);
    }

    $('#date-start').click(function () {
        $('#day-start').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#date-start').blur()
    })

    $('.block').click(function () {
        $('#day-start').removeClass('d-block')
        $('#day-end').removeClass('d-block')
        $('#birth-day-start').removeClass('d-block')
        $('#birth2-day-start').removeClass('d-block')
        $('.block').removeClass('d-block')
        $('.block').addClass('d-none')
    })

    $('#day-start .calendar__content__week.day span').not(".R").click(function () {
        start_date = $(this).data('date');

        $('#date-start').val(`${start_year.text()}-${start_month.text() - 1}-${start_date}`);

        $('.block').removeClass('d-block')
        $('#day-start').removeClass('d-block');
    });

    var end_date;
    var end_year = $('#end-year')
    var end_month = $('#end-month')

    // 控制月份往前
    function end_prev_btn() {
        var oldmonth = end_month.text()
        var oldyear = end_year.text()

        if (oldmonth == 1) {
            oldmonth = 13;
            oldyear = oldyear - 1;
        } else if (oldmonth <= 10) {
            oldmonth = '0' + (oldmonth - 1)
        } else {
            oldmonth = oldmonth - 1
        }

        return end_year.text(oldyear), end_month.text(oldmonth);
    }

    // 控制月份往後
    function end_next_btn() {
        var newmonth = end_month.text()
        var newyear = end_year.text()

        if (newmonth == 13) {
            newmonth = '0' + 1;
            newyear = Number(end_year.text()) + 1
        } else if (Number(newmonth) >= 9) {
            newmonth = Number(end_month.text()) + 1
        } else {
            newmonth = '0' + (Number(end_month.text()) + 1)
        }

        return end_year.text(newyear), end_month.text(newmonth);
    }

    $('#date-end').click(function () {
        $('#day-end').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#date-end').blur()
    })

    $('#day-end .calendar__content__week.day span').not(".R").click(function () {
        end_date = $(this).data('date');
        $('#date-end').val(`${end_year.text()}-${end_month.text() - 1}-${end_date}`);
        $('#day-end').removeClass('d-block');
        $('.block').removeClass('d-block')
    });

    //

    var birthday_year = $('#birthday-year')
    var birthday_month = $('#birthday-month')

    // 控制月份往前
    function birthday_prev_btn() {
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
    }

    // 控制月份往後
    function birthday_next_btn() {
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
    }
    $('#birth-date').click(function () {
        $('#birth-day-start').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#birth-date').blur()
    })


    $('#birth-day-start .calendar__content__week.day span').not(".R").click(function () {
        end_date = $(this).data('date');
        $('#birth-date').val(`${birthday_year.text()}-${birthday_month.text() - 1}-${end_date}`);
        $('#birth-day-start').removeClass('d-block');
        $('.block').removeClass('d-block')
    });

    var birthday_year = $('#birth2day-year')
    var birthday_month = $('#birth2day-month')

    // 控制月份往前
    function birth2day_prev_btn() {
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
    }

    // 控制月份往後
    function birth2day_next_btn() {
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
    }
    $('#birth2-date').click(function () {
        $('#birth2-day-start').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#birth2-date').blur()
    })


    $('#birth2-day-start .calendar__content__week.day span').not(".R").click(function () {
        end_date = $(this).data('date');
        $('#birth2-date').val(`${birthday_year.text()}-${birthday_month.text() - 1}-${end_date}`);
        $('#birth2-day-start').removeClass('d-block');
        $('.block').removeClass('d-block')
    });


    // 請假期間
    $(".apply_type_select").click(function () {
        var apply_type_index = $(".apply_type_select").index(this);
        var option_items = [];

        $('.apply_type_select').removeClass("active");
        $(this).addClass('active');

        if (apply_type_index === 0) {
            $("#apply_type_radio_1").attr("checked", true);
            $("#apply_type_radio_2").attr("checked", false);
            option_items = [{
                    text: '請選擇',
                    value: 'none'
                },
                {
                    text: '特別休假',
                    value: '特別休假'
                },
                {
                    text: '產假',
                    value: '產假'
                },
                {
                    text: '普通傷病假(未住院)',
                    value: '普通傷病假(未住院)'
                },
                {
                    text: '事假',
                    value: '事假'
                }
            ];
            }
            else if (apply_type_index === 2) {
            $("#apply_type_radio_1").attr("checked", true);
            $("#apply_type_radio_2").attr("checked", false);
            option_items = [{
                    text: '請選擇',
                    value: 'none'
                },
                {
                    text: '特別休假',
                    value: '特別休假'
                },
                {
                    text: '產假',
                    value: '產假'
                },
                {
                    text: '普通傷病假(未住院)',
                    value: '普通傷病假(未住院)'
                },
                {
                    text: '事假',
                    value: '事假'
                }
            ];
        }else {
            $("#apply_type_radio_1").attr("checked", false);
            $("#apply_type_radio_2").attr("checked", true);
            option_items = [{
                    text: '請選擇',
                    value: 'none'
                },
                {
                    text: '忘記刷卡',
                    value: '忘記刷卡'
                },
                {
                    text: '誤點',
                    value: '誤點'
                }
            ];
        }

        

        
        //clear all select options
        $("#vacation_type").empty();
        $("#vacation_type2").empty();
        //change select options
        $.each(option_items, function (i, item) {

            $('#vacation_type').append($('<option>', {
                value: item.value,
                text: item.text
            }));
            $('#vacation_type2').append($('<option>', {
            value: item.value,
            text: item.text
            }));
        });
    });

    // 手機板切換頁面
    var l_step_img = document.querySelector(".leave-step-img")
    var l_step_page = document.querySelectorAll(".leave-step-page")
    var post_btn = document.querySelector(".post-btn")
    var cancel_btn = document.querySelector(".cancel-btn")

    let n = 1
    let p = 1

    l_step_page[n - 1].classList.add("active")
    l_step_page[n - 1].classList.add("show")

    post_btn.onclick = function () {
        cancel_btn.classList.remove("active")
        cancel_btn.classList.remove("show")
        if (n >= 1) {
            post_btn.classList.remove("active")
        }
        if (n <= l_step_page.length) {
            n++
            p = n - 1
            if (n >= l_step_page.length) {
                n = l_step_page.length
            }
        }
        if (p >= l_step_page.length) {
            p = l_step_page.length - 1
        }
        if (p == 2 ) {
            l_step_page[1].classList.remove("active")
        }
        post_btn.setAttribute("href", "#leave-step-" + n)
        cancel_btn.setAttribute("href", "#leave-step-" + p)
        l_step_img.setAttribute("src", "./img/vacation/schedule-step-" + n + ".svg")
    }

    cancel_btn.onclick = function () {
        post_btn.classList.remove("active")
        post_btn.classList.remove("show")
        cancel_btn.setAttribute("href", "#leave-step-" + p)
        l_step_img.setAttribute("src", "./img/vacation/schedule-step-" + p + ".svg")
        post_btn.setAttribute("href", "#leave-step-" + n)
        if (p >= 1) {
            cancel_btn.classList.remove("active")
            p--
            n = p + 1
            if (p <= 0) {
                p = 1
            }
        }
        if (p == 1) {
            l_step_page[2].classList.remove("active")
        }
    }

    //控制第二頁時顯示取消按鈕
    $('.post-btn').click(function () {
     if ($('#leave-step-1').hasClass('active') == true) {
            $('.cancel-btn').addClass('d-flex')
            $('.cancel-btn').removeClass('d-none')
        }
    })

    $('.cancel-btn').click(function () {
        if ($('#leave-step-2').hasClass('active') == true) {
            $('.cancel-btn').addClass('d-none')
            $('.cancel-btn').removeClass('d-flex')
        }
    })

    //控制第四頁顯示送出鈕
    $('.post-btn').click(function () {
        if ($('#leave-step-3').hasClass('active') == true) {
            $('#send-btn_mb').addClass('d-flex')
            $('.post-btn').removeClass('d-flex')
            $('.post-btn').addClass('d-none')
        }
    })

    //控制從第四頁回到第三頁時隱藏按鈕
    $('.cancel-btn').click(function () {
        if ($('#send-btn_mb').hasClass('d-flex') == true) {
            $('#send-btn_mb').removeClass('d-flex')
            $('.post-btn').removeClass('d-none')
            $('.post-btn').addClass('d-flex')
        }
    })
  
    var resize_time = $.now()

    $(window).resize(function()
    {   if($.now() - resize_time > 2000){
            resize_time = $.now()
        }
    })

    if(resize_time <= 576){
            $("#send-btn_mb").click(function(){
            if($('input[name=agent_mobile]').val() === ""){
                alert('請返回"請假資訊"填寫代理人姓名')
                return false
            }
            else if($('#vacation_type').find(":selected").text() === "請選擇"){
                alert('請返回"申請列別"選擇請假類別')
                return false
            }
            else if ($('input[name=start_date]').val().length === 0){
                alert('請返回"請假區間"填寫請假起訖日')
                return false
            }
            else if ($('input[name=end_date]').val().length === 0){
                alert('請返回"請假區間"填寫請假起訖日')
                return false
            }
            else if ($('textarea[name=why]').val().length === 0){
                alert('請返回"請假區間"填寫請假事由')
                return false
            }
            else{
                return false
            }
        })
    }
    else{
            $("#send-btn").click(function(){
            if($('input[name=agent]').val() === ""){
                alert("請填寫代理人姓名")
                return false
            }
            else if($('#vacation_type2').find(":selected").text() === "請選擇"){
                alert("請選擇請假類別")
                return false
            }
            else if ($('input[name=start_date]').val().length === 0){
                alert('請填寫請假起始日')
                return false
            }
            else if ($('input[name=end_date]').val().length === 0){
                alert('請填寫請假結束日')
                return false
            }
            else if ($('textarea[name=why]').val().length === 0){
                alert("請填寫請假事由")
                return false
            }
        })
    }
