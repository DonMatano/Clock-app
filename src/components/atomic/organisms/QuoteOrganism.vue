<template>
  <div class="quote-organism text-white">
    <div class="flex content-between align-top w-full">
      <div
        id="Quote"
        class="w-11/12 flex-grow text-xs leading-5 sm:text-lg sm:leading-7"
      >
        <p>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <p class="font-bold mt-3">Ada Lovelace</p>
      </div>
      <button class="p-0 h-1 w-1/12 flex">
        <IconRefresh />
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
});
</script>
