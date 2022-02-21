// function to check pasword strength.
function checkPasswordStrength() {

// variables are declare for number,alphabets,special characters.
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    // to check for weak password
    if ($('#password').val().length < 6) {
        $('#strength').removeClass();
        $('#strength').addClass('weak-password');
        $('#strength').html("Weak (should be ATLEAST 6 characters.)");
    } else {

        // to check for  strong password.
        if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
            $('#strength').removeClass();
            $('#strength').addClass('strong-password');
            $('#strength').html("Strong");
        } else {

            // to check for medium password.
            $('#strength').removeClass();
            $('#strength').addClass('medium-password');
            $('#strength').html("Medium");
        }
    }
}