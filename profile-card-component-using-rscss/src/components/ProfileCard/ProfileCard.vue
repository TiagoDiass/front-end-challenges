<template>
  <div class="profile-card">
    <img
      :src="profile.coverImagePath"
      :alt="`${profile.name}'s cover photo`"
      class="coverimage"
    />
    <main class="data"></main>
  </div>
</template>

<script>
export default {
  name: 'profile-card',

  computed: {
    prof() {
      return JSON.stringify(this.profile, null, 4);
    },
  },

  props: {
    profile: {
      type: Object,
      required: true,
      description: 'The profile that will appear in this card',
    },
  },
};
</script>

<style src="./ProfileCard.styles.scss" lang="scss" scoped></style>
