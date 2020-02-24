$("#checkAll_1").click(function () {
    if ($("#checkAll_1").prop("checked")) {
        $("input[name='checkbox_1']").prop("checked", true)
    } else {
        $("input[name='checkbox_1']").prop("checked", false)
    }
});

$('select').change(function(){
    $(this).css('color','black');
})
