// Primer exercici

function exerciciColors(){
    let color = ['verd','vermell','groc','blau','negre','blanc'];
    
 
    let tots = color.every(mesPetit);
    let menors = color.filter(mesPetit);
    let ultims = color.slice(color.length-2);

    let arrayTurquesa = color.push("turquesa"); //afegeix element al final
    color.shift(); //elimina primer element

    document.write(`Digui si tots els colors sóion menors que 'marró' :${tots}</br> Et torni els colors que són menors que 'marró': ${menors} </br> Els darrers 2 colors (independentment de quants hi hagin abans): ${ultims} </br> afegeix el color turquesa ${arrayTurquesa} </br> elimina color verd:   ${color} </br> `);
 }
 
 function mesPetit(color){
    return color < 'marro';
 }

 
// Segon exercici 

 function exerciciFuncions(){

   //VARIABLES
    arrayInicial = ['Adrià', 'Òscar', 'Joana', 'Vero'];
    arrayMutable = ['Adrià', 'Òscar', 'Joana', 'Vero'];
    arrayMutable2 = ['Adrià', 'Òscar', 'Joana', 'Vero'];
    arrayPop = ['Adrià', 'Òscar', 'Joana', 'Vero'];
    arrayPush = ['Adrià', 'Òscar', 'Joana', 'Vero'];
    arrayFlat = [['Adrià','Gemma','Òscar'],['Joana','Vero']];
    numeros = [1,2,3,4];
    text = "PENJAT";
    arreglo = ['H','O','L','A'];

    let metodeat = arrayInicial.at(0);
    let concatenacio = arrayMutable.concat('Neus'); 
    let copia = arrayMutable.copyWithin(1);
    let entrades = arrayInicial.entries(); //TODO
    let tots = arrayInicial.every(mesPetit);
    let filtrat = arrayInicial.filter(mesPetit);
    let afegit = arrayMutable2.fill('Angelo');
    let arrayNou = new Array('Hola soc un nou array');
    let esVero = (alumnes)=>alumnes =='Vero'; // passa l'array i busca en ell quina coincidència hi ha
    let Vero = arrayInicial.find(esVero);
    let index = arrayInicial.findIndex(esVero);
    let flatedArray = arrayFlat.flat();
    let flatmap = arrayInicial.flatMap((alumnes)=> alumnes.toUpperCase());
    let textAArray = Array.from(text);
    let jaNoArreglo = arreglo.join(' ');
    let estaJoana = arrayInicial.includes('Joana');
    let tret = arrayPop.pop();
    let posat = arrayPush.push('Oriana');
    let iterador = arrayInicial.keys();


   
    //Funció que t'indica quin element hi ha a certa posició
    document.writeln(`1. ${arrayInicial} -> at(0) -> ${metodeat}</br>`);

    //Funció que concatena elements al array
    document.writeln(`<br>2. ${arrayInicial} -> concat('Neus') -> ${concatenacio}</br>`);

    //Constructor per a crear un nou array
    document.writeln(`<br>3. ${arrayInicial} -> new Array() -> ${arrayNou}</br>`); 

    //Funció que copia un element al array
    document.writeln(`<br>4. ${arrayInicial} -> copyWithin('1') -> ${copia}</br>`);


    document.writeln(`<br>5. ${arrayInicial} -> entries() -> ${entrades}</br>`);//TODOTODOTODOTODOTODOTODOTODOTODOGEMMANOTENOBLIDISSIUSPLAU

    //Funció booleana que et diu si es compleix una condició en tots els elements de l'array
    document.writeln(`<br>6. ${arrayInicial} -> arrayInicial.every('mesPetit') -> ${tots}</br>`);

    //Funció que emplena els valors de l'array pel valor que tu indiques, també podries fer operacions aritmètiques
    document.writeln(`<br>7. ${arrayInicial} -> arrayMutable2.fill('Angelo') -> ${afegit}</br>`);

    //Funció que filtra i et retorna els elements que compleixen amb la condició donada
    document.writeln(`<br>8. ${arrayInicial} -> arrayInicial.filter('mesPetit') -> ${filtrat}</br>`);

    //Funció que et retorna el element que estàs buscant
    document.writeln(`<br>9. ${arrayInicial} -> arrayInicial.find(esVero) -> ${Vero}</br>`);

    //Funció que et retorna l'índex de l'element que estàs buscant
    document.writeln(`<br>10. ${arrayInicial} -> arrayINicial.findIndex(esVero) -> ${index}</br>`);

    //Funció que concatena arrays d'arrays en un únic array
    document.writeln(`<br>11. [['Adrià','Gemma','Òscar'],['Joana','Vero']]-> arrayFlat.flat() -> ${flatedArray}</br>`);

    //Funció que mapeja tots els elements d'un array i et crea un nou array
    document.writeln(`<br>12. ${arrayInicial} -> arrayInicial.flatMap((alumnes)=> alumnes.toUpperCase())-> ${flatmap}</br>`);

    //Funció que recorre els elements d'un array 
    document.writeln(`<br>13. ${arrayInicial} -> arrayInicial.forEach((alumne)=> document.write(alumne + '</br>'))->`);
    arrayInicial.forEach((alumne)=> document.write(alumne + '</br>'));

    //Funció que et crea un array a partir d'un string
    document.writeln(`<br>14. ${text} -> Array.from(text) -> ${textAArray}</br>`);

    //Funció booleana que et diu si existeix aquell valor en l'array
    document.writeln(`<br>15. ${arrayInicial} -> arrayInicial.includes('Joana') -> ${estaJoana}</br>`);

    //Funció booleana que t'indica a quina posició està cert valor 
    document.writeln(`<br>16. ${arrayInicial} -> arrayInicial.indexOf('Òscar') -> ${arrayInicial.indexOf('Oscar')}</br>`);

    //Funció booleana que retorna true si és un array 
    document.writeln(`<br>17. ${arrayInicial} -> Array.isArray(arrayInicial) -> ${Array.isArray(arrayInicial)}</br>`);

    //Funció que uneix un array a string i a més pots substituïr la coma que acostuma a posar per un altre element 
    document.writeln(`<br>18. ${arreglo} -> arreglo.join(' ')-> ${jaNoArreglo}</br>`);

    //Retorna un iterador de l'array que conté les claus del array original
    document.writeln(`<br>19. ${arrayInicial} -> arrayInicial.keys()->` );

    for(let clau of iterador){
      document.writeln(clau);
    }

    document.writeln('<br>');
    //Funció que retorna l'última posició de l'array 
    document.writeln(`<br>20. ${arrayInicial} -> lastIndexOf() -> ${estaJoana}</br>`); //TODO

    //Funció que retorna la longitut de l'array 
    document.writeln(`<br>21. ${arrayInicial} -> arrayInicial.length -> ${arrayInicial.length}</br>`);

    //Funció que retorna un nou array amb el resultat de la funció que crida
    document.writeln(`<br>22. ${numeros} -> arrayInicial.map(sumaDos) -> ${numeros.map(sumaDos)}</br>`); 

    //Funció que elimina l'ultim element d'un array 
    document.writeln(`<br>23. ${arrayInicial} -> arrayPop.pop() -> </br> retorna: ${tret} </br> modifica: ${arrayPop}</br>`);

    //Et permet afegir propietats i mètodes a un array 

    function Alumne(nom,cognom,edat){
      this.nom = nom; 
      this.cognom = cognom;
      this.edat = edat;
    }
    
    Alumne.prototype.nota = 10;
    let joMateixa = new Alumne("Gemma","Garrigosa",28);
    document.writeln(`<br>24. ${JSON.stringify(joMateixa)} -> Alumne.prototype.nota = 10 -> valor afegit ${joMateixa.nota} </br>`); //he fet un json Stringify per mostrar l'objecte sencer, no ho faig en el resultat perque JSON.stringify 
                                                                                                                                    //no mostra les prototype només mostra les propietats propies de la classe, pendent de consultar-te a classe

 
    //Et permet afegir un element al final de l'array i et retorna la seva posició 

    document.writeln(`<br>25. ${arrayInicial} -> arrayPush.push('Oriana') -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    //

    document.writeln(`<br>26. ${arrayInicial} -> reduce()-> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>27. ${arrayInicial} -> reduceRight() -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>28. ${arrayInicial} -> reverse-> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>29. ${arrayInicial} -> shift() -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>30. ${arrayInicial} -> slice() -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>31. ${arrayInicial} -> some() -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>32. ${arrayInicial} -> sort() -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>33. ${arrayInicial} -> splice() -> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);
    
    document.writeln(`<br>34. ${arrayInicial} -> toString()-> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);

    document.writeln(`<br>35. ${arrayInicial} -> unshift()-> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);
    
    document.writeln(`<br>36. ${arrayInicial} -> valueOf()-> </br> retorna: ${posat} </br> modifica: ${arrayPush}</br>`);
 }


//Funcions extres que he fet servir pels exercicis 

 function trovaVero(arrayInicial){
   return arrayInicial ==='Vero';
 }
function sumaDos(numeros){
   return numeros += 2;
}
