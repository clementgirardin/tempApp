
import { api } from 'boot/axios';
import {afficherMessageErreur} from "src/fonctions/message-erreur";

// State : données du magasin
const state = {
  user: null,
  token: null
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {

}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  getCapteurApi ({ commit }) {
    // Exécuter la requête GET https://randomuser.me/api/?results=100&nat=CH
    api.get('https://tempapi.divtec.me/api/capteurs')
      // En cas de succès : remplacer le tableau des clients par la réponse de l'API
      .then(function (response) {
        console.log(response)
      })
      // En cas d'échec : afficher un message dans la console
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la récupération du capteur !'
        )
        throw error
      })
  },

  connecterUtilisateur ({ commit, dispatch }, payload) {
    var axios = require('axios');
    var data = '{\r\n    "email": "test@tempapi.divtec.me",\r\n    "password": "Admlocal1"\r\n}';

    var config = {
      method: 'post',
      url: 'https://tempapi.divtec.me/api/login',
      headers: { },
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
