<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card">
      <q-item-section class="donne">
        <q-item-label lines="1" class="title">
          {{ capteur.nom }}
        </q-item-label>
        <q-separator color="white" class="marginBas"/>
        <q-item-label lines="2">
          <label class="sousTitle">Salle : </label>
          {{ capteur.salle.nom }}
        </q-item-label>
        <q-item-label lines="3">
          <label class="sousTitle">Température : </label>
          {{ capteur.mesures[1].temperature }}
        </q-item-label>
        <q-item-label lines="4">
          <label class="sousTitle">Humidité : </label>
          {{ capteur.mesures[1].humidite }}
        </q-item-label>
      </q-item-section>
      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import capt from 'src/store/store-capteurs'

export default {
  name: 'capteursTemperature',
  props: {
    capteur: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  background-color: #1D1D1D
  color: white

  .donne
    padding: 10px
    font-size: 16px
    text-align: left
    margin: 20px

    .title
      text-align: center
      margin-bottom: 10px
      font-weight: bold
      font-size: 20px

    .marginBas
      margin-bottom: 20px

    .sousTitle
      font-weight: bold
</style>
