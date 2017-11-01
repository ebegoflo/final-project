var numCard = prompt('Ingresa tu numero de tarjeta');[]


function isValidCard (numCard) {
  var arrNumCard= numCard.split (''); // creamos un array para poder recorrerlo
    arrNumCard.reverse();
    console.log (arrNumCard);
    for (var i = 0; i < arrNumCard.length; i++) {
      var newArrNumCard = parseInt(arrNumCard[i]); //cada uno de los elmento del arreglo lo paso a entero
            console.log (newArrNumCard);


        }
}




isValidCard(numCard);
