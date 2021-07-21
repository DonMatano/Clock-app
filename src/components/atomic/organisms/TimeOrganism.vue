<template>
  <div class="time-organism bg-daytime-mobile">
    <IconSun />
    <p class="text-indigo-700 font-bold">Good Morning</p>
    <p>11.37</p>
    <span>BST</span>
    <p>In LONDON, UK</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconSun from '@atomic/atoms/svgs/IconSun.vue';

export default defineComponent({
  components: { IconSun },
});
</script>
