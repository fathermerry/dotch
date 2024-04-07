<script setup>
defineProps({
  display: String,
  value: String,
  title: String,
  text: String,
})
</script>

<template>
  <div id="shareText">
    <div id="text">
      {{display}}
    </div>
    <a @click="share" id="share">Share</a>
  </div>
</template>

<script>
export default {
  methods: {
    share() {
      if (navigator.share) {
        navigator.share({
          title: this.title,
          text: this.text,
          url: this.value,
        })
          .then(() => {
            console.log('Shared successfully');
          })
          .catch((error) => {
            console.error('Error sharing:', error);
          });
      } else {
        console.log('Web Share API is not supported in this browser');
      }
    }
  }
}
</script>

<style scoped>
#shareText {
  background: var(--vt-c-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 24px;
  padding: 0 24px;
  border-radius: 30px;
}
#url {
  color: var(--color-text-mute);
  display: flex;
  align-items: center;
}
svg {
  margin-right: 12px;
}
</style>
