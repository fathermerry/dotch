<template>
  <div class="frame">
    <nav>
      <img alt="Dotch logo" src="../assets/logo.svg" />
    </nav>
    <main>
      <Transition name="fade" appear>
      <div id="help">
        <div>
          <h4>For any feedback</h4>
          <p>Send an email to <a href="mailto:dotch.app@gmail.com?subject=Help">dotch.app@gmail.com</a></p>
        </div>
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
  #help {
    padding: 24px 36px;
    text-align: center;
  }
</style>