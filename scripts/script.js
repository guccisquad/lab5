$('.btn').click(function() {
  var message = $('.user_message').val(),
    newMessage = "",
    nickName = $('.user_nickname').val(),
    newNick = "",
    nowT = moment().format('HH:mm');

  typingMessage = function() {
    newMessage = message;
      var chatBlock = $('.text_area');
        if (newMessage != 0 && nickName != 0) {
          var newChatBlock =
            '<div class="chatMain mt-2">' +
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
    $('textarea').val("");
  }

  typingMessage();
  scrollingTextArea();
  clearingTextArea();

});


$('textarea').on('keydown',function(e) {
  if (e.keyCode == 13) {
    $('.btn').trigger('click');
  }
});
