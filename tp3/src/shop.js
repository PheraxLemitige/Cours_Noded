const { isString } = require('lodash');
var _ = require('lodash');
const product = require("./products.json");

/**
 * @function
 * @param {number} id, id de l'utilisateur a rechercher
 * @param {Array} usersData, tableau contenant la liste des utilisateurs 
 * Retourne les données de l'utilisateur de la liste qui correpondant à l'id 
 */
function getUser(id, usersData) {
  // implentez la fonction
  if(typeof(id) != typeof(2)){
    throw new Error("L'identifiant doit être un entier positif");
  }
  if(id < 1){
    throw new Error("L'identifiant doit être un entier positif");
  }
  if(typeof(usersData) != typeof([])){
    throw new Error("La liste des utilisateur doit être un tableau contenant des utilisateurs");
  }
  if(usersData.length == 0){
    throw new Error("La liste des utilisateur est vide")
  }
  taille = usersData.length;
  if (taille < id){
    throw new Error ("L'utilisateur " +  id + " n'existe pas!");
  }
  return usersData[id - 1];
}

/**
 * @function age
 * @param {Array} users 
 * Retourne les personnes avec plus que 50 ans
 */
function age(users) {
  usersAge = []
  if(!(_.isArray(users))){
    throw new Error("La liste des utilisateur doit être un tableau contenant des utilisateurs");
  }
  if(users.length == 0){
    throw new Error("La liste des utilisateur est vide")
  }
  for (let i = 0; i < users.length; i++){
    if(users[i].age >= 50){
      usersAge.push(users[i]);
    }
  }
  return usersAge;
}

/**
 * @function getPhoneNumber
 * @param {Array} usersData
 * Retourne les numéro de téléphone des personne de plus 50 ans
 */
function getPhoneNumber(usersData){
  if(!(_.isArray(usersData))){
    throw new Error("La liste des utilisateur doit être un tableau contenant des utilisateurs");
  }
  if(usersData.length == 0){
    throw new Error("La liste des utilisateur est vide")
  }
  perso = age(usersData);
  phonesNumber = []
  if(_.isEqual(perso, [])){
    throw new Error("Aucun personne ne correspond")
  }
  for (let i = 0; i < perso.length; i++){
    phonesNumber.push(perso[i].phone);
  }
  console.log(phonesNumber);
  return phonesNumber
}

/**
 * @function getInfoProduit
 * @param {Array} productsData
 * retourne les infomartion de ce produit
 */
function getInfoProduit(productsData){
  productInfo = {};
  dispo = "";
  if (!(_.isArray(productsData))){
    throw new Error("L'element productData n'est pas une liste");
  }
  if(_.isEqual(productsData, [])){
    throw new Error("La liste est vide");
  }

  for (let i = 0; i < productsData.length; i++){
    if (!(_.isString(productsData[i].category))){
      throw new Error("La categorie doit être un String");
    }
    if (!(productsData[i].category in productInfo)){
      productInfo[productsData[i].category] = [];
    };
    if (!(_.isNumber(productsData[i].stock))){
      throw new Error("Le stock doit être un entier positif");
    }
    if (productsData[i].stock < 0){
      throw new Error("Le stock doit être positif");
    }
    if (productsData[i].stock < 10){
      dispo = "low";
    }
    else if (productsData[i].stock < 10){
      dispo = "meduim";
    }
    else{
      dispo = "high";
    };
    productInfo[productsData[i].category].push({"libelle" : productsData[i].title, "dispo": dispo });
  }
  return productInfo;
}

console.log(getInfoProduit(product));
module.exports = {
  getUser, getPhoneNumber, age, getInfoProduit
};
