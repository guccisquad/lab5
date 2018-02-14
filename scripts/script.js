$(".nick_enter").click(function() {
  var nickName = $('.user_nickname').val();
  if (nickName != 0) {
    $('.type_nickname').hide();
    $('.col-lg-4').show();
  }
});

$('.btn').click(function() {
  var message = $('.user_message').val(),
    newMessage = "",
    nickName = $('.user_nickname').val(),
    nowT = moment().format('HH:mm');

  clearingTextArea = function() {
    $('textarea').val('');
  }

  typingMessage = function() {
    var history = {
       name : nickName,
       text : message,
       time : nowT
     };
     localStorage.setItem('history', JSON.stringify(history));
     var  historyName = "",
       historyText = "",
       historyTime = "",
       historyName = (JSON.parse(localStorage.getItem('history')).name),
       historyText = (JSON.parse(localStorage.getItem('history')).text),
       historyTime = (JSON.parse(localStorage.getItem('history')).time);

       var chatBlock = $('.me');
       if (historyText != 0) {
       var newChatBlock =
         '<div class="chatMain mt-2">' +
         '<div class="chatNickName">' +
         '<p>' +historyName+ '</p>'+
         '</div>' +
         '<div class="mychattext">'+
         '<p>'+historyText+'</p>'+
         '</div>' +
         '<div class="chatTime">' +
         '<p>' +historyTime+ '</p>' +
         '</div>'+
         '</div>';
           chatBlock.append(newChatBlock);
        }
  }

  scrollingTextArea = function() {
    var chatResult = $('.text_area');
    chatResult.scrollTop(chatResult.prop('scrollHeight'));
  }

  clearingTextArea();
  typingMessage();
  scrollingTextArea();


});


$('textarea').on('keydown',function(e) {
  if (e.keyCode == 13) {
    $('.btn').trigger('click');
  }
});

$(window).bind('storage', function (e) {
  var  historyName = "",
    historyText = "",
    historyTime = "",
    historyName = (JSON.parse(localStorage.getItem('history')).name),
    historyText = (JSON.parse(localStorage.getItem('history')).text),
    historyTime = (JSON.parse(localStorage.getItem('history')).time);

    var chatBlock = $('.you');
    if (historyText != 0) {
    var newChatBlock =
      '<div class="chatMain mt-2">' +
      '<div class="chatNickName">' +
      '<p>' +historyName+ '</p>'+
      '</div>' +
      '<div class="chattext">'+
      '<p>'+historyText+'</p>'+
      '</div>' +
      '<div class="chatTime">' +
      '<p>' +historyTime+ '</p>' +
      '</div>'+
      '</div>';
        chatBlock.append(newChatBlock);
      }
});
