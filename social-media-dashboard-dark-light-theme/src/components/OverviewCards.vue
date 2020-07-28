<template>
  <div class="overview-cards-row">
    <OverviewCard :data="cardProperties[0]" />
    <OverviewCard :data="cardProperties[1]" />
    <OverviewCard :data="cardProperties[2]" />
    <OverviewCard :data="cardProperties[3]" />
  </div>
</template>

<script>
import OverviewCard from './OverviewCard.vue';

export default {
  components: {
    OverviewCard,
  },

  computed: {
    cardProperties() {
      return [
        {
          borderTopColor: 'hsl(208, 92%, 53%)',
          iconName: 'facebook',
          socialMediaUsername: '@tiagodiass',
          number: '1987',
          numberSubtitle: 'Followers',
          statistics: {
            profit: true,
            amount: 12,
          },
        },
        {
          borderTopColor: 'hsl(203, 89%, 53%)',
          iconName: 'twitter',
          socialMediaUsername: '@tiagodiass',
          number: '1044',
          numberSubtitle: 'Followers',
          statistics: {
            profit: true,
            amount: 99,
          },
        },
        {
          borderTopColor: 'linear-gradient(#FDC468, #DF4996)',
          iconName: 'instagram',
          socialMediaUsername: '@tiagoo_dias',
          number: '9k',
          numberSubtitle: 'Followers',
          statistics: {
            profit: true,
            amount: 1053,
          },
        },
        {
          borderTopColor: 'hsl(348, 97%, 39%)',
          iconName: 'youtube',
          socialMediaUsername: '@tiagoo_dias',
          number: '8239',
          numberSubtitle: 'Subscribers',
          statistics: {
            profit: false,
            amount: 144,
          },
        },
      ];
    },
  },
};
</script>

<style></style>
