
import { api } from 'boot/axios';
import {afficherMessageErreur} from "src/fonctions/message-erreur";

// State : données du magasin
const state = {
  user: [
    {
      nom: "Test",
      prenom: "Test",
      email: "test@tempapi.divtec.me",
      password: "Admlocal1",
      is_admin: "0"
    }
  ]
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
        commit('setClients', response.data.results)
      })
      // En cas d'échec : afficher un message dans la console
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la récupération des clients !'
        )
        throw error
      })
  }
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
