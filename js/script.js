$("#contactAnchor").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactDiv").offset().top},
        2000);
        return false;
});


$("#projectsAnchor").click(function() {
    $('html,body').animate({
        scrollTop: $("#projectsDiv").offset().top},
        2000);
        return false;
});

$("#interestsAnchor").click(function() {
    $('html,body').animate({
        scrollTop: $("#interestsDiv").offset().top},
        2000);
        return false;
});
