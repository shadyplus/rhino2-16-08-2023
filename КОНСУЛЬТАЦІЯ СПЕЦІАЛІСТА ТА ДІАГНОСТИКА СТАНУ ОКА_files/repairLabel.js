$(function () {
    $('.tel_input').click(function () {
        $('input').each(function (i, input) {
            if(input.value.length) return;
            $('#form_tel').css({'transform': 'translateY(-10px)'})
        })
    })})