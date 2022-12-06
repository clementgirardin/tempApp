<template>
  <q-page padding>
    <Capteur/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Capteur from 'components/capteursTempérature.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { Capteur }
})
</script>
