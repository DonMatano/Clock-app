<template>
  <div class="time-organism text-white text-sm uppercase sm:text-lg">
    <div class="flex">
      <IconMoon v-if="isNight" />
      <IconSun v-else />
      <p class="inline leading-6 ml-4 text-left tracking-wider">
        {{ greetingText
        }}<span class="invisible sm:visible">, It's currently</span>
      </p>
    </div>
    <p>
      <span class="font-bold text-8xl inline sm:text-10xl lg:text-11xl">
        {{ time }}
      </span>
      <span class="font-light sm:text-3xl lg:text-4xl">{{ timeZoneCode }}</span>
    </p>
    <p class="font-bold text-sm sm:text-lg lg:text-2xl">
      IN {{ city }} {{ countryCode }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import IconSun from '@atomic/atoms/svgs/IconSun.vue';
import IconMoon from '@atomic/atoms/svgs/IconMoon.vue';

export default defineComponent({
  name: 'TimeOrganism',
  components: { IconSun, IconMoon },
  props: {
    timeZoneCode: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    countryCode: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    isNight: {
      type: Boolean,
      default: false,
    },
    isAfternoon: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const greetingText = computed(() => {
      let greeting = 'Good morning';
      if (props.isAfternoon) greeting = 'Good afternoon';
      if (props.isNight) greeting = 'Good evening';
      return greeting;
    });
    return { greetingText };
  },
});
</script>
