<template>
  <div id="app">
    <DashboardHeader />

    <OverviewCards />

    <StatisticsArea />
  </div>
</template>

<script>
import DashboardHeader from './components/DashboardHeader';
import OverviewCards from './components/OverviewCards';
import StatisticsArea from './components/StatisticsArea';

export default {
  name: 'App',
  components: {
    DashboardHeader,
    OverviewCards,
    StatisticsArea,
  },
};
</script>
