$(document).ready(function() {
    if(typeof(Storage) === "undefined" || !localStorage.username)
        return;

    var welcome = $(".welcome-msg");
    var username = $(".username-msg");

    username.html(localStorage.username + "!");
    welcome.show();
    username.show();
});