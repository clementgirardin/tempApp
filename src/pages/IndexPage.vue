<template>
  <q-page padding>
    <CapteursTemperature
      v-for="capteur in capteurs"
      :key="capteur.id"
      :capteur="capteur"
  />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CapteursTemperature from 'components/capteursTemperature.vue'
import { mapGetters, mapActions } from 'vuex/dist/vuex.mjs'

export default defineComponent({
  name: 'IndexPage',
  components: { CapteursTemperature },
  computed: {
    ...mapGetters('capteurs', ['capteurs'])
  },
  methods: {
    ...mapActions('capteurs', ['getCapteurs'])
  },
  // appel de la fonction getCapteurs
  mounted () {
    this.getCapteurs()
  }
})
</script>
