$(document).ready(function () {

    $('#email').hover(function () {
        $(this).attr('src', 'img/contact/envelope_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/envelope.png');
    });

    $('#github').hover(function () {
        $(this).attr('src', 'img/contact/github_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/github.png');
    });

    $('#linkedin').hover(function () {
        $(this).attr('src', 'img/contact/linkedin_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/linkedin.png');
    });
});
