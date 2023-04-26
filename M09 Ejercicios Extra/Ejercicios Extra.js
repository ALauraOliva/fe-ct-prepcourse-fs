/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arrayPadre = []; //[]
   for(var prop in objeto){ //prop representa el nombre de una propiedad
      arrayPadre.push([prop,objeto[prop]]);   //clave
  }
  return arrayPadre;
}

function numberOfCharacters(string) { 
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var objetoLetras = {}; 

   for(var i = 0; i < string.length; i++){
      let letra = string[i];              
      if(objetoLetras[letra]){          // notaion de brackets para que la propiedad no tenga nombre literal, si no que tome la d ela letra 
         objetoLetras[letra]++;
      } else{
         objetoLetras[letra] = 1;
      }
   }
   return objetoLetras;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
    string.split(''); //H,E,N,R,Y,s,o,y
    var superr = string.toUpperCase().split('');
    var bajo = string.toLowerCase().split('');
    var arrayUpp =[];
    var i = 0;

    for (var i =0; i<string.length;i++){
       if(string[i]===superr[i]){
          arrayUpp.push(string[i])
       }
    }
    for (var i =0; i<string.length;i++){
       if(string[i]===bajo[i]){
          arrayUpp.push(string[i])
       }
    }
    return arrayUpp.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
     let spl1 = frase.split(' '); // [the,henry,challenge,is,close]
     let resultado = '';  

   for (let con = 0; con < spl1.length ; con++){ 
      res1 = spl1[con].split('').reverse(); //t,h,e
      resultado += res1.join('')+' ';
   }
   return resultado.trim();   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
    let Snumero = String(numero); 
    let compa   =String(numero);  // de numero a string
    Snumero = Snumero.split('');  //a array
    var i = Snumero.length;       //length snumero
    var res =[];                  
    var revjoin = '';             
    do {
       i--;
       res.push(Snumero[i]);
    }while (i > 0)

    revjoin = res.join('')
    if (revjoin === compa){
       return "Es capicua";
    }else{
       return "No es capicua";
    }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
    var tmpString = [];
    tmpString = string.split('');

    for (let i =0 ; i<tmpString.length;i++){
       if ((tmpString[i]) === 'a' ||(tmpString[i]) === 'b' ||(tmpString[i]) === 'c'){
          delete tmpString[i];
       }
    }
    string = tmpString.join('');
    return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return (arrayOfStrings.sort((a,b) => a.length - b.length));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrayUnion = [];

   array1.forEach(element => {array2.map(function(ele){if(ele === element){arrayUnion.push(ele);}}); });

   //for(var i = 0; i < array1.length; i++){
   //   array2.map(function(ele){
   //      if(ele === array1[i]){
   //         arrayUnion.push(ele);
   //      }
   //   });
   return arrayUnion;
   }
   

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
