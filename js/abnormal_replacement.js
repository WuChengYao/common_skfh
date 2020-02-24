$(".collapse_btn").parent().click(function () {
    $(".collapse_btn").find('i').removeClass("fa-caret-up")
    if ($(this).hasClass('collapsed')) {
        $(this).find('i').addClass("fa-caret-up")
    }
});