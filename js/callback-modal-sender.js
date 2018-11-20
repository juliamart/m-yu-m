$(document).ready(function(){
    $('.callback-modal-btn').click(function(){
        $('#callback-modal').addClass('show-modal');
        $('body').addClass('fixed-body');
    });
    $('.callback-modal__close').click(function(){
        $('#callback-modal').removeClass('show-modal');
        $('body').removeClass('fixed-body');
    });
    $('#callback-modal .sender-phone').mask('+38 (999) 99-99-999');
    $('#callback-modal .sender-btn').on('click', senderValidator);
    $('#callback-modal .sender-phone').keypress(function(){$('#callback-modal .err-val-phone').hide();});
    function phoneErr() {$('#callback-modal .err-val-phone').show();}
    function senderValidator() {
        $("#callback-modal .sender-phone").val() != '' ? senderStart() : phoneErr();
    }

    function senderStart() {
        if($('#callback-modal .sender-name').val() == '') $('#callback-modal .sender-name').val('Имя не заполнено');
        $.post(
            "/sender/callback-modal/core/sender.php", {
            "name": $('#callback-modal .sender-name').val(), 
            "phone": $('#callback-modal .sender-phone').val()
        }, ifSuccess);
    };

    function ifSuccess(data) {
        if(data == 0) { $('#callback-modal .sender-err').show();} 
        else {
            $('#callback-modal .sender-phone, #callback-modal .sender-name').val('');
            $('#callback-modal .sender-done').show();
            ga('send', 'pageview', '/virtual/spasibo?headerform'); 
        }
    }
});