function getDate (date) {
    $('#dateSelected')[0].innerText = date
}

document.querySelector('.selfActive').addEventListener('click',function () {
    document.querySelector('.selfActive').setAttribute("style", "background-image:url(./src/pug/img/icon/資產4.svg);")
    document.querySelector('.other').setAttribute("style", "background-image:url(./src/pug/img/icon/資產5.svg);")
})
//
document.querySelector('.other').addEventListener('click', function () {
    document.querySelector('.selfActive').setAttribute("style", "background-image:url(./src/pug/img/icon/資產2.svg);")
    document.querySelector('.other').setAttribute("style", "background-image:url(./src/pug/img/icon/資產3.svg);")
})  