<template>
  <q-page padding>
    <Capteur class="marge"
             :capteur="capteurs"
  />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Capteur from 'components/capteursTempérature.vue'
import { mapGetters, mapActions } from 'vuex/dist/vuex.mjs'

export default defineComponent({
  name: 'IndexPage',
  components: { Capteur },
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
