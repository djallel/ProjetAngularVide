//Fonction fléchée simple
const addition = (a, b) => a + b;
console.log(addition(3, 4)); // 7

//Fonction fléchée avec un seul paramètre
/**
 * Quand une fonction fléchée n'a qu'un seul paramètre, les parenthèses autour du paramètre peuvent être omises.
 */

const carre = a =>a*a;
console.log(carre(3)); // 7

/**
 * Fonction fléchée sans paramètres
 */

const salut = () => console.log('Bonjour!');
salut(); // Bonjour!


/**
 * Fonction fléchée comme méthode d'un objet
 *
 */

const objet = {
  valeur: 42,
  methodeee: function() {
    setTimeout(() => {
      console.log(this.valeur);
    }, 1000);
  }
};

objet.methodeee(); // 42
