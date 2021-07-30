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
        flex flex-col
        justify-between
      "
    >
      <transition name="slide-out">
        <QuoteOrganism
          v-if="!showMoreInfo"
          class="p-5 lg:p-12"
          :quote="quote"
          :author="author"
          :isLoadingQuote="isLoadingQuote"
          @refreshButtonClicked="getQuote"
        />
      </transition>
      <div class="flex flex-col h-full justify-end">
        <div
          class="
            flex-grow flex flex-col
            justify-end
            items-start
            lg:flex lg:flex-row lg:justify-between lg:items-end
            h-full
            lg:p-12
            transition-all
            duration-300
          "
        >
          <TimeOrganism
            class="p-5"
            :time="time"
            :timeZoneCode="timezoneCode"
            :isNight="isNight"
            :isAfternoon="isAfternoon"
            :countryCode="countryCode"
            :city="city"
          />
          <MoreLessButton
            class="mt-14 m-5 lg:h-12"
            :isShowingMoreInfo="showMoreInfo"
            @moreLessButtonClicked="showMoreInfo = !showMoreInfo"
          />
        </div>
        <transition name="slide-in">
          <MoreInfoOrganism
            v-if="showMoreInfo"
            class="w-full"
            :timezone="timezone"
            :dayOfYear="dayOfYear"
            :dayOfWeek="dayOfWeek"
            :weekNumber="weekNumber"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import MoreInfoOrganism from '@atomic/organisms/MoreInfoOrganism.vue';
import QuoteOrganism from '@atomic/organisms/QuoteOrganism.vue';
import TimeOrganism from '@atomic/organisms/TimeOrganism.vue';
import MoreLessButton from '@atomic/molecules/MoreLessButton.vue';
import { GetGeoIpDataUseCase } from '@/cleanArchitecture/useCases/GetGeoIpDataUseCase';
import { GetTimeDataUseCase } from '@/cleanArchitecture/useCases/GetTimeDataUseCase';
import { GetQuoteUseCase } from "@/cleanArchitecture/useCases/GetQuoteUseCase";

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
    const time = ref('');
    const isNight = ref(false);
    const isAfternoon = ref(false);
    const isLoadingQuote = ref(false);
    const timezoneCode = ref('');
    const city = ref('');
    const countryCode = ref('');
    const timezone = ref('');
    const dayOfWeek = ref(0);
    const dayOfYear = ref(0);
    const weekNumber = ref(0);
    const author = ref('');
    const quote = ref('');

    const getCurrentTime = () => {
      const checkTimeValue = (timeValue: number) => {
        return timeValue < 10 ? `0${timeValue}` : timeValue;
      };
      const date = new Date();
      const hours = date.getHours();
      isNight.value = hours >= 18 || hours < 5;
      isAfternoon.value = hours >= 12 || hours < 18;
      const minutes = date.getMinutes();
      const newTime = `${checkTimeValue(hours)}.${checkTimeValue(minutes)}`;
      if (time.value !== newTime) time.value = newTime;
    };
    const timer = setInterval(getCurrentTime, 1000);

    const getCityFromTimeZone = (timezone: string) => {
      return timezone.split('/').pop() || '';
    };
    const getQuote = async () => {
      isLoadingQuote.value = true;
      const quoteData = await new GetQuoteUseCase().getQuote();
      quote.value = quoteData.quote;
      author.value = quoteData.author;
      isLoadingQuote.value = false;
    };

    onMounted(async () => {
      getCurrentTime();
      try {
        const geoIpData = await new GetGeoIpDataUseCase().getGeoIpData();
        city.value = geoIpData.city || getCityFromTimeZone(geoIpData.timeZone);
        countryCode.value = geoIpData.countryCode;
        const timeData = await new GetTimeDataUseCase().getTimeData({
          timeZone: geoIpData.timeZone,
        });
        await getQuote();
        timezoneCode.value = timeData.timezoneCode;
        timezone.value = timeData.timeZone;
        dayOfWeek.value = timeData.dayOfWeek;
        dayOfYear.value = timeData.dayOfYear;
        weekNumber.value = timeData.weekNumber;
      } catch (error) {
        isLoadingQuote.value = false;
        console.log('Error gotten', error);
      }
    });
    onUnmounted(() => {
      clearInterval(timer);
    });
    return {
      showMoreInfo,
      time,
      timezoneCode,
      isNight,
      isAfternoon,
      isLoadingQuote,
      countryCode,
      city,
      timezone,
      dayOfYear,
      dayOfWeek,
      weekNumber,
      author,
      quote,
      getQuote,
    };
  },
});
</script>

<style scoped>
.slide-in-enter-active,
.slide-out-enter-active {
  transition: all 0.3s;
}

.slide-in-leave-active,
.slide-out-leave-active {
  transition: all 0.1s ease-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateY(100%);
}
.slide-out-enter-from,
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
