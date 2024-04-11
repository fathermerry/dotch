<script setup>
import IconPlus from './icons/IconPlus.vue'
</script>

<template>
  <div>
    <IconPlus :width="16" :height="16" />
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