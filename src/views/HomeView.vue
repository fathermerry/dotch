<script setup>
import ButtonLink from '../components/ButtonLink.vue'
import UserAvatar from '../components/UserAvatar.vue'
import UserBalance from '../components/UserBalance.vue'
import AppNav from '../components/AppNav.vue'
</script>
<template>
  <div class="p-8">
    <UserAvatar />
  </div>
  <div class="px-8 flex flex-col space-y-4">
    <UserBalance />
    <ButtonLink name="new-expense" icon="plus" text="Add expense"></ButtonLink>
  </div>
  <AppNav />
</template>