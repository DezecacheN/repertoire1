//let adresse ;


// const nom="Nicolas";
// const age= 19;
// const moyenne= 18.5;
// const isCool=true;
// const x=null;
// const y=undefined;

// console.log("Ma note en JS est : " + moyenne); 
// console.log(`Sous chaine : ${nom.substring(0,4)}`); 


// console.log(`Je m'appelle  ${nom} et j'ai ${age} ans, mon prénom contient ${nom.length} caractères`); 


//const lettre = ["a", "b", "c", "d", "e"];

//lettre.shift();
//lettre.push("z");
//console.log(lettre[1]);


//const personne = {
//    prenom: "Julien",
//    nom: "La garde",
//    age: 30,
//    passions: ["foot", "natation", "jeux videos"],
//    adresse : {
//    rue : "rue Nationale",
//    ville : "Lille",
//    pays : "France"
//    }
//   };

//   personne.passions.push("manger");

//   personne.adresse = {
//    rue: 'aaa',
//    ville: 'bbb',
//    pays: 'ccc'
//}

//   console.log(`${personne.prenom} est agé de ${personne.age} ans, il habite à ${personne.adresse.ville} `); 
//   console




//todos.push (
//    {
//        id: 5,
//        text: "texte",
//        isCompleted: true,
//    });


//console.log(todos); 


//console.log(todos[todos.length-1].id+1)



//    const age= 17;



//if (age < 18) {
//    console.log("la personne est mineure")
//}
//else {
//    console.log("la personne est majeure")
//}


// const x= 1;
//const y= 2;

//if 
//(x > y) {
 

//  alert("Hello World")};



//  let performance = 70; // nb compris entre 0-100
//  let prime = 0;


//if (performance < 70) {
//    console.log("pas de prime") }
//else if (performance >= 70  && performance < 80) {
//    console.log("prime de 100") }
//else if (performance >= 80 && performance < 90 )  {
//    console.log("prime de 150") }
//else if (performance >= 90) {
//    console.log("prime de 200") };



//x = 18;


//const age = x >= 18 ? "majeur" : "mineur";
//console.log(age);


//   v=voiture /  c=camion

//let vehicule = {
//    id: 11456,
//    matricule: "GH 114654 - 59",
//    type: "v",
//    age: 5,
//};


//vehicule.type = "c" ? console.log ("le vehicule est un camion") : console.log ("le vehicule est une voiture");
//console.log(vehicule.type);

// console.log(` la tache ${todos[1].text} est ${todos[1].isCompleted == 'true' ? 'complétée' : 'non-complétée'}`) ;


//let txt1 = "how're you today?";
//let txt2 = "welcome to HTML";

//let message = txt1.length > txt2.length ? "chaine 1 plus longue" : txt1.length < txt2.length? "chaine 2 plus longue": 'meme longueur';

//const roue = prompt('nombre de roue ?');



//switch (true) {
//    case roue == 2:
//        console.log("moto");
//        break;
//    case roue == 4:
//        console.log("voiture"); 
//        break;
//    case roue == 6:
//        console.log("camion");
//        break;
//    default:
//    console.log("autres");
//=   };



//for (let i = 0; i < 20; i++) {
//    document.write("i stocke la valeur " +
//    i +
//    " lors du passage n°" +
//    (i + 1) +
//    " dans la boucle<br>")
//}


//const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

//for (let i = 0; i < cars.length; i++) {
//    document.write("La voiture " + cars[i] + " contient " + cars[i].length + " caractères. <br>") };


let todos = [
    {
        id: 4,
        text: "Faire les courses",
        isCompleted: true,
    },
    {
        id: 5,
        text: "Balade au vieux Lille",
        isCompleted: true,
    },
    {
        id: 8,
        text: "Préparer le diner",
        isCompleted: false,
    },
    {
        id: 9,
        text: "Regarder la TV",
        isCompleted: false,
    },
    {
        id: 12,
        text: "Préparer le diner",
        isCompleted: false,
    },
    {
        id: 15,
        text: "Regarder la TV",
        isCompleted: false,
    },
];


//for (let i = 0; i < todos.length; i++) {
//    document.write("La tache " + todos[i].text + " est " + (todos[i].isCompleted ?
//        "complétée" : "non complétée") + " et elle contient " + todos[i].text.length +
//        " caractères. <br>")};
    

//let tab = [1, 2, 3, 4, 5, 6]

//let j = 0

//for (let i = 0; i < tab.length; i++) {
//    j += tab[i]};
//    document.write(j);


//let i = 0;
//while (i < todos.length) {
//    document.write(todos[i].text + "<br>");
//    i++;
//}


let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];



//fruits.forEach(function (fruit) {
//    document.write(fruit.toUpperCase() + "<br>");
//});


//todos.forEach(function (todo) {
//    document.write(`${todo.isCompleted ? 'complétée' : 'non-complétée'} <br> `)
//});




    let tabs = [1, 2, 3, 4, 5, 6]

//    const listeTab=tabs.map(function (tab) {
//        return tab **2;
//        });

//    document.write(tabs + "<br>"); 
//    document.write(listeTab);


//    const listeCar=cars.map(function (car) {
//        return car.length;
//        });

//    document.write(listeCar); 


//function reverse(s){
//    return s.split("").reverse().join("");
//}


//for (let i = 0; i < cars.length; i++) {

//var sss = reverse(cars[i])
//document.write(sss + "<br>");
//};




//var phrase = ("Cette instruction appellera la fonction avec un argument valant 5");
//const words = phrase.split(' ');


//function inverse(s){
//    return s.split("").reverse().join("")
//};



//for (let i = 0; i < words.length; i++) {

//    if (words[i].length <= 5) {
//       var uuu = inverse(words[i]).toUpperCase();
//    }
//    else {
//        var uuu = inverse(words[i])
//    }
//    document.write(uuu + " ");

//    };


//a= 2;
//b= 3;
//c= 4;

//function produit(x, y, z) {
//    return x * y * z;
//   }

//document.write (a + " x " + b + " x " + c + " = " + produit(a, b, c) + "<br>");



//min= 4;

//function convert(minute) {
//    return min * 60;
//}

//document.write (min + " minutes sont égales à " + convert(min) + " secondes. <br>");



//let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// 1

//function premier(tab) {
//    return tab[0];
//}

//document.write ("Le Premier Element est : " + premier(cars) + "<br>");




// 2

//const index = prompt('valeur de x ?');


//function elemtx(tab, x) {
//    return tab[(x-1)];
//}

//document.write ("L'element numero " + index + " est : " + elemtx(cars, index) + "<br>");




// 3



//function alea(tab) {
//    var rand = Math.floor(Math.random()*tab.length);
//    return tab[rand];
//}

//document.write ("L'element aleatoire est : " + alea(cars) + "<br>");



// EXO FIZZBUZZ

//const N = prompt ("valeur de N")
//let tab = [];

//for (let i = 0; i < N; i++) {
//    if ((i+1) % 3 == 0 && (i+1) % 5 == 0) {
//        tab.push("FIZZBUZZ <br>");
//    }
//    else if ((i+1) % 3 == 0) {
//        tab.push("FIZZ <br>");
//    }
//    else if ((i+1) % 5 == 0) {
//        tab.push("BUZZ <br>");
//    }
//    else {
//    tab.push(i+1 + "<br>");
//}

//};

//document.write (tab)



// EXO JUSTE PRIX 


//const T = prompt ("Nombre de tentatives :")
//const max = prompt ("Nombre maximum possible")
//let tab2 = [];

//for (let i = 1; i < max; i++) {
//    tab2.push(i);
//}


//function alea(tableau) {
//    var rand = Math.floor(Math.random()*tableau.length);
//    return tableau[rand]; }

//const M = (alea(tab2));

//for (let i = 0; i < T; i++) {
//    const rep = prompt ("Donnez une réponse")
//    if (rep == M) {
//        alert ("victoire");
//        i = T;
//    }
//    else if (rep < M) {
//        alert ("c'est plus, encore " + ((T-1) - i) + " essais");
//    }
//    else if (rep > M) {
//        alert ("c'est moins, encore " + ((T-1) - i) + " essais");
//    }

//}





// const a = parseInt(prompt("valeur de a"));
// const b = parseInt(prompt("valeur de b"));
// const c = parseInt(prompt("valeur de c"));

// function maximum(x, y, z) {
//     return Math.max(x, y, z);
//     if ((x) >= (y) && (x) >= (z)) {
//         return (x);
//     }
//     else if ((y) >= (x) && (y) >= (z)) {
//         return (y);
//     }
//     else if ((z) >= (x) && (z) >= (y)) {
//         return (z);
//     };}

// document.write (maximum(a, b, c) + "<br>");



// 



// const a = parseInt(prompt("premier nombre :"));
// const op = prompt ("opérateur :")
// const b = parseInt(prompt("deuxième nombre :"));



//     function addition(x, y) {
//     return x + y;
//    }

//    function soustraction(x, y) {
//     return x - y;
//    }

//     function produit(x, y) {
//     return x * y;
//    }

//    function quotient(x, y) {
//     return x / y;
//    }


//    function calculette(x, y, z) {

//         if ((y) == "+") {
//             return ((x) + (y) + (z) + " = " + addition(x, z));
//         }
//         else if ((y) == "-") {
//             return ((x) + (y) + (z) + " = " + soustraction(x, z));
//         }
//         else if ((y) == "/") {
//             return ((x) + (y) + (z) + " = " + quotient(x, z));
//         }
//         else if ((y) == "*") {
//             return ((x) + (y) + (z) + " = " + produit(x, z));
//         };}


//     document.write (calculette(a, op, b));




// EX Pendu


const mot = prompt ("mot :")
const v = parseInt(prompt("nombre de vies :"));
let lettres = mot.split('');
let cache = [];


for (let i = 0; i < mot.length; i++) {
    cache.push("_ ");

};

for (let i = 0; i < v;) {
    alert ("mot : " + cache + " Tu as encore " + (v - i) + " vies");
    const choix = prompt ("Choisir une lettre :");

    for (let n = 0; n < mot.length; n++) {
        if (lettres[i] == choix) {
            cache.splice([i], 1, (choix));
            const trouve = 1;
        }
    }
        if (trouve != 1) {
            i++;
        }
        trouve = 0;

}