<template>
  <div id="webcam">
    <div id="overlay" v-if="error || isLoading">
      <div class="spinner" v-if="isLoading"></div>
      <div v-if="error">{{ error }}</div>
    </div>
    <video ref="camera" autoplay playsinline v-show="!isPhotoTaken"></video>
    <canvas ref="canvas" v-show="isPhotoTaken"></canvas>
    <footer v-if="!isLoading">
      <div v-if="processing">
        <Transition name="slide-up" mode="out-in">
          <div class="spinner"></div>
        </Transition>
      </div>
      <div v-if="!processing">
        <button class="secondary" v-if="!isPhotoTaken" @click="exitCamera">Cancel</button>
        <button class="secondary" v-else @click="resetCamera">Retake</button>
        <Transition name="slide-up" mode="out-in">
        <button v-if="!isPhotoTaken" @click="capturePhoto">Capture</button>
        <button v-else class="danger" @click="publishPhoto">Scan</button>
        </Transition>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    error: String,
    processing: Boolean,
  },
  data() {
    return {
      url: null,
      isLoading: true,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
    };
  },
  created() {
    this.openCamera();
  },
  methods: {
    openCamera() {
      this.isCameraOpen = true;
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: "environment"
          },
          audio: false
        })
        .then(stream => {
          this.$refs.camera.srcObject = stream;
          this.$refs.camera.play();
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    stopCamera() {
      this.$refs.camera.pause();
      this.$refs.camera.srcObject.getTracks().forEach(track => {
        track.stop();
      });
    },
    exitCamera() {
      this.stopCamera();
      this.isCameraOpen = false;
      this.$emit('close');
    },
    getImageFromCamera() {
      this.$refs.canvas.width = this.$refs.camera.videoWidth;
      this.$refs.canvas.height = this.$refs.camera.videoHeight;
      this.$refs.canvas
        .getContext('2d')
        .drawImage(this.$refs.camera, 0, 0);
      this.url = this.$refs.canvas.toDataURL('image/jpeg');
    },
    capturePhoto() {
      this.getImageFromCamera();
      this.stopCamera();
      this.isPhotoTaken = true;
    },
    publishPhoto() {
      this.$emit('capture', this.url);
    },
    resetCamera() {
      this.isPhotoTaken = false;
      this.openCamera();
    },
  },
};
</script>

<style scoped>
#webcam {
  width: 100%;
  height: auto;
  background: var(--vt-c-black);
}
#overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
video, canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
footer {
  height: 60px;
  margin: 24px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
footer > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
footer button {
  flex: 1;
  height: 100%;
}
</style>
