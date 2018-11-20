$(document).ready(function(){
    // function openModal() {
    //     if(!localStorage.getItem("discount shown")) {
    //         $('#callback-sale').addClass('show-modal');
    //         localStorage.setItem("discount shown", "1");
    //     }
    // }
    // setTimeout(openModal, 30000);

    $('.callback-sale__close').click(function(){
        $('#callback-sale').removeClass('show-modal');
        $('body').removeClass('fixed-body');
    });
    $('#callback-sale .sender-phone').mask('+38 (999) 999-99-99');
    $('#callback-sale .sender-btn').on('click', senderValidator);
    $('#callback-sale .sender-phone').keypress(function(){$('#callback-sale .err-val-phone').hide();});
    function phoneErr() {$('#callback-sale .err-val-phone').show();}
    function senderValidator() {
        $("#callback-sale .sender-phone").val() != '' ? senderStart() : phoneErr();
    }

    function senderStart() {
        $.post(
            "/sender/callback-sale/core/sender.php", {
            "phone": $('#callback-sale .sender-phone').val(),
            "email": $('#callback-sale .sender-email').val(),
            "site": $('#callback-sale .sender-site').val(),
            "message": $('#callback-sale .sender-message').val()
        }, ifSuccess);
    };

    function ifSuccess(data) {
        if(data == 0) { $('#callback-sale .sender-err').show();} 
        else {
            $('#callback-sale .sender-phone, #callback-sale .sender-name').val('');
            $('#callback-sale .sender-done').show();
            ga('send', 'pageview', '/virtual/spasibo?popup'); 
        }
    }
});