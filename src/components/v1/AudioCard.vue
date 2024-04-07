<script setup>
defineProps({
  text: String,
  source: String
})
</script>

<template>
  <div class="audioCard" @click="togglePlay" :class="{'active': isPlaying}">
    <div class="audioProgress" ref="progressBar"></div>
    <div class="audioBody">
      {{ text }}
      <audio ref="audioElement" style="display: none">
        <source :src="source" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
    <div class="audioIcon">
      <Transition name="slide-left" mode="out-in">
      <svg id="play" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="!isPlaying">
        <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg id="pause" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
        <path d="M6.66667 2.6665H4V13.3332H6.66667V2.6665Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9997 2.6665H9.33301V13.3332H11.9997V2.6665Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false
    };
  },
  mounted() {
    const audioElement = this.$refs.audioElement;
    const resetAudioElement = () => {
      this.isPlaying = false;
      this.updateAudioTime(0);
    }
    audioElement.addEventListener('ended', resetAudioElement);
    audioElement.addEventListener('pause', resetAudioElement);
    audioElement.addEventListener('timeupdate', () => {
      this.updateAudioTime(audioElement.currentTime);
    });
  },
  methods: {
    updateAudioTime(currentTime) {
      const audioElement = this.$refs.audioElement;
      const duration = audioElement.duration;
      const progress = (currentTime / duration) * 100;
      const progressBar = this.$refs.progressBar;
      progressBar.style.width = `${progress}%`;
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.playAudio();
      } else {
        this.pauseAudio();
      }
    },
    stopAllAudio() {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach((audioElement) => {
        audioElement.pause();
        audioElement.currentTime = 0;
      });
    },
    playAudio() {
      this.stopAllAudio();
      const audioElement = this.$refs.audioElement;
      audioElement.play();
    },
    pauseAudio() {
      const audioElement = this.$refs.audioElement;
      audioElement.pause();
    },
    resetAudio() {
      const audioElement = this.$refs.audioElement;
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }
}
</script>

<style scoped>
  .audioCard {
    border: solid 1px #7b7fa5;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
    height: 60px;
    padding: 0 24px;
    border-radius: 36px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .audioCard.active {
    border-color: var(--color-background-dark);
    background-color: var(--color-background-dark);
  }
  .audioCard svg {
    fill: white;
  }
  .audioProgress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #141420;
  }
  .audioBody, .audioIcon {
    position: relative;
  }
</style>
