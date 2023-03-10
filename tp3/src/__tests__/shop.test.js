const { getUser, getPhoneNumber, age, getInfoProduit } = require("../shop");

const fakeUsers = require("../__mocks__/fakeUserValid.json");
const fakeUserLess50Years = require("../__mocks__/userLess50Years.json");
const fakeProductTypeCategory = require("../__mocks__/fakeProductTypeCategory.json");
const fakeProductTypeStock = require("../__mocks__/fakeProductTypeStock.json");
const fakeProductTypeStockNegatif = require("../__mocks__/fakeProductTypeStockNegatif.json");

describe("shop.js", () => {
  describe("getUser", () => {
    it("Doit retourner le bon user", () => {
      const res = getUser(1, fakeUsers);
      expect(res).toBe(fakeUsers[0]);
    });
    it("Doit renvoyer une erreur car l'utilisateur n'existe pas", () => {
      expect(() => {
        getUser(10, fakeUsers);
      }).toThrow("L'utilisateur 10 n'existe pas!");
    });
    it("Doit throw une erreur car l'identifiant passé en parametre est du mauvais type", () => {
      expect(() => {
        getUser("toto", 2);
      }).toThrow("L'identifiant doit être un entier positif");
    });
    it("Doit throw une erreur car la liste des utilisateur est du mauvais type", () => {
      expect(() => {
        getUser(1, "liste");
      }).toThrow(
        "La liste des utilisateur doit être un tableau contenant des utilisateurs"
      );
    });
    it("Doit throw une erreur car la liste des utilisateur ne doit pas être vide", () => {
      expect(() => {
        getUser(1, []);
      }).toThrow("La liste des utilisateur est vide");
    });
    it("Doit throw une erreur car l'id est invalide", () => {
      expect(() => {
        getUser(-1, fakeUsers);
      }).toThrow("L'identifiant doit être un entier positif");
    });
  });
  describe("age", () => {
    it("Doit throw une erreur car la liste des utilisateur est du mauvais type", () => {
      expect(() => {
        age("liste");
      }).toThrow(
        "La liste des utilisateur doit être un tableau contenant des utilisateurs"
      );
    });
    it("Doit throw une erreur car la liste des utilisateur ne doit pas être vide", () => {
      expect(() => {
        age([]);
      }).toThrow("La liste des utilisateur est vide");
    });
  });
  describe("getPhoneNumber", () => {
    it("Doit throw une erreur car la liste des utilisateur est du mauvais type", () => {
      expect(() => {
        getPhoneNumber("liste");
      }).toThrow(
        "La liste des utilisateur doit être un tableau contenant des utilisateurs"
      );
    });
    it("Doit throw une erreur car la liste des utilisateur ne doit pas être vide", () => {
      expect(() => {
        getPhoneNumber([]);
      }).toThrow("La liste des utilisateur est vide");
    });
    it("Doit throw une erreur car la liste contient aucunes personnes avec plus que 50 ans", () => {
      expect(() => {
        getPhoneNumber(fakeUserLess50Years);
      }).toThrow("Aucun personne ne correspond")
    });
  });

  describe("getInfoProduit", () => {
    it("Doit throw une erreur car la liste des produit est du mauvais type", () => {
      expect(() => {
        getInfoProduit("liste");
      }).toThrow(
        "L'element productData n'est pas une liste"
      );
    });
    it("Doit throw une erreur car la liste des produit ne doit pas être vide", () => {
      expect(() => {
        getInfoProduit([]);
      }).toThrow("La liste est vide");
    });
    it("Doit throw une erreur car il y aune erreur de type de categorie", () => {
      expect(() => {
        getInfoProduit(fakeProductTypeCategory);
      }).toThrow("La categorie doit être un String");
    });
    it("Doit throw une erreur car il y aune erreur de type de stock", () => {
      expect(() => {
        getInfoProduit(fakeProductTypeStock);
      }).toThrow("Le stock doit être un entier positif");
    });
    it("Doit throw une erreur car il y aune erreur de type de stock qui est négatif", () => {
      expect(() => {
        getInfoProduit(fakeProductTypeStockNegatif);
      }).toThrow("Le stock doit être positif");
    });
  });
});