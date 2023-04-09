let error_counter = false;

$('input[name = "user_login"]').blur(function) {(
    if ($(this).val() == '') {
        error_counter = true;
        $(this).css({
            'border-color': 'red',
            'background-color': 'coral'
        });
    } else {
        error_counter = false;
        $(this).css({
            'border-color': 'green',
            'background-color': 'white'
        });
    }
)};


$('input[name = "user_login"]').blur(function) ({
    let reg_pass = new RegExp /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ 
    if ($(this).val() == '') {
        error_counter = true;
        $(this).css({
            'border-color': 'red',
            'background-color': 'coral'
        });
    } else {
        error_counter = false;
        $(this).css({
            'border-color': 'green',
            'background-color': 'white'
        });
    }
});