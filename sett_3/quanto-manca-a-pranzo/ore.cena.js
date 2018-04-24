var h1 = document.getElementById('title')
var bottone = document.getElementById('newbutton')

// quanto manca ora di cena = ora cena - ora;

setInterval(toset, 1000);
    function toset(){
        h1.innerText = calcolaTempo()
    }
    
    h1.innerText = calcolaTempo();
    
    bottone.addEventListener("click", function(){
        h1.innerText = calcolaTempo()
    })

    function calcolaTempo(){

        var ora = new Date();
        var oraCena = new Date ();
        oraCena.setHours(13,45,00)
            
        var qntManca = oraCena - ora;    
        
        if (qntManca < 0) {
            oraCena= oraCena.setHours(oraCena.getHours() + 24)
            qntManca = oraCena - ora;
        }

        var tempo = convertMS(qntManca);

        
        
        return`${tempo.hours} : ${tempo.minutes} : ${tempo.seconds}`;

        

        }

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
    hours: hour,
    minutes: minute,
    seconds: seconds,
    }
    };







