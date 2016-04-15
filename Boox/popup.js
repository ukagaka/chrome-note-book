chrome.storage.local.get('myBookTextarea',function(result){
  $('#content').html(result.myBookTextarea);
  if(result.myBookTextarea){
    $('#content').html(result.myBookTextarea);
  }else{
    $('#content').html('点击输入笔记内容……');
  }
});
$('#save').click(function(){
  var text = $('textarea').val();
  chrome.storage.local.set({'myBookTextarea': text}, function(){
    $('#text').css('display','none');
    $('#content').css('display', 'block');
  });
  $('#content').html(text);
});
$('#content').click(function(){
  var text = $('#content').html();
  $('#text').css('display', 'block');
  $('#content').css('display', 'none');
  $('textarea').val(text);
});
