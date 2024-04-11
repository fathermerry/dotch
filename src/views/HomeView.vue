<script setup>
import ButtonDiv from '../components/ButtonDiv.vue'
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
    <RouterLink :to="{ name: 'new-expense' }">
      <ButtonDiv icon="plus" text="Add expense"></ButtonDiv>
    </RouterLink>
  </div>
  <AppNav />
</template>