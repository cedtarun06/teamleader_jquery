setInterval(function(){
    setTime();
  },1000);

  setTimeout(function(){
    $(".minutehand").slideDown();
    $(".secondhand").slideDown();
    $(".hourhand").slideDown();
  },1100);
//this function for set interval
  function setTime(){
    var d = new Date();
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hours = d.getHours();

    hour_degree = minutes/60*30;

    second_degree = 270 + (seconds*6);
    $(".secondhand").css('transform','rotate('+second_degree+'deg)');

    minute_degree = 270 + (minutes*6);
    $(".minutehand").css('transform','rotate('+minute_degree+'deg)');

    $(".hourhand").css('transform','rotate('+hour_degree+'deg)');
  }
