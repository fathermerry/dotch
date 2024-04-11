<script setup>
import ButtonLink from '../components/ButtonLink.vue'
import UserAvatar from '../components/UserAvatar.vue'
import WalletBalance from '../modules/WalletBalance.vue'
import AppNav from '../components/AppNav.vue'
</script>
<template>
  <div class="p-8">
    <UserAvatar />
  </div>
  <div class="px-8 flex flex-col space-y-4">
    <WalletBalance />
    <ButtonLink name="new-expense" icon="plus" text="Add expense"></ButtonLink>
  </div>
  <AppNav />
</template>