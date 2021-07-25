<template>
  <ClockApp class="min-h-full" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClockApp from '@atomic/pages/ClockApp.vue';

export default defineComponent({
  name: 'App',
  components: {
    ClockApp,
  },
});
</script>

<style lang="scss">
html,
body {
  min-height: 100vh;
}
</style>
