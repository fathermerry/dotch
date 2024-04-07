<script setup>
import WebCam from '../components/WebCam.vue'
import axios from 'axios'
</script>

<template>
  <div id="cover" @click="openWebcam" :class="{'scaled': isLensCoverScaled}">
    <span v-if="!isScanning">Tap to scan</span>
    <div v-else>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 12L18 34L8 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
  <div id="lens" v-if="isWebcamOpen">
    <WebCam ref="cam1" @close="closeWebcam" @capture="onImageCapture" :processing="isScanning" :error="scanError"  />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLensCoverScaled: false,
      isWebcamOpen: false,
      isScanning: false,
      scanError: null
    };
  },
  methods: {
    openWebcam() {
      this.isLensCoverScaled = true;
      setTimeout(() => {
        this.isWebcamOpen = true;
      }, 300);
    },
    closeWebcam() {
      this.isWebcamOpen = false;
      this.isLensCoverScaled = false;
    },
    async onImageCapture(file) {
      this.isScanning = true;
      let formData = new FormData();
      formData.append('file', file);
      try {
        const response = await axios.post(
          'https://dotch.glitch.me/scan',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        this.closeWebcam();
        setTimeout(() => {
          const receipt = response.data.data;
          this.$router.push(`/receipt/${receipt.id}`);
        }, 500);
      } catch (error) {
        this.scanError = 'Please try another image';
        setTimeout(() => {
          this.scanError = null;
          this.isScanning = false;
          this.$refs.cam1.resetCamera();
          this.openWebcam();
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
#cover {
  cursor: pointer;
  width: 265px;
  height: 265px;
  left: 0px;
  top: 0px;
  background: var(--vt-c-black);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  place-items: center;
  transition: transform 0.3s ease-in-out;
}
#cover.scaled {
  transform: scale(3);
  color: var(--vt-c-black);
}
#lens {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
