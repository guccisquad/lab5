$('.btn').click(function(e) {
  var buttonEnter = $('.btn'),
   message = $('.user_message').val(),
   newMessage = "",
   nickName = $('.user_nickname').val(),
   newNick = "",
   nowT = moment().format('HH:mm');

   replaceMessage = function() {
     newMessage = message;
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

   scrollingTextArea = function() {
     var chatResult = $('.text_area');
     chatResult.scrollTop(chatResult.prop('scrollHeight'));
   }

   clearingTextArea = function() {
     $('.user_message').val("");
   }

 replaceMessage();
 clearingTextArea();
 scrollingTextArea();
});
