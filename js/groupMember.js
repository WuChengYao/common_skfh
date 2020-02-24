$("#checkAll").click(function () {
    if ($("#checkAll").prop("checked")) {
        $("input[name='checkbox']").prop("checked", true)
    } else {
        $("input[name='checkbox']").prop("checked", false)
    }
});


$("#checkAll_1").click(function () {
    if ($("#checkAll_1").prop("checked")) {
        $("input[name='checkbox_1']").prop("checked", true)
    } else {
        $("input[name='checkbox_1']").prop("checked", false)
    }
});
