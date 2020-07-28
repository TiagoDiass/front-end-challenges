<template>
  <div
    class="overview-card"
    :style="`border-color: ${data.borderTopColor};`"
    :class="{ 'instagram-border': data.iconName == 'instagram' }"
  >
    <div class="card-top">
      <img
        v-if="data.iconName == 'facebook'"
        src="../assets/images/icon-facebook.svg"
        alt="Facebook"
      />

      <img
        v-else-if="data.iconName == 'twitter'"
        src="../assets/images/icon-twitter.svg"
        alt="twitter"
      />

      <img
        v-else-if="data.iconName == 'instagram'"
        src="../assets/images/icon-instagram.svg"
        alt="instagram"
      />

      <img v-else src="../assets/images/icon-youtube.svg" alt="youtube" />

      <h3 class="card-title">
        {{ data.socialMediaUsername }}
      </h3>
    </div>

    <div class="card-body">
      <h2 class="bigNumber">
        {{ data.number }}
      </h2>

      <h3 class="bigNumber-subtitle">
        {{ data.numberSubtitle }}
      </h3>
    </div>

    <div class="card-footer">
      <img v-if="data.statistics.profit" src="../assets/images/icon-up.svg" alt="Icon" />
      <img v-else src="../assets/images/icon-down.svg" alt="Icon" />
      <p class="statistics-amount" :class="{ 'no-profit': !data.statistics.profit }">
        {{ data.statistics.amount }} Today
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

  computed: {},
};
</script>
