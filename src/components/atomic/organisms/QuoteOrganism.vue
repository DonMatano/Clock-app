<template>
  <div class="quote-organism text-white">
    <div class="flex content-between align-top w-full">
      <div
        id="Quote"
        class="w-11/12 flex-grow text-xs leading-5 sm:text-lg sm:leading-7"
      >
        <p>“{{ quote }}”</p>
        <p class="font-bold mt-3">{{ author }}</p>
      </div>
      <button
        class="p-0 h-1 w-1/12 flex"
        :disabled="isLoadingQuote"
        @click="$emit('refreshButtonClicked')"
      >
        <IconRefresh :class="{ 'animate-spin': isLoadingQuote }" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconRefresh from '@atomic/atoms/svgs/IconRefresh.vue';

export default defineComponent({
  name: 'QuoteOrganism',
  components: { IconRefresh },
  emits: ['refreshButtonClicked'],
  props: {
    quote: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    isLoadingQuote: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
