<template>
  <TimeOrganism />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimeOrganism from '@atomic/organisms/TimeOrganism.vue';

export default defineComponent({
  name: 'App',
  components: {
    TimeOrganism,
  },
});
</script>

<style lang="scss"></style>
