<script setup>
  import AudioCard from '../components/AudioCard.vue';
</script>
<template>
  <div class="frame">
    <nav>
      <img alt="Dotch logo" src="../assets/logo.svg" />
    </nav>
    <main>
      <Transition name="fade" appear>
      <div id="about">
        <div id="tagline">
          <h4>An app for receipts</h4>
          <p>What you can do with Dotch</p>
        </div>
        <ul id="features">
          <li><AudioCard text="Split dinner with friends" source="./audio/01-dinner.mp3" /></li>
          <li><AudioCard text="Share receipts with anyone" source="./audio/02-fashion.mp3"  /></li>
          <li><AudioCard text="Group bill into categories" source="./audio/03-groups.mp3"  /></li>
        </ul>
      </div>
      </Transition>
    </main>
    <footer>
      <Transition name="slide-up" appear>
      <div>
        <a href="/">Back</a>
      </div>
      </Transition>
    </footer>
  </div>
</template>

<style scoped>
  #about {
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  #features {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  }
</style>