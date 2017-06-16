$(document).ready(function() {
    if(typeof(Storage) === "undefined" || !localStorage.username)
        return;

    var welcome = $(".welcome-msg");
    var username = $(".username-msg");
    var logout = $(".logout");

    username.html(localStorage.username + "!");
    welcome.show();
    username.show();

    logout.click(function(){
        $.ajax({
            url: '/api/logout',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function() {
                window.location.href = "/";
            },
            error : function(){
                window.location.href = "/";
            }
        });
    });
});