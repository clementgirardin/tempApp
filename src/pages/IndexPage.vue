<template>
  <q-page padding>
    <Capteur/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Capteur from 'components/capteursTempérature.vue'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  components: { Capteur },
  computed: {
    ...mapGetters('capteurs', ['capteurs'])
  },
  methods: {
    ...mapActions('capteurs', ['getCapteurs'])
  },
  // appel de la fonction getClientsAPI
  mounted () {
    this.getCapteurs()
  }
})
</script>
