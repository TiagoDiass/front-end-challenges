<template>
  <section class="statistics">
    <h2 class="statistics-title">Overview - Today</h2>

    <div class="stats-cards-flex">
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

  methods: {
    createStats(title, socialMedia, number, profit, profitPercent) {
      return {
        title,
        socialMedia,
        number,
        profit,
        profitPercent,
      };
    },
  },

  computed: {
    statistics() {
      return [
        this.createStats('Page Views', 'facebook', 87, true, 3),
        this.createStats('Likes', 'facebook', 52, false, 2),
        this.createStats('Likes', 'instagram', 5462, true, 2257),
        this.createStats('Profile Views', 'instagram', '52k', true, 2257),
        this.createStats('Retweets', 'twitter', 117, true, 302),
        this.createStats('Likes', 'twitter', 507, true, 553),
        this.createStats('Likes', 'youtube', 107, false, 19),
        this.createStats('Total Views', 'youtube', 1407, false, 9),
      ];
    },
  },
};
</script>
