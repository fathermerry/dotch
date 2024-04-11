<template>
  <nav class="fixed bottom-0 w-full border-t border-dark-indigo">
    <div class="flex justify-between py-4 pt-8">
      <RouterLink :to="{ name: 'home' }"
        :class="[
            'flex-1 text-center',
            $route.name === 'home' ? 'text-white' : 'text-slate-gray'
          ]"
      >
        <div class="flex flex-col items-center">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.125 21V13.6C9.125 13.0399 9.125 12.7599 9.234 12.546C9.32987 12.3578 9.48285 12.2049 9.67101 12.109C9.88493 12 10.165 12 10.725 12H13.525C14.0851 12 14.3651 12 14.579 12.109C14.7672 12.2049 14.9201 12.3578 15.016 12.546C15.125 12.7599 15.125 13.0399 15.125 13.6V21M2.125 9.5L11.165 2.72C11.5093 2.46181 11.6814 2.33271 11.8704 2.28294C12.0373 2.23902 12.2127 2.23902 12.3796 2.28295C12.5686 2.33271 12.7407 2.46181 13.085 2.72L22.125 9.5M4.125 8V17.8C4.125 18.9201 4.125 19.4802 4.34299 19.908C4.53474 20.2843 4.8407 20.5903 5.21702 20.782C5.64485 21 6.2049 21 7.325 21H16.925C18.0451 21 18.6052 21 19.033 20.782C19.4093 20.5903 19.7153 20.2843 19.907 19.908C20.125 19.4802 20.125 18.9201 20.125 17.8V8L14.045 3.44C13.3565 2.92361 13.0122 2.66542 12.6341 2.56589C12.3004 2.47804 11.9496 2.47804 11.6159 2.56589C11.2378 2.66542 10.8935 2.92361 10.205 3.44L4.125 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-base mt-2">Home</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'friends' }"
        :class="[
            'flex-1 text-center',
            $route.name === 'friends' ? 'text-white' : 'text-slate-gray'
          ]"
      >
        <div class="flex flex-col items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.875 4.46776C18.3567 5.20411 19.375 6.73314 19.375 8.5C19.375 10.2669 18.3567 11.7959 16.875 12.5322M18.875 17.7664C20.3865 18.4503 21.7475 19.565 22.875 21M2.875 21C4.82149 18.5226 7.46418 17 10.375 17C13.2858 17 15.9285 18.5226 17.875 21M14.875 8.5C14.875 10.9853 12.8603 13 10.375 13C7.88972 13 5.875 10.9853 5.875 8.5C5.875 6.01472 7.88972 4 10.375 4C12.8603 4 14.875 6.01472 14.875 8.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-base font-bold mt-2">Friends</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'groups' }"
        :class="[
            'flex-1 text-center',
            $route.name === 'groups' ? 'text-white' : 'text-slate-gray'
          ]"
      >
        <div class="flex flex-col items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5627 16.4377C19.9853 15.9795 22.625 13.048 22.625 9.5C22.625 5.63401 19.491 2.5 15.625 2.5C12.077 2.5 9.14549 5.13967 8.68727 8.56227M16.625 15.5C16.625 19.366 13.491 22.5 9.625 22.5C5.75901 22.5 2.625 19.366 2.625 15.5C2.625 11.634 5.75901 8.5 9.625 8.5C13.491 8.5 16.625 11.634 16.625 15.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-base font-bold mt-2">Groups</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'wallet' }"
        :class="[
            'flex-1 text-center',
            $route.name === 'wallet' ? 'text-white' : 'text-slate-gray'
          ]"
      >
        <div class="flex flex-col items-center">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.875 8.50032V5.00097C16.875 4.16923 16.875 3.75336 16.6998 3.49779C16.5467 3.2745 16.3096 3.12281 16.0428 3.0774C15.7373 3.02542 15.3597 3.19969 14.6045 3.54824L5.73401 7.64231C5.06051 7.95316 4.72375 8.10859 4.47711 8.34964C4.25906 8.56274 4.09262 8.82287 3.9905 9.11015C3.875 9.43511 3.875 9.806 3.875 10.5478V15.5003M17.375 15.0003H17.385M3.875 11.7003V18.3003C3.875 19.4204 3.875 19.9805 4.09299 20.4083C4.28473 20.7846 4.59069 21.0906 4.96702 21.2823C5.39484 21.5003 5.95489 21.5003 7.075 21.5003H18.675C19.7951 21.5003 20.3552 21.5003 20.783 21.2823C21.1593 21.0906 21.4653 20.7846 21.657 20.4083C21.875 19.9805 21.875 19.4204 21.875 18.3003V11.7003C21.875 10.5802 21.875 10.0202 21.657 9.59234C21.4653 9.21601 21.1593 8.91005 20.783 8.71831C20.3552 8.50032 19.7951 8.50032 18.675 8.50032H7.075C5.9549 8.50032 5.39484 8.50032 4.96702 8.7183C4.5907 8.91005 4.28473 9.21601 4.09299 9.59234C3.875 10.0202 3.875 10.5802 3.875 11.7003ZM17.875 15.0003C17.875 15.2765 17.6511 15.5003 17.375 15.5003C17.0989 15.5003 16.875 15.2765 16.875 15.0003C16.875 14.7242 17.0989 14.5003 17.375 14.5003C17.6511 14.5003 17.875 14.7242 17.875 15.0003Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-base font-bold mt-2">Wallet</span>
        </div>
      </RouterLink>
    </div>
  </nav>
</template>
