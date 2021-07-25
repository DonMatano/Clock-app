<template>
  <div class="bg-light-white h-full py-12 px-6 sm:px-12">
    <ul
      class="
        text-secondary-black
        uppercase
        flex flex-col
        sm:flex-row sm:justify-between
        flex-wrap
      "
    >
      <li
        v-for="(listItem, index) in listOfValuesToShow"
        :key="index"
        class="flex justify-between my-4 sm:w-1/3 sm:flex-col sm:mr-4"
      >
        <div class="text-sm leading-7 text-left tracking-widest">
          {{ listItem.title }}
        </div>
        <div class="font-bold text-xl sm:text-4xl lg:text-6xl">{{ listItem.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MoreInfoOrganism',
  setup() {
    const listOfValuesToShow = ref([
      { title: 'Current timezone', value: 'Europe/London' },
      { title: 'Day of year', value: 295 },
      { title: 'Day of week', value: 5 },
      { title: 'Week number', value: 42 },
    ]);
    return { listOfValuesToShow };
  },
});
</script>
