var main = function () {

var volume;

//The PLAY button

$('#play').click(function () {

$('#message').text("Playing track");

$('#player').trigger("play");

});
  
  //The PLAY button

$('#stop').click(function () {
  $('#player').trigger("pause");
$('#message').text("Track stopped");
$('#player').prop("currentTime",0);
});

//The PAUSE button

$('#pause').click(function () {

$('#message').text("Track Paused");

$('#player').trigger("pause");

});

//This will assign the variable muted with true or false

muted = $("player").prop('muted');


$('#mute').click(function () {

$('#message').text("Track Muted");

$("#player").prop('muted', true);

});

$('#unmute').click(function () {

$('#message').text("Track Unmuted");

$("#player").prop('muted', false);

});

$('#volumeup').click(function () {
var volume = $("#player").prop("volume")+0.1;
if(volume >1){
volume = 1;
}
$("#player").prop("volume",volume);
});

$('#volumedown').click(function () {
var volume = $("#player").prop("volume")-0.1;
if(volume <0){
volume = 0;
}
$("#player").prop("volume",volume);
});
}

$(document).ready(main);

