import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/fonctions/message-erreur'
import { Loading, LocalStorage } from 'quasar'
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
  setUser ({ commit, dispatch, state }, data) {
    const that = this
    // Sauvegarde, commite, les données dans le magasin
    commit('setUser', data.user)
    commit('setToken', data.token)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('user', state.user)
    LocalStorage.set('token', state.token)
    // Redirige l'utilisateur vers la page des tâches
    that.$router.push('/')
    // Cache la fenêtre de chargement
    Loading.hide()
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
  connecterUtilisateur ({ commit, dispatch }, payload) {
    Loading.show()
    api.post('/login', payload)
      .then(function (response) {
        console.log(response)
        dispatch('setUser', response.data)
      })
      .catch(function (error) {
        Loading.hide()
        console.log(error)
        afficherMessageErreur(
          'Connexion impossible !',
          Object.values(error.response.data)
        )
        throw error
      })
  },
  setUser ({ commit, dispatch }, data) {
    const that = this
    // Sauvegarde, commite, les données dans le magasin
    commit('setUser', data.user)
    commit('setToken', data.access_token)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('user', state.user)
    LocalStorage.set('token', state.token)
    // Redirige l'utilisateur vers la page des tâches
    that.$router.push('/favoris')
    // Cache la fenêtre de chargement
    Loading.hide()
  },
  deconnecterUtilisateur ({ commit, state, dispatch }) {
    Loading.show()
    const that = this
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + state.token }
    }
    // Déconnexion de l'API
    api.post('/logout', {}, config)
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la déconnexion'
        )
        throw error
      })
      .finally(function () {
        // Réinitialise user et token
        commit('setUser', null)
        commit('setToken', null)
        // Vide le locaStorage
        LocalStorage.clear()
        // Vide la liste des tâches
        dispatch('taches/viderTaches', null, { root: true })
        // Redirige l'utilisateur vers la page de connexion
        that.$router.push('/connexion')
        // location.reload() // recharge la page du navigateur
        Loading.hide()
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