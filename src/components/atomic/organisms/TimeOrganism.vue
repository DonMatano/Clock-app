<template>
  <div class="time-organism text-white text-sm uppercase sm:text-lg">
    <div class="flex">
      <IconSun />
      <p class="inline leading-6 ml-4 text-left tracking-wider">
        Good morning<span class="invisible sm:visible">, It's currently</span>
      </p>
    </div>
    <p>
      <span class="font-bold text-8xl inline sm:text-10xl lg:text-11xl">
        11.37
      </span>
      <span class="font-light sm:text-3xl lg:text-4xl">BST</span>
    </p>
    <p class="font-bold text-sm sm:text-lg lg:text-2xl">IN LONDON, UK</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconSun from '@atomic/atoms/svgs/IconSun.vue';

export default defineComponent({
  name: 'TimeOrganism',
  components: { IconSun },
});
</script>
