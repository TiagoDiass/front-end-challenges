<template>
  <div id="app">
    <ProfileCard :profile="profile" />
  </div>
</template>

<script>
import ProfileCard from './components/ProfileCard/ProfileCard.vue';

export default {
  name: 'App',

  components: {
    ProfileCard,
  },

  data: () => ({
    profile: {
      name: 'Victor Crest',
      imagePath: 'victor-image.jpg',
      coverImagePath: 'coverPattern.svg',
      age: 26,
      city: 'London',
      statistics: {
        followersAmount: '20K',
        likesAmount: '100K',
        photosAmount: '1.4K',
      },
    },
  }),
};
</script>

<style lang="scss">
@import './assets/styles/main';
</style>
