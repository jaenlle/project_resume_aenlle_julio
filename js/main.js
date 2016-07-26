$(document).ready(function () {
    //this jQuery code adds a hover state to the icons in the contact section of the header

    $('.email').hover(function () { //hover state for email icon
        $(this).attr('src', 'img/contact/envelope_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/envelope.png');
    });

    $('.github').hover(function () { //hover state for GitHub icon
        $(this).attr('src', 'img/contact/github_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/github.png');
    });

    $('.linkedin').hover(function () { //hover state for Linkedin icon
        $(this).attr('src', 'img/contact/linkedin_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/linkedin.png');
    });

    $('.rotate').textrotator({
        animation: 'spin',
        separator: ',',
        speed: 2000
    });
});
