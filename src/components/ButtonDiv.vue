<script setup>
import ButtonIcon from './ButtonIcon.vue'
</script>

<template>
<a class="container px-8 py-3 bg-slate-gray text-white w-full rounded-[32px] justify-center items-center gap-2 inline-flex">
    <ButtonIcon v-if="icon" :icon="icon" />
    <div class="text-sm font-medium">{{text}}</div>
</a>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String],
      required: false
    },
    text: {
      type: [String],
      required: true
    }
  }
}
</script>
