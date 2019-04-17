$(document).ready(function () {

    $('#signup-form').validate({
        rules: {
            firstName: {
                minlength: 2,
                required: true
            },
            lastName: {
                minlength: 2,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.input-group').addClass('error');
        },
        success: function (element) {
            element.text('').addClass('valid')
                .closest('.input-group').removeClass('error');
        }
    });

});
