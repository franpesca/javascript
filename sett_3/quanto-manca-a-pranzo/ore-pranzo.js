var x = document.getElementById('title')
var y = document.getElementById('newbutton')


//quanto manca a pranzo = adesso- ora di pranzo

var ora = new Date()
var oraDiPranzo = new Date()

oraDiPranzo.setHours(16,30,13)

var quantoManca = oraDiPranzo - ora

function convertMS(milliseconds) {
    var hour
    var minute
    var seconds
  
    seconds = Math.floor(milliseconds / 1000)
    minute = Math.floor(seconds / 60)
    seconds = seconds % 60
    hour = Math.floor(minute / 60)
    minute = minute % 60
    hour = hour % 24
    return {
      hour: hour,
      minutes: minute,
      seconds: seconds,
    }
  };
  
  var quantoMancaOggetto = convertMS(quantoManca); 

console.log(quantoMancaOggetto);

var ore = quantoMancaOggetto.hour
var minuti = quantoMancaOggetto.minutes
var secondi = quantoMancaOggetto.seconds
var time = `${ore} : ${minuti} : ${secondi}`

console.log(time);

x.textContent= time;


 




//  function converstMS(quantoManca);