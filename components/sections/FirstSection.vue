<template>
  <section
    class="w-full pt-10 lg:pt-[92px] lg:overflow-hidden main-bg"
  >
    <div class="w-full max-w-8xl m-auto px-4 pt-10 lg:pt-28 lg:pb-44 pb-10">
      <div class="w-full grid lg:grid-cols-2 grid-cols-1">
        <div
          class="
            w-full
            flex flex-col
            lg:items-start
            items-center
            space-y-8
            order-last
            lg:order-first
          "
        >
          <div class="lg:w-full flex flex-col items-start space-y-4 m-auto">
            <h1
              class="
                text-primary-100 text-[28px]
                lg:text-6xl
                font-bold font-Vollkorn
              "
            >
              Get a <span class="text-trans">€1000</span> cash reward by
              spotting a house!
            </h1>
            <p class="text-[#414141] font-medium text-base lg:text-[22px]">
              If we seal the deal on the house you spotted, you will receive
              €1.000 in cash.
            </p>
          </div>
          <div
            class="
              w-full
              rounded-full
              border border-primary-200
              py-5
              px-4
              bg-[#FFFAE9]
              hidden
              xl:block
            "
          >
            <div class="w-full flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <IconHouse />
                <h1
                  class="
                    text-lg
                    font-bold
                    text-primary-100
                    font-Vollkorn
                    whitespace-nowrap
                  "
                >
                  I. Spot a house
                </h1>
                <IconArowRight />
              </div>
              <div class="flex items-center space-x-2">
                <IconDeal />

                <h1
                  class="
                    text-lg
                    font-bold
                    text-primary-100
                    font-Vollkorn
                    whitespace-nowrap
                  "
                >
                  2. We make the deal
                </h1>
                <IconArowRight />
              </div>
              <div class="flex items-center space-x-2">
                <IconRewards />

                <h1
                  class="
                    text-lg
                    font-bold
                    text-[#1B998B]
                    font-Vollkorn
                    whitespace-nowrap
                  "
                >
                  3. You get rewarded
                </h1>
              </div>
            </div>
          </div>
          <div
            class="
              w-full
              flex flex-col
              items-center
              space-y-4
              max-w-[250px]
              m-auto
              md:m-0
              xl:hidden
            "
          >
            <div
              class="
                w-full
                rounded-full
                border border-primary-200
                py-2
                bg-[#FFFAE9]
                flex
              "
            >
              <div class="flex items-center space-x-4 m-auto">
                <IconHouse />
                <h1
                  class="
                    text-sm
                    font-bold
                    text-primary-100
                    font-Vollkorn
                    whitespace-nowrap
                  "
                >
                  I. Spot a house
                </h1>
              </div>
            </div>
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.45312 8.61914L5.49979 12.6658L9.54646 8.61914"
                stroke="#7A7A7A"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 1.33398L5.5 12.554"
                stroke="#7A7A7A"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div
              class="
                w-full
                rounded-full
                border border-primary-200
                py-2
                bg-[#FFFAE9]
                flex
              "
            >
              <div class="flex items-center space-x-4 m-auto">
                <IconDeal />
                <h1
                  class="
                    text-sm
                    font-bold
                    text-primary-100
                    font-Vollkorn
                    whitespace-nowrap
                  "
                >
                  2. We make the deal
                </h1>
              </div>
            </div>
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.45312 8.61914L5.49979 12.6658L9.54646 8.61914"
                stroke="#7A7A7A"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 1.33398L5.5 12.554"
                stroke="#7A7A7A"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div
              class="
                w-full
                rounded-full
                border border-primary-200
                py-2
                bg-[#FFFAE9]
                flex
              "
            >
              <div class="flex items-center space-x-4 m-auto">
                <IconRewards />
                <h1
                  class="
                    text-sm
                    font-bold
                    text-[#1B998B]
                    font-Vollkorn
                    whitespace-nowrap
                  "
                >
                  3. You get rewarded
                </h1>
              </div>
            </div>
          </div>
          <div
            class="
              flex flex-col
              items-start
              space-y-2
              text-[#414141] text-sm
              lg:text-lg
              font-normal pl-9 lg:pl-6
              p-4
            "
          >
            <ul class="list-disc">
              <li>Are your (grand) parents selling their house?</li>
              <li>Is your student housing up for sale?</li>
              <li>You got lost in the city and saw some “for sale” signs?</li>
            </ul>
          </div>

          <button
           @click="GetStarted"
            class="
              lg:text-lg
              text-sm
              lg:font-bold
              font-medium
              text-primary-100
              lg:w-[196px]
              w-[128px]
              lg:h-[60px]
              h-[44px]
              rounded-md
              bg-[#FECE1F]
              text-center
              hover:bg-opacity-60 hover:text-opacity-60
            "
          >
            Get Started
          </button>
        </div>
        <div class="w-full h-full relative">
          <div
            class="w-full lg:absolute lg:-top-[200px] lg:-right-8 flex"
            @mouseover="show = false"
            @mouseleave="show = true"
          >
            <DesktopHero :show="show" class="lg:block hidden xl:absolute" />
            <MobileHero class="lg:hidden m-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import DesktopHero from "@/components/hero/DesktopHero.vue";
import MobileHero from "@/components/hero/MobileHero.vue";
import IconArowRight from "@/components/Icons/IconArowRight.vue";
import IconDeal from "@/components/Icons/IconDeal.vue";
import IconRewards from "@/components/Icons/IconRewards.vue";
import IconHouse from "@/components/Icons/IconHouse.vue";
export default {
  components: {
    DesktopHero,
    MobileHero,
    IconArowRight,
    IconDeal,
    IconRewards,
    IconHouse,
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    GetStarted() {
      //scroll to ContactUs id
      window.scrollTo({
        top: document.getElementById("ContactUs").offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>