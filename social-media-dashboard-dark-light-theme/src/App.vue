<template>
  <div id="app">
    <DashboardHeader />

    <OverviewCards />
  </div>
</template>

<script>
import DashboardHeader from './components/DashboardHeader';
import OverviewCards from './components/OverviewCards';

export default {
  name: 'App',
  components: {
    DashboardHeader,
    OverviewCards,
  },
};
</script>
