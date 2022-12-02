<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    @click="this.$router.push(linkObject.route)"
  >
    <q-item-section
      v-if="linkObject.icon"
      avatar
    >
      <q-icon :name="linkObject.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ linkObject.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    linkObject: {
      required: true,
      type: Object
    }
  }
})
</script>
