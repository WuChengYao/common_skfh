$("#checkAll").click(function () {
    if ($("#checkAll").prop("checked")) {
        $("input[name='checkbox']").prop("checked", true)
    } else {
        $("input[name='checkbox']").prop("checked", false)
    }
});

$(".details").click(function () {
    if ($('.block_main').css('display', 'none')) {
        $('.block_main').css('display', 'block');
    }
    if ($('.block_main').css('display', 'block')) {
        $(".cancel_icon").click(function () {
            $('.block_main').css('display', 'none');
        });
    }
});