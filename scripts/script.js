$('.btn').click(function() {
  var message = $('.user_message').val(),
    newMessage = "",
    nickName = $('.user_nickname').val(),
    newNick = "",
    nowT = moment().format('HH:mm'),

  typingMessage = function() {
    var history = {
      name : nickName,
      text : message,
      time : nowT
    };
    localStorage.setItem('history', JSON.stringify(history));
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

$(document).ready(function() {
var  historyName = "",
  historyText = "",
  historyTime = "",
  historyName = (JSON.parse(localStorage.getItem('history'))),
  historyName = (JSON.parse(localStorage.getItem('history')).name),
  historyText = (JSON.parse(localStorage.getItem('history')).text),
  historyTime = (JSON.parse(localStorage.getItem('history')).time);
  console.log(historyName);

  var chatBlock = $('.text_area');
    if (historyText != 0 && historyName != 0) {
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
