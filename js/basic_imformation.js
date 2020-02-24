// 圖片上傳預覽

$("#change-btn").change(function () {
    readURL(this)

})

function readURL(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            console.log("work")
            $("#avatar").css('background-image', `url("${e.target.result}")`);
            console.log(e.target.result)

        }

        reader.readAsDataURL(input.files[0]);

    }

}