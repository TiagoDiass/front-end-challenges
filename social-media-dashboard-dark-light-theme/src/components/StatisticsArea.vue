<template>
  <section class="statistics">
    <h2 class="statistics-title">Overview - Today</h2>

    <div class="stats-cards-grid">
      <StatisticCard v-for="(stats, index) in statistics" :key="index" :data="stats" />
    </div>
  </section>
</template>

<script>
import StatisticCard from './StatisticsCard.vue';

export default {
  components: {
    StatisticCard,
  },

  computed: {
    statistics() {
      return [{}];
    },
  },
};
</script>
