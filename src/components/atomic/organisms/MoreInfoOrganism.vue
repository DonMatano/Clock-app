<template>
  <div
    class="py-12 px-6 sm:px-12"
    :class="[isNight ? 'bg-dark' : 'bg-light-white']"
  >
    <ul
      class="uppercase flex flex-col sm:flex-row sm:justify-between flex-wrap"
      :class="[isNight ? 'text-white' : 'text-secondary-black']"
    >
      <li
        v-for="(listItem, index) in listOfValuesToShow"
        :key="index"
        class="flex justify-between my-4 sm:w-1/3 sm:flex-col sm:mr-4"
      >
        <div class="text-sm leading-7 text-left tracking-widest">
          {{ listItem.title }}
        </div>
        <div class="font-bold text-xl sm:text-4xl lg:text-6xl">
          {{ listItem.value }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MoreInfoOrganism',
  props: {
    timezone: {
      type: String,
      default: '',
    },
    dayOfYear: {
      type: Number,
      default: 0,
    },
    dayOfWeek: {
      type: Number,
      default: 0,
    },
    weekNumber: {
      type: Number,
      default: 0,
    },
    isNight: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const listOfValuesToShow = ref([
      { title: 'Current timezone', value: props.timezone },
      { title: 'Day of the year', value: props.dayOfYear },
      { title: 'Day of the week', value: props.dayOfWeek },
      { title: 'Week number', value: props.weekNumber },
    ]);
    return { listOfValuesToShow };
  },
});
</script>
