/* Voorbeeld
function startCantus(deelnemer1, deelnemer2, deelnemer3, preaces) {
    var deelnemers = [];
    
    deelnemers.push(deelnemer1);
    deelnemers.push(deelnemer2);
    deelnemers.push(deelnemer3);
    
    alert("ad fundum");
    
    return deelnemers;
}

var deelnemerscantus = startCantus("Jos Josser", "Jef Jeffers", "Sam Sammers")

console.log(deelnemerscantus);


                                                                 OPDRACHT 3, CHECK OF EEN WAARDE TRUTHY OF FALSY IS
document.addEventListener("DOMContentLoaded", function() {
      

function trueOrFalse(waarde) {
       if (waarde) {
        return  "truthy";
    }
    else{
        return  "falsy";
    }
}

console.log(trueOrFalse("yes"))
console.log(trueOrFalse(NaN))

})

 

                                                                 OPDRACHT 4,  CHECK OF EEN WAARDE GELIJK IS AAN MIJN NAAM
document.addEventListener('DOMContentLoaded', function() {
    
    function mijnNaam(naam) {
        if (naam === 'Nico') {
            return 'hallo Nico'
        } else {
            return 'Wie ben jij'
        }
}

console.log(mijnNaam('Nico'));
console.log(mijnNaam('Joske'))
})


                                                             OPDRACHT 5, CHECK OF EEN WAARDE GELIJK IS AAN NaN
 NaN is nooit gelijk aan zichzelf en Nan is het resultaat van een mislukte (onmogelijke) berekening
 
 
document.addEventListener('DOMContentLoaded', function() {
  
  function isDitNaN(waarde) {
      if (waarde !== waarde) {
          return 'is NaN';
      } else{
          return 'Is niet NaN';
      }
      
      }
      
      console.log(isDitNaN(0));
      console.log(isDitNaN(NaN));
})



                                                          OPDRACHT 6, CHECK OF TWEE WAARDES VAN HETZELFDE TYPE ZIJN 
 
 document.addEventListener('DOMContentLoaded', function() {
     function zijnDezeWaardesHetzelfdeType(parameter1, parameter2) {
        if (parameter1 === null && parameter2 === null) {
            return 'zijn van hetzelfde type';
            }
            
            else if (parameter1 === null || parameter2 === null) {
            return 'zijn niet van hetzelfde type';
            }
            
            else if (typeof parameter1 === typeof parameter2)
            return 'zijn van hetzelfde type';
        else{
         return 'zijn niet van hetzelfde type'
     }
 }
  console.log(zijnDezeWaardesHetzelfdeType(null, null))
  console.log(zijnDezeWaardesHetzelfdeType(null, []))
  console.log(zijnDezeWaardesHetzelfdeType(6, 5))
  
  
 })

  Opdracht 7
document.addEventListener('DOMContentLoaded', function() {
    function welkeWaardeIsGroter(waarde1, waarde2) {
        
        if (typeof waarde1 != 'number' || typeof waarde2 != 'number'   ) {
            return false
        }
        
        else if (waarde1 > waarde2) {
            return 'waarde1 is groter'
        }
        
        else if (waarde1 < waarde2) {
            return 'waarde 2 is groter'
        }
        else  (waarde1 === waarde2) 
            return 'beide waardes zijn even groot'
        

    }
console.log(welkeWaardeIsGroter(5, 10))
console.log(welkeWaardeIsGroter('test', 8))
console.log(welkeWaardeIsGroter('test', 'test2'))
})

    Opdracht 8
een '+' voor een string probeert deze om te zetten tot een 'number'

document.addEventListener('DOMContentLoaded', function() {
    function nummersAftrekken (waarde1, waarde2) {
        var resultaat = waarde1 - waarde2;
        if (resultaat !== resultaat) return 0;
        else return resultaat;
    }
    console.log(nummersAftrekken(8,9));
    console.log(nummersAftrekken('6',3));
    console.log(nummersAftrekken('jos',3));
});

Opdracht 9
document.addEventListener('DOMContentLoaded', function() {
    function optellenEnNumberReturnen (waarde1, waarde2) {
        var resultaat = +waarde1 + +waarde2;
        return Number (resultaat);
    }
    console.log(optellenEnNumberReturnen(9,5));
    console.log(optellenEnNumberReturnen('9','5'));
    console.log(optellenEnNumberReturnen('josh' + 5));
});
//                OPDRACHT 17 niet af

document.addEventListener('DOMContentLoaded', function VraagDeLeeftijd() {
    
    do{
        var leeftijd = prompt('Wat is jou leeftijd?');
        leeftijd = Number(leeftijd)
        var ok = true;
        
        if (leeftijd != leeftijd) {
            ok = false;}
            
        else if (leeftijd < 6) {
            ok = false}
            
       else if (leeftijd > 120) {
            ok = false;}
            
        else (ok = true);
         
        
    } while (ok = false);
    
    confirm('is ' + leeftijd + ' jou correcte leeftijd?');
    
VraagDeLeeftijd();
});

// OPDRACHT 18

var auto = {
    kleur: 'blauw',
    banden: 'opgepompt',
    staat: 'vuil',
    milieuvriendelijk: 'ja',
    gastank: 'leeg',
    weer: 'regen',
    ruitenwissers: 'uit',
    olie: 'ververst',
    temperatuur: 'koud',
    verwarming: 'uit',
    
rijden: function(gastank) {
    if(gastank == 'vol') {
        alert('vroem vroem');
    } else if (gastank == 'leeg' && this.banden != 'opgepompt') {
        alert('te laat')
    } else {
        alert('gaan tanken')
    }
},
schoonmaken: function() {
    if(this.staat =='vuil') {
        alert('auto schoonmaken')
    } else{
        alert('O.K.')
    }
},
veiligheid: function() {
    if(this.weer == 'regen' && this.ruitenwissers == 'uit') {
        alert('zet je ruitenwissers op')
    } else if (this.weer == 'zonnig' && this.ruitenwissers == 'aan') {
        alert('zet je ruitenwissers af')
       }  else (alert('kies zelf maar'))
},
comfort: function() {
    if(this.temperatuur == 'koud' && this.verwarming == 'uit'){
        alert('zet je verwarming op')
    } else if (this.temperatuur == 'warm' && this.verwarming == 'aan'){
        alert('zet je verwarming af')
    }else (alert('goed zo'))
    }
}

var pikachu = {
    vachtkleur: 'geel',
    oren: 'spits',
    wangen: 'opgeladen',
    persoonlijkheid: 'agressief',
    getemt: 'nee',
    typeEter: 'zoet',
    voedsel: 'zuur',
    type: 'elektriciteit',
    gewicht: 'zwaarlijvig',
    alGevangen: 'nee',
    
juist: function() {
    if(this.vachtkleur == 'geel' && this.oren == 'spits'){
        alert('dit is waarschijnlijk een Pikachu')
    } else (alert('analyseer is met je Pokedex'))
        },
        
gevaar: function() {
    if(this.wangen == 'opgeladen' && this.persoonlijkheid == 'agressief') {
        alert('opletten voor elektrische schokken')
    } else if (this.wangen == 'uitgeput' && this.persoonlijkheid == 'agressief') {
        alert('pas op voor de staart')
    } else (alert('wees voorzichtig'))
},

vangen: function() {
    if(this.getemt == 'nee' && this.alGevangen == 'nee') {
        alert('gooi een pokeball')
    } else if (this.getemt == 'ja' && this.alGevangen == 'nee'){
        alert('Je mag geen pokemon stelen van andere mensen')
    } else (alert('kies maar'))
},

voeding: function() {
    if(this.typeEter == this.voedsel) {
        alert('blijf dit type voeding geven')
    } else(alert('probeer een ander type voedsel')) 
}

    }
OPDRACHT 19

var komenEten ={
    kind: 'Jos',
    aanwezig: 'Nee',
    aantalKerenGeroepen: '0',
    JosAanTafelRoepen: function() {
        this.aantalKerenGeroepen++
        if (this.aantalKerenGeroepen > 10 ) {
            console.log('NU komen eten of jou computer vliegt uit het raam met jou erbij');
        }
        else {console.log('Jos, komen eten');}
    }
}

var straatverlichtingIsAan = true;

straatverlichtingIsAan = straatverlichtingIsAan && console.log('rij voort!');
straatverlichtingIsAan = straatverlichtingIsAan && 5 > 6 && console.log('De wereld is gebroken.');

var personen;

personen = personen || [];
personen.push('Joske');

personen = personen || [];
personen.push('Jefke');

OPDRACHT 2

var boodschap = '';
boodschap == 'Beste';
if (geslacht == 'man') {
    boodschap == 'jongen';
} else {
    boodschap == 'meisje';
}
boodschap == ' u wordt verwacht aan de balie';
console.log(boodschap);

var geslacht = 'man';
console.log('Beste, ' + (geslacht == 'man' ? 'jongen' : 'meisje') + ' u wordt verwacht aan de balie');

*/