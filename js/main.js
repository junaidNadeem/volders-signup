$(document).ready(function () {
    $('#signup-form').validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.input-group').addClass('error');
        },
        success: function (element) {
            $(element).closest('.input-group').removeClass('error');
        }
    });
});
