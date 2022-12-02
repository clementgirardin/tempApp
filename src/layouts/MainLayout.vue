<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Capteurs de température
        </q-toolbar-title>
        <q-btn
          v-if="!user"
          to="/connection"
          flat
          icon-right="account_circle"
          label="Se connecter"
          class="absolute-right"
        />

        <q-btn
          v-else
          @click="deconnecterUtilisateur"
          flat
          icon-right="account_circle"
          label="Se déconnecter"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="lien in liens"
          :key="lien.id"
          :to="lien.route"
          :icon="lien.icone"
          :label="lien.libelle"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      liens: [ // Tableau des liens de l'application
        {
          id: 1,
          libelle: 'Aperçu',
          icone: 'width_full',
          route: '/'
        },
        {
          id: 2,
          libelle: 'Favoris',
          icone: 'favorite',
          route: '/favoris'
        },
        {
          id: 3,
          libelle: 'Se connecter',
          icone: 'account_circle',
          route: '/connection'
        }
      ]
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['deconnecterUtilisateur'])
  }
}
</script>

<style>

</style>
