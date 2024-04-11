<script setup>
import IconPlus from './icons/IconPlus.vue'
import IconCheck from './icons/IconCheck.vue'
</script>

<template>
  <div>
    <IconPlus v-if="icon === 'plus'" :width="16" :height="16" />
    <IconCheck v-if="icon === 'check'" :width="16" :height="16" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String],
      required: true
    }
  }
}
</script>