/**
 * @function
 * @param {number} a
 * @param {number} b
 * Retourne la somme de a et b
 */
function addition(a, b) {
  // implentez la fonction
    if (typeof(a) != typeof(1) || typeof(b) != typeof(1)){
      throw new Error ("Mauvais type!");
    }
    return a + b;
}

/**
 * @function
 * @param {number} a
 * @param {number} b
 * Retourne le quotient de a et b
 */
function quotient(a, b) {
  // implentez la fonction
  if (typeof(a) != typeof(1) || typeof(b) != typeof(1)){
    throw new Error ("Mauvais type!");
  }
  if (b === 0){
    throw new Error("Il est impossible de diviser par 0!");
  }
    return a / b;
}

module.exports = {
  addition,
  quotient,
};
