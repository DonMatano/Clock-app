<template>
  <div class="relative">
    <div
      class="
        absolute
        z-10
        bg-daytime-mobile
        sm:bg-daytime-tablet
        lg:bg-daytime-desktop
        left-0
        right-0
        top-0
        bottom-0
        filter
        brightness-75
        bg-cover
      "
    />
    <div
      class="
        absolute
        z-20
        left-0
        right-0
        top-0
        bottom-0
        pt-10
        flex flex-col
        justify-between
      "
    >
      <QuoteOrganism v-if="!showMoreInfo" class="p-5 lg:p-12" />
      <div>
        <div class="lg:flex lg:justify-between items-end lg:p-12">
        <TimeOrganism class="p-5" />
        <MoreLessButton
          class="mt-14 m-5 lg:h-12"
          :isShowingMoreInfo="showMoreInfo"
          @moreLessButtonClicked="showMoreInfo = !showMoreInfo"
        />
        </div>
        <transition name="slide-in">
          <MoreInfoOrganism v-if="showMoreInfo" class="w-full" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MoreInfoOrganism from '@atomic/organisms/MoreInfoOrganism.vue';
import QuoteOrganism from '@atomic/organisms/QuoteOrganism.vue';
import TimeOrganism from '@atomic/organisms/TimeOrganism.vue';
import MoreLessButton from '@atomic/molecules/MoreLessButton.vue';

export default defineComponent({
  name: 'ClockApp',
  components: {
    QuoteOrganism,
    TimeOrganism,
    MoreLessButton,
    MoreInfoOrganism,
  },
  setup() {
    const showMoreInfo = ref(false);

    return { showMoreInfo };
  },
});
</script>

<style scoped>
.slide-in-enter-active {
  transition: all 0.3s ease-in;
}

.slide-in-leave-active {
  transition: all 0.3s ease-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateY(100%);
}
</style>
