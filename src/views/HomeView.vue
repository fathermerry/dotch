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
    <div class="flex space-x-2">
      <ButtonLink name="settle-expenses" bg-color="turquoise" icon="check" text="Settle"></ButtonLink>
      <ButtonLink name="new-expense" icon="plus" text="Add expense"></ButtonLink>
    </div>
  </div>
  <div class="p-8 pt-0 overflow-x-scroll">
    <div class="mt-8 inline-flex space-x-4">
      <div class="w-[200px] p-4 bg-dark-indigo rounded-lg flex flex-col space-y-4">
        <div class="text-white flex space-x-2">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0003 3.14485C11.9881 3.63575 12.667 4.6551 12.667 5.83301C12.667 7.01091 11.9881 8.03027 11.0003 8.52114M12.3337 12.0106C13.3413 12.4665 14.2487 13.2097 15.0003 14.1663M1.66699 14.1663C2.96465 12.5147 4.72645 11.4997 6.66699 11.4997C8.60753 11.4997 10.3693 12.5147 11.667 14.1663M9.66699 5.83301C9.66699 7.48986 8.32386 8.83301 6.66699 8.83301C5.01014 8.83301 3.66699 7.48986 3.66699 5.83301C3.66699 4.17615 5.01014 2.83301 6.66699 2.83301C8.32386 2.83301 9.66699 4.17615 9.66699 5.83301Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-sm font-medium">2Cute</div>
        </div>
        <div class="text-turquoise text-xl font-medium">11,000.00</div>
      </div>
      <div class="w-[200px] p-4 bg-dark-indigo rounded-lg flex flex-col space-y-4">
        <div class="text-white flex space-x-2">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 13.8333C3.55719 12.1817 5.67135 11.1667 8 11.1667C10.3287 11.1667 12.4428 12.1817 14 13.8333M11 5.5C11 7.15685 9.65687 8.5 8 8.5C6.34315 8.5 5 7.15685 5 5.5C5 3.84315 6.34315 2.5 8 2.5C9.65687 2.5 11 3.84315 11 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="text-sm font-medium">Samson</div>
        </div>
        <div class="text-marigold text-xl font-medium">11,000.00</div>
      </div>
    </div>
  </div>
  <AppNav />
</template>