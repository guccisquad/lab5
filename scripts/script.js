$('.btn').click(function(e) {
  var buttonEnter = $('.btn'),
   message = $('.user_message').val(),
   newMessage = "",
   nickName = $('.user_nickname').val(),
   newNick = "",
   nowT = "";

   typeMessage = function() {
     newMessage = message;
   }

   getData = function() {
     var newDate = new Date();
     hours = newDate.getHours()
     var minutes = newDate.getMinutes();
     nowT = hours + ':' + minutes;
   }

   replaceMessage = function () {
     var chatBlock = $('.text_area');
     var newChatBlock =
     '<div class="chattext">'+
     '<p>'+nickName+':'+newMessage+'--'+nowT+'</p>'+
     '</div>';
     chatBlock.append(newChatBlock);
   }

 typeMessage();
 getData();
 replaceMessage();

});
