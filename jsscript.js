
console.log("bonjour");
console.log(2 + 3);

const prenom = prompt("Quel est ton prénom ?");
alert("Bonjour " + prenom);

const age = Number(prompt("Quel est ton âge ?"));
console.log("Dans 5 ans tu auras " + (age + 5) + " ans");

// Partie B 

const notes = [12, 15, 9, 17, 8];

let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
}

const moyenne = somme / notes.length;

console.log("Moyenne : " + moyenne);

if (moyenne >= 16) {
    console.log("Mention : Très bien");
} else if (moyenne >= 14) {
    console.log("Mention : Bien");
} else if (moyenne >= 10) {
    console.log("Mention : Passable");
} else {
    console.log("Mention : Insuffisant");
}

let compteur = 0;

for (let i = 0; i < notes.length; i++) {
    if (notes[i] >= 10) {
        compteur++;
    }
}

console.log("Nombre de notes >= 10 :", compteur);

let max = notes[0];
let min = notes[0];

for (const n of notes) {
    if (n > max) {
        max = n;
    }

    if (n < min) {
        min = n;
    }
}

console.log("Note maximale : " + max);
console.log("Note minimale : " + min);


// Partie C 
    function caluculmoyenne(tableau) {
    let somme = 0;

    for (const n of tableau) {
        somme += n;
    }

    return somme / tableau.length;
}

function mention(note) {
    if (note >= 16) {
        return "Très bien";
    } else if (note >= 14) {
        return "Bien";
    } else if (note >= 10) {
        return "Passable";
    } else {
        return "Insuffisant";
    }
}

function compterSuperieures(tableau, seuil) {
    let compteur = 0;

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] >= seuil) {
            compteur++;
        }
    }

    return compteur;
}

function maxNote(tableau) {
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return max;
}

function minNote(tableau) {
    let min = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < min) {
            min = tableau[i];
        }
    }

    return min;
}

const estAdmis = (note) => note >= 10;


// fonctions

console.log("----- TEST MOYENNE -----");
console.log(moyenne([12, 15, 9]));
console.log(moyenne([10, 14, 18]));
console.log(moyenne([8, 6, 12]));

console.log("----- TEST MENTION -----");
console.log(mention(15.5));
console.log(mention(12));
console.log(mention(8));

console.log("----- TEST COMPTER SUPERIEURES -----");
console.log(compterSuperieures([12, 5, 18], 10));
console.log(compterSuperieures([8, 14, 16], 12));
console.log(compterSuperieures([5, 7, 9], 10));

console.log("----- TEST MAX -----");
console.log(maxNote([12, 15, 9]));
console.log(maxNote([3, 20, 11]));
console.log(maxNote([8, 6, 10]));

console.log("----- TEST MIN -----");
console.log(minNote([12, 15, 9]));
console.log(minNote([3, 20, 11]));
console.log(minNote([8, 6, 10]));

console.log("----- TEST EST ADMIS -----");
console.log(estAdmis(15));
console.log(estAdmis(8));
console.log(estAdmis(10));
