$('.btn').click(function(e) {
  var buttonEnter = $('.btn'),
   message = $('.user_message').val(),
   newMessage = "",
   nickName = $('.user_nickname').val(),
   newNick = "",
   nowT = "",
   nameHistory = "",
   messageHistory = "";
   var newID = 0;

   typeMessage = function() {
     newMessage = message;
   }

   getData = function() {
     var newDate = new Date();
     hours = newDate.getHours()
     var minutes = newDate.getMinutes();
     nowT = hours + ':' + minutes;
     if (hours < 9) {
       nowT = '0' + hours + ':' + minutes;
     } else if (minutes < 9) {
       nowT = hours + ':' + '0' + minutes;
     }
   }

   replaceMessage = function() {
     var chatBlock = $('.text_area');
     if (newMessage.length > 0) {
       var newChatBlock =
       '<div class="chatMain">' +
       '<div class="chatNickName">' +
       '<p>' +nickName+ '</p>'+
       '</div>' +
       '<div class="chattext">'+
       '<p>'+newMessage+'</p>'+
       '</div>' +
       '<div class="chatTime">' +
       '<p>' +nowT+ '</p>' +
       '</div>'+
       '</div>';

       chatBlock.append(newChatBlock);
     }
   }

   chatHistory = function() {
     var history = {
       name : nickName,
       text : newMessage
     }

     localStorage.setItem('1', JSON.stringify(history));
   }

 typeMessage();
 getData();
 replaceMessage();
 chatHistory();
});
