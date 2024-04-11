<script setup>
import ButtonIcon from './ButtonIcon.vue'
</script>

<template>
<RouterLink :to="{ name }">
  <div :class="[
    'container px-8 py-3 text-white w-full rounded-[32px] justify-center items-center gap-2 inline-flex',
    bgColor ? `bg-${bgColor}` : 'bg-slate-gray'
  ]">
    <ButtonIcon v-if="icon" :icon="icon" />
    <div class="text-sm font-medium">{{text}}</div>
  </div>
</RouterLink>
</template>

<script>
export default {
  props: {
    name: {
      type: [String],
      required: true
    },
    icon: {
      type: [String],
      required: false
    },
    text: {
      type: [String],
      required: true
    },
    bgColor: {
      type: [String],
      required: false
    }
  }
}
</script>
