<template>
  <div class="statistic-card">
    <h2 class="stat-title">{{ data.title }}</h2>

    <img
      v-if="data.socialMedia == 'facebook'"
      src="../assets/images/icon-facebook.svg"
      alt="Facebook"
    />

    <img
      v-else-if="data.socialMedia == 'twitter'"
      src="../assets/images/icon-twitter.svg"
      alt="twitter"
    />

    <img
      v-else-if="data.socialMedia == 'instagram'"
      src="../assets/images/icon-instagram.svg"
      alt="instagram"
    />

    <img v-else src="../assets/images/icon-youtube.svg" alt="youtube" />

    <h2 class="stat-big-number">
      {{ data.number }}
    </h2>

    <div class="stat-percent">
      <img v-if="data.profit" src="../assets/images/icon-up.svg" alt="Icon" />
      <img v-else src="../assets/images/icon-down.svg" alt="Icon" />
      <p class="statistics-amount" :class="{ 'no-profit': !data.profit }">
        {{ data.profitPercent }}%
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
