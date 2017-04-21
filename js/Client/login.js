$(function(){
    var btnLogin = $("#btnLogin");
    var txtUsername = $("#txtUsername");
    var txtPassword = $("#txtPassword");

    btnLogin.click(function(){
        var data = {
            "username" : txtUsername.val(),
            "password" : txtPassword.val()
        };
        
        $.ajax({
            url: '/api/login',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function() {
                window.location.href = "/";
            },
            error : function(res){
                console.log(res);
                alert("Deu ruim!"); //TODO: Change this feedback.
            }
        });
    });
});