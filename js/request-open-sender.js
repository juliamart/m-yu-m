$(document).ready(function(){
    $('#request-open .sender-phone').mask('+38 (999) 999-99-99');
    $('#request-open .sender-btn').on('click', senderValidator);
    $('#request-open .sender-phone').keypress(function(){$('#request-open .err-val-phone').hide();});
    $('#request-open .sender-name').keypress(function() {
        if($('#request-open .sender-name').val().length >= 40) return false;
    });
    function phoneErr() {$('#request-open .err-val-phone').show();}
    function senderValidator() {
        $("#request-open .sender-phone").val() != '' ? senderStart() : phoneErr();
    }

    function senderStart() {
        if($('#request-open .sender-name').val() == '') $('#request-open .sender-name').val('Имя не заполнено');
        $.post(
            "/sender/request-open/core/sender.php", {
            "name": $('#request-open .sender-name').val(), 
            "email": $('#request-open .sender-email').val(),
            "phone": $('#request-open .sender-phone').val(),
            "site": $('#request-open .sender-site').val(),
            "message": $('#request-open .sender-message').val()
        }, ifSuccess);
    };

    function ifSuccess(data) {
        if(data == 0) { $('#request-open .sender-err').show();} 
        else {
            $('#request-open .sender-name, #request-open .sender-email, #request-open .sender-phone, #request-open .sender-message').val('');
            $('#request-open .sender-done').show();
        }
    }
});