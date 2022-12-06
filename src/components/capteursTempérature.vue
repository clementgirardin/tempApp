<template>
  <q-card>
    <h4>coucou</h4>
<!--    <q-card-section>-->
<!--      <q-card-actions align="right">-->
<!--        <q-btn-->
<!--          icon="mdi-pencil"-->
<!--          color="primary"-->
<!--          @click="modifierCapteur"-->
<!--        />-->
<!--        <q-btn-->
<!--          icon="mdi-delete"-->
<!--          color="negative"-->
<!--          @click="supprimerCapteur"-->
<!--        />-->
<!--      </q-card-actions>-->
<!--      <q-card-title>-->
<!--        {{ capteur.nom }}-->
<!--      </q-card-title>-->
<!--      <q-card-subtitle>-->
<!--        {{ capteur.description }}-->
<!--      </q-card-subtitle>-->
<!--      <q-card-main>-->
<!--        <q-progress-->
<!--          :value="capteur.valeur"-->
<!--          color="primary"-->
<!--          size="10px"-->
<!--          class="q-mt-md"-->
<!--        />-->
<!--      </q-card-main>-->
<!--    </q-card-section>-->
  </q-card>
</template>

<script>
// import { mapActions } from 'vuex'
// import capt from 'src/store/store-capteurs'

export default {
  name: 'capteursTempérature',
  data () {
    return {
      capteur: {
        nom: '',
        description: '',
        valeur: 0
      }
    }
  }
}
</script>

<style scoped>

</style>
