$(function () {
  $('#green').mouseover(function() {
    $('#text').css('color','green');
    $('#green').mouseout(function () {
      $('#text').css('color','black');
    });
  });
});
$(function () {
  $('#red').mouseover(function() {
    $('#text').css('color','red');
    $('#red').mouseout(function () {
      $('#text').css('color','black');
    });
  });
});
$(function () {
  $('#blue').mouseover(function() {
    $('#text').css('color','blue');
    $('#blue').mouseout(function () {
      $('#text').css('color','black');
    });
  });
});
