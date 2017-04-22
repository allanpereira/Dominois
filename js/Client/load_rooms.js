$(function(){
    const hiddenClass = "hidden";

    var list = $("#rooms-list");
    var noRooms = $("#no-rooms");
    var error = $("#error");
    var loading = $("#loading");
    var btnReload = $("#btnReload");

    var setRooms = function(response){
        list.empty();

        if(response.rooms.length === 0)
            noRooms.removeClass(hiddenClass);

        response.rooms.forEach(function(room) {
            var room = "<div class='room'><a href='/game/" + room.id + "'>" + room.name + "</a></div>";
            list.append(room);
        }, this);

        toggleState();
    };

    var toggleState = function(loadingState, errorState){
        if(loadingState){
            list.addClass(hiddenClass);
            error.addClass(hiddenClass);
            loading.removeClass(hiddenClass);
        }else if(errorState){
            loading.addClass(hiddenClass);
            list.addClass(hiddenClass);
            error.removeClass(hiddenClass);
        }else{
            loading.addClass(hiddenClass);
            error.addClass(hiddenClass);
            list.removeClass(hiddenClass);
        }
    }

    var onError = function(){
        toggleState(false, true);
    }

    var loadRooms = function(){
        toggleState(true);
        
        $.ajax({
            url: '/api/rooms/avaliable',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: setRooms,
            error : onError
        });
        
    };

    var setListeners = function(){
        btnReload.click(loadRooms);
    };

    setListeners();
    loadRooms();
});