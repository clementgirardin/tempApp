import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/fonctions/message-erreur'
import { Loading } from 'quasar'
import storeAuth from 'src/store/store-auth'
// State : données du magasin
const state = {
  capteurs: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_CAPTEUR (state, newCapteurs) {
    state.capteurs = newCapteurs
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {

  /**
   * Récupère les capteurs
   * @param commit
   */
  getCapteurs ({ commit }) {
    Loading.show()
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + storeAuth.state.token }
    }
    api.get('/capteurs', config)
      // En cas de succès : remplacer le tableau des clients par la réponse de l'API
      .then(function (response) {
        console.log(response)
        commit('SET_CAPTEUR', response.data.result)
        Loading.hide()
      })
      // En cas d'échec : afficher un message dans la console
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la récupération des capteurs !'
        )
        Loading.hide()
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
  capteurs (state) {
    return state.capteurs
  }
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
