<template>
  <button
    class="
      more-less-button
      inline-flex
      items-center
      pl-3
      pr-1
      py-1
      bg-white
      rounded-3xl
    "
    @click="$emit('moreLessButtonClicked')"
  >
    <p class="mr-4 text-xs font-bold leading-4 tracking-widest sm:text-base">
      {{ isShowingMoreInfo ? 'LESS' : 'MORE' }}
    </p>
    <IconArrowUp
      class="arrow transition-transform duration-500 ease-in-out"
      :class="{
        'transform rotate-180': isShowingMoreInfo,
      }"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconArrowUp from '@atomic/atoms/svgs/IconArrowUp.vue';

export default defineComponent({
  name: 'MoreLessButton',
  components: { IconArrowUp },
  emits: ['moreLessButtonClicked'],
  props: {
    isShowingMoreInfo: {
      type: Boolean,
      default: false,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // setup(props) {},
});
</script>
