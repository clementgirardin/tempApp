import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/fonctions/message-erreur'
import { Loading } from 'quasar'
// State : données du magasin
const state = {
  user: null,
  token: null,
  capteurs: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_CAPTEUR (state, capteurs) {
    state.capteurs = capteurs
  },
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * affichage capteurs
   * @param commit
   * @param dispatch
   * @param payload
   */
  afficherCapteurs ({ commit, dispatch }, payload) {
    Loading.show()
    api.get('/capteurs', payload)
      .then(function (response) {
        console.log(response)
        dispatch('SET_CAPTEUR', response.data)
      })
      .catch(function (error) {
        Loading.hide()
        console.log(error)
        afficherMessageErreur(
          'Affichage des capteurs impossible !',
          Object.values(error.response.data)
        )
        throw error
      })
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
