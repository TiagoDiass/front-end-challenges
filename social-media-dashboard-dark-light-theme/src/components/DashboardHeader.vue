<template>
  <header class="header">
    <h1>
      Social Media Dashboard
    </h1>

    <div class="header-small-row">
      <h4>Total Followers: 23,004</h4>

      <div class="theme-switcher">
        <h5>Dark Mode</h5>
        <input type="checkbox" id="checkbox" class="checkbox" />
        <label for="checkbox" class="label" @click="changeTheme">
          <div class="ball"></div>
        </label>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    changeTheme() {
      document.querySelector('#app').classList.toggle('dark-mode');
      document.body.classList.toggle('dark-mode');
    },
  },
};
</script>

<style></style>
