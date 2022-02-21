function checkPasswordStrength() {
    var number = /([0-9])/;
    var alphabets = /([a-zA-Z])/;
    var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    if ($('#password').val().length < 6) {
        $('#strength').removeClass();
        $('#strength').addClass('weak-password');
        $('#strength').html("Weak (should be atleast 6 characters.)");
    } else {
        if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
            $('#strength').removeClass();
            $('#strength').addClass('strong-password');
            $('#strength').html("Strong");
        } else {
            $('#strength').removeClass();
            $('#strength').addClass('medium-password');
            $('#strength').html("Medium ");
        }
    }
}