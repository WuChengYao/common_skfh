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

//收合選單icon轉換
$(".collapse_btn").parent().click(function () {
    $(".collapse_btn").find('i').removeClass("fa-caret-up")
    if ($(this).hasClass('collapsed')) {
        $(this).find('i').addClass("fa-caret-up")
    }
});