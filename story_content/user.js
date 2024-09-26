function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qA2UwpvsUM":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="punky.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

