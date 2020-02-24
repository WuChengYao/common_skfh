$('#collapse .plus').click(function () {
    $(this).toggleClass('d-none');
    $('#collapse .minus').toggleClass('d-none');
    $('#collapse-block').removeClass('d-none');
});

$('#collapse .minus').click(function () {
    $('#collapse .plus').toggleClass('d-none');
    $(this).toggleClass('d-none');
    $('#collapse-block').addClass('d-none');
});

    // 手機板切換頁面
// var l_step_img = document.querySelector(".leave-step-img")
// var l_step_page = document.querySelectorAll(".leave-step-page")
// var post_btn = document.querySelector(".post-btn")
// var cancel_btn = document.querySelector(".cancel-btn")

// let n = 1
// let p = 1

// l_step_page[n - 1].classList.add("active")
// l_step_page[n - 1].classList.add("show")

// post_btn.onclick = function () {
// cancel_btn.classList.remove("active")
// cancel_btn.classList.remove("show")
// if (n >= 1) {
//     post_btn.classList.remove("active")
// }
// if (n <= l_step_page.length) {
//     n++
//     p = n - 1
//     if (n >= l_step_page.length) {
//         n = l_step_page.length
//     }
// }
// if (p >= l_step_page.length) {
//     p = l_step_page.length - 1
// }
// if (p == 2 ) {
//     l_step_page[1].classList.remove("active")
// }
// post_btn.setAttribute("href", "#leave-step-" + n)
// cancel_btn.setAttribute("href", "#leave-step-" + p)
// l_step_img.setAttribute("src", "/img/vacation/schedule-step-" + n + ".svg")
// }

// cancel_btn.onclick = function () {
// post_btn.classList.remove("active")
// post_btn.classList.remove("show")
// cancel_btn.setAttribute("href", "#leave-step-" + p)
// l_step_img.setAttribute("src", "/img/vacation/schedule-step-" + p + ".svg")
// post_btn.setAttribute("href", "#leave-step-" + n)
// if (p >= 1) {
//     cancel_btn.classList.remove("active")
//     p--
//     n = p + 1
//     if (p <= 0) {
//         p = 1
//     }
// }
// if (p == 1) {
//     l_step_page[2].classList.remove("active")
// }
// }

// //控制第二頁時顯示取消按鈕
// $('.post-btn').click(function () {
// if ($('#leave-step-1').hasClass('active') == true) {
//     $('.cancel-btn').addClass('d-flex')
//     $('.cancel-btn').removeClass('d-none')
// }
// })

// $('.cancel-btn').click(function () {
// if ($('#leave-step-2').hasClass('active') == true) {
//     $('.cancel-btn').addClass('d-none')
//     $('.cancel-btn').removeClass('d-flex')
// }
// })

// //控制第四頁顯示送出鈕
// $('.post-btn').click(function () {
// if ($('#leave-step-3').hasClass('active') == true) {
//     $('#send-btn').addClass('d-flex')
//     $('.post-btn').removeClass('d-flex')
//     $('.post-btn').addClass('d-none')
// }
// })

// //控制從第四頁回到第三頁時隱藏按鈕
// $('.cancel-btn').click(function () {
// if ($('#send-btn').hasClass('d-flex') == true) {
//     $('#send-btn').removeClass('d-flex')
//     $('.post-btn').removeClass('d-none')
//     $('.post-btn').addClass('d-flex')
// }
// })



if ($('#vacation_type')[0].value === "產假") {
$('.birth').removeClass('d-none')
} else {
$('.birth').addClass('d-none')
}


if ($('#vacation_type2')[0].value === "產假") {
$('.birth2').removeClass('d-none')
} else {
$('.birth2').addClass('d-none')
}

if ($('#vacation_type2')[0].value === "特別休假") {
$('.ruleS').toggleClass('d-none')
$('.ruleA').addClass('d-inline-block')
} else if (($('#vacation_type2')[0].value === "產假")) {
$('.ruleB').toggleClass('d-none')
$('.ruleA').addClass('d-inline-block')
} else if (($('#vacation_type2')[0].value === "普通傷病假(未住院)")) {
$('.ruleN').toggleClass('d-none')
$('.ruleA').addClass('d-inline-block')
} else if (($('#vacation_type2')[0].value === "事假")) {
$('.ruleE').toggleClass('d-none')
$('.ruleA').addClass('d-inline-block')
} else if (($('#vacation_type2')[0].value === "none")) {
$('.ruleA').removeClass('d-inline-block')
}

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
