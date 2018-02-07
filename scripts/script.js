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
       '<div class="chattext">'+
       '<p>'+nickName+':'+newMessage+'--'+nowT+'</p>'+
       '</div>';
       chatBlock.append(newChatBlock);
     }
   }



 typeMessage();
 getData();
 replaceMessage();
});
