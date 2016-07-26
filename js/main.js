$(document).ready(function () {
    //this jQuery code adds a hover state to the icons in the contact section of the header

    $('.email').hover(function () { //creates hover state for email icon
        $(this).attr('src', 'img/contact/envelope_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/envelope.png');
    });

    $('.github').hover(function () { //creates hover state for GitHub icon
        $(this).attr('src', 'img/contact/github_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/github.png');
    });

    $('.linkedin').hover(function () { //creates hover state for Linkedin icon
        $(this).attr('src', 'img/contact/linkedin_hover.png');
    }, function () {
        $(this).attr('src', 'img/contact/linkedin.png');
    });

    //jQuery plugin #1 is a simple textrotator I applied to the h2 in the header. It cycles through the different job titles I have held or plan to hold in the future.
    $('.rotate').textrotator({
        animation: 'spin',
        separator: ',',
        speed: 2000
    });

    //jQuery plugin #2 is the Lettering.js plugin that was included in the jQuery plugin. I used it to single out the first letter of the main body h1 tags and then used CSS to make those invidual letters bigger compared to the rest of the header.
    $('.h1').lettering();
});
