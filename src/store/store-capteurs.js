import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/fonctions/message-erreur'
import {Loading, LocalStorage} from 'quasar'
// State : données du magasin
const state = {
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
  setToken (state, token) {
    state.token = token
  }
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
  /**
   * Connection et redirection de l'utilisateur
   * @param context
   * @param data
   */
  setCapteur (context, data) {
    const that = this
    // Sauvegarde, commite, les données dans le magasin
    context.commit('SET_CAPTEUR', data.user)
    context.commit('setToken', data.access_token)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('user', state.user)
    LocalStorage.set('token', state.access_token)
    // Redirige l'utilisateur vers la page des tâches
    that.$router.push('/favoris')
    // Cache l'onglet se connecter
    // Cache la fenêtre de chargement
    Loading.hide()
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
