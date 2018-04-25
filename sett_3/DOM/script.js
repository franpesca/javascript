// var colorpicker = document.getElementById('colore')

// var body = document.getElementById('body')



// //Crea una funziona che cambia il background del body ogni volta che cambiamo il colore nell'input
// //        addEventlistener() 

// //colorpicker.value --> colore elemento

// colorpicker.addEventListener("input", function(color){
//     body.style.backgroundColor= colorpicker.value
// });




//Cambia il colore dell'elemento body dall'input:
//Crea un input di tipo "color"
//Crea una funziona che cambia il background del body ogni volta che cambiamo il colore nell'input

var bcolor = document.getElementById('body')
var icolor = document.getElementById('colore')

icolor.addEventListener('input', function(){
    bcolor.style.backgroundColor = icolor.value
});





//input e il tipo di evento, 
//color e il tipo di input