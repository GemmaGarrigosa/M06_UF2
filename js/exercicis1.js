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
    arrayInicial = ['Adrià', 'Òscar', 'Joana', 'Vero'];
    arrayMutable = ['Adrià', 'Òscar', 'Joana', 'Vero'];

    let metodeat = arrayInicial.at(0);
    let concatenacio = arrayMutable.concat('Neus'); 
    let copia = arrayMutable.copyWithin(1);
    let entrades = arrayInicial.entries();
    let tots = arrayInicial.every(mesPetit);

    for (let i of entrades){

    }

    document.writeln(`${arrayInicial} -> at(0) -> ${metodeat}</br>`);
    document.writeln(`${arrayInicial} -> concat('Neus') -> ${concatenacio}</br>`);
    // document.writeln(`${arrayInicial} -> concat('Neus') -> ${concatenacio}`); // constructor
    document.writeln(`${arrayInicial} -> copyWithin('1') -> ${copia}</br>`);
    document.writeln(`${arrayInicial} -> entries() -> ${entrades}</br>`);
    document.writeln(`${arrayInicial} -> arrayInicial.every('mesPetit') -> ${tots}</br>`);
 }
