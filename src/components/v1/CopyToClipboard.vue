<script setup>
defineProps({
  text: [String, Number],
})
</script>

<template>
  <div @click="copy">
    {{ copied ? 'Copied!' : text }}
    <span id="copy">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_539_4254)">
          <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#CACBD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33301 10.0002H2.66634C2.31272 10.0002 1.97358 9.85969 1.72353 9.60964C1.47348 9.35959 1.33301 9.02045 1.33301 8.66683V2.66683C1.33301 2.31321 1.47348 1.97407 1.72353 1.72402C1.97358 1.47397 2.31272 1.3335 2.66634 1.3335H8.66634C9.01996 1.3335 9.3591 1.47397 9.60915 1.72402C9.8592 1.97407 9.99967 2.31321 9.99967 2.66683V3.3335" stroke="#CACBD0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_539_4254">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.text)
        .then(() => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 1000);
        })
        .catch((error) => {
          console.error('Error copying:', error);
        });
    }
  }
}
</script>
