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

        $('#collapseContent').on('show.bs.collapse', function () {
            $('.close').toggleClass("show")
            $('.open').toggleClass("show")
        })
        $('#collapseContent').on('hidden.bs.collapse', function () {
            $('.close').toggleClass("show")
            $('.open').toggleClass("show")
        })

        function getDateStart(date) {
            $('#input13')[0].value = date
            $('#calendarModal-start .calendarModal__content__week div span').removeClass('clickCircle')
            $(event.currentTarget)[0].className += ' ' + 'clickCircle'
        }
        function getDateEnd(date) {
            $('#input14')[0].value = date
            // console.log($(event))
            $('#calendarModal-end .calendarModal__content__week div span').removeClass('clickCircle')
            $(event.currentTarget)[0].className += ' ' + 'clickCircle'
        }
        function getDateAdd(date) {
            $('#input18')[0].value = date
            console.log($('#input18')[0].value)
            $('#calendarModal-add .calendarModal__content__week div span').removeClass('clickCircle')
            $(event.currentTarget)[0].className += ' ' + 'clickCircle'
        }

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

    $('#input13').click(function () {
        $('#day-start').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#input13').blur()
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

        $('#input13').val(`${start_year.text()}-${start_month.text() - 1}-${start_date}`);

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

    $('#input14').click(function () {
        $('#day-end').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#input14').blur()
    })

    $('#day-end .calendar__content__week.day span').not(".R").click(function () {
        end_date = $(this).data('date');
        $('#input14').val(`${end_year.text()}-${end_month.text() - 1}-${end_date}`);
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
    $('#input18').click(function () {
        $('#birth-day-start').toggleClass('d-block')
        $('.block').toggleClass('d-block')
        $('#input18').blur()
    })


    $('#birth-day-start .calendar__content__week.day span').not(".R").click(function () {
        end_date = $(this).data('date');
        $('#input18').val(`${birthday_year.text()}-${birthday_month.text() - 1}-${end_date}`);
        $('#birth-day-start').removeClass('d-block');
        $('.block').removeClass('d-block')
    });