$(function(){
    const hiddenClass = "hidden";

    var loading = $("#create-room-loading");
    var btnCreateRoom = $("#btnCreateRoom");
    var btnCancel = $("#btnCancelCreateRoom");
    
    var roomNameGroup = $("#name-group");
    var roomName = $("#name");
    var playersAmount = $("#playersAmount");
    var dominoesByPlayer = $("#dominoesByPlayer");

    var toggleState = function(isLoading){
        if(isLoading){
            loading.removeClass(hiddenClass);
            btnCreateRoom.addClass(hiddenClass);
            btnCancel.addClass(hiddenClass);
        } else {
            loading.addClass(hiddenClass);
            btnCreateRoom.removeClass(hiddenClass);
            btnCancel.removeClass(hiddenClass);
        }
    }

    var onTrySave = function(){
        var name = roomName.val();
        var amount = playersAmount.val();
        var dominoes = dominoesByPlayer.val();

        if(!name){
            roomNameGroup.addClass("has-error");
            roomName.focus();
        }else{
            var room = {
                name : name,
                playersAmount : amount,
                dominoesByPlayer : dominoes
            };

            saveRoom(room);
        }
    }

    var saveRoom = function(room){
        toggleState(true);

        $.ajax({
            url: '/api/rooms',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(room),
            dataType: 'json',
            async: false,
            success: onSaveRoom,
            error : onSaveRoomError
        });
    }

    var onSaveRoom = function(response){
        toggleState(false);
        window.location.href = "/game/" + response.id;
    }

    var onSaveRoomError = function(response){
        toggleState(false);
        alert("Erro: " + response.responseText);
    }

    var onNameChanged = function(){
        if(roomName.val()){
            roomNameGroup.removeClass("has-error");
        }else{
            roomNameGroup.addClass("has-error");
        }
    };

    btnCreateRoom.click(onTrySave);
    roomName.on('input', onNameChanged);
});