<template>
  <section :style="{ backgroundImage: `url(${bgImage})` }" class="w-full">
    <div class="w-full max-w-8xl m-auto px-4 pt-10 lg:pt-28 pb-32">
          <div class=" flex-col items-center space-y-2 flex  lg:hidden">
            <h1 class="text-primary-100 font-bold font-Vollkorn text-[28px]">
              What are we looking for?
            </h1>
            <span class="text-base text-[#414141] font-medium"
              >The most interesting projects generally have…</span
            >
          </div>
      <div class="w-full flex lg:flex-row flex-col items-center lg:items-start lg:justify-between">
        <div class="flex flex-col items-start space-y-4">
          <div class=" flex-col items-start space-y-2 hidden lg:flex">
            <h1 class="text-primary-100 font-bold font-Vollkorn text-5xl">
              What are we looking for?
            </h1>
            <span class="text-[22px] text-[#414141] font-medium"
              >The most interesting projects generally have…</span
            >
          </div>

          <div class="w-full flex flex-col items-start space-y-8">
            <div class="flex flex-col items-start space-y-4">
              <div
                class="
                  flex
                  rounded-full
                  items-center
                  space-x-2
                  py-2
                  px-6
                  cursor-pointer
                  ring-[#FEE37D]
                "
                :class="{
                  'bg-[#FECE1F] ': selected == 1,
                  'hover:bg-[#FFFAE9] hover:ring-1': selected != 1,
                }"
                @click="
                  selected = 1;
                  selectedBadgeTitle = 'One doorbell';
                "
              >
                <IconCheck />
                <span class="lg:text-lg text-sm text-[#414141] font-normal"
                  >One doorbell</span
                >
              </div>
              <div class="max-w-[283px] w-full pl-10" v-show="selected == 1">
                <p class="text-sm text-[#414141] font-normal">
                  One doorbell is a sign that the house is still owned by just
                  one person and not divided in to several units.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div
                class="
                  flex
                  rounded-full
                  items-center
                  space-x-2
                  py-2
                  px-6
                  cursor-pointer
                  ring-[#FEE37D]
                "
                :class="{
                  'bg-[#FECE1F] ': selected == 2,
                  'hover:bg-[#FFFAE9] hover:ring-1': selected != 2,
                }"
                @click="
                  selected = 2;
                  selectedBadgeTitle = 'Wide facade';
                "
              >
                <IconCheck />
                <span class="lg:text-lg text-sm text-[#414141] font-normal"
                  >Wide facade</span
                >
              </div>
              <div class="max-w-[283px] w-full pl-10" v-show="selected == 2">
                <p class="text-sm text-[#414141] font-normal">
                  A wide facade is a good indication that we can fit enough
                  rooms in the building.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div
                class="
                  flex
                  rounded-full
                  items-center
                  space-x-2
                  py-2
                  px-6
                  cursor-pointer
                  ring-[#FEE37D]
                "
                :class="{
                  'bg-[#FECE1F] ': selected == 3,
                  'hover:bg-[#FFFAE9] hover:ring-1': selected != 3,
                }"
                @click="
                  selected = 3;
                  selectedBadgeTitle = 'Great location';
                "
              >
                <IconCheck />
                <span class="lg:text-lg text-sm text-[#414141] font-normal"
                  >Great location</span
                >
              </div>
              <div class="max-w-[283px] w-full pl-10" v-show="selected == 3">
                <p class="text-sm text-[#414141] font-normal">
                  Our inhabitants love to be close to the city center of major
                  cities.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div
                class="
                  flex
                  rounded-full
                  items-center
                  space-x-2
                  py-2
                  px-6
                  cursor-pointer
                  ring-[#FEE37D]
                "
                :class="{
                  'bg-[#FECE1F] ': selected == 4,
                  'hover:bg-[#FFFAE9] hover:ring-1': selected != 4,
                }"
                @click="
                  selected = 4;
                  selectedBadgeTitle = 'Three stories high';
                "
              >
                <IconCheck />
                <span class="lg:text-lg text-sm text-[#414141] font-normal"
                  >At least three stories high</span
                >
              </div>
              <div class="max-w-[283px] w-full pl-10" v-show="selected == 4">
                <p class="text-sm text-[#414141] font-normal">
                  The more stories, the more rooms
                </p>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div
                class="
                  flex
                  rounded-full
                  items-center
                  space-x-2
                  py-2
                  px-6
                  cursor-pointer
                  ring-[#FEE37D]
                "
                :class="{
                  'bg-[#FECE1F] ': selected == 5,
                  'hover:bg-[#FFFAE9] hover:ring-1': selected != 5,
                }"
                @click="selected = 5;selectedBadgeTitle = 'After'"
              >
                <IconCheck />
                <span class="lg:text-lg text-sm text-[#414141] font-normal"
                  >To be renovated ( NO new constructions )</span
                >
              </div>
              <div class="max-w-[283px] w-full pl-10" v-show="selected == 5">
                <p class="text-sm text-[#414141] font-normal">
                  All of our projects need to be renovated to restructure the
                  buildings in to a cohousing so we might aswel buy a building
                  that needs renovation anyways.
                </p>
              </div>
            </div>
            <div class="flex flex-col items-start space-y-4">
              <div
                class="
                  flex
                  rounded-full
                  items-center
                  space-x-2
                  py-2
                  px-6
                  cursor-pointer
                  bg-[#FFFAE9]
                "
                @click="
                  selected = 6;
                  selectedBadgeTitle = '300 square feet';
                "
              >
                <span class="lg:text-lg text-base text-primary-100 font-medium"
                  >More detailed characteristics</span
                >
                <svg
                  :class="{ bottom: selected >= 6 }"
                  width="9"
                  height="19"
                  viewBox="0 0 9 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.910156 17.4201L7.43016 10.9001C8.20016 10.1301 8.20016 8.87008 7.43016 8.10008L0.910156 1.58008"
                    stroke="#1A1A1A"
                    stroke-width="1.3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="w-full flex flex-col items-start space-y-4"
                v-show="selected >= 6"
              >
                <div class="flex flex-col items-start space-y-4">
                  <div
                    class="
                      flex
                      rounded-full
                      items-center
                      space-x-2
                      py-2
                      px-6
                      cursor-pointer
                      ring-[#FEE37D]
                    "
                    :class="{
                      'bg-[#FECE1F] ': selected == 6,
                      'hover:bg-[#FFFAE9] hover:ring-1': selected != 6,
                    }"
                    @click="
                      selected = 6;
                      selectedBadgeTitle = '300 square feet';
                    "
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >300 square feet</span
                    >
                  </div>
                </div>
                <div class="flex flex-col items-start space-y-4">
                  <div
                    class="
                      flex
                      rounded-full
                      items-center
                      space-x-2
                      py-2
                      px-6
                      cursor-pointer
                      ring-[#FEE37D]
                    "
                    :class="{
                      'bg-[#FECE1F] ': selected == 7,
                      'hover:bg-[#FFFAE9] hover:ring-1': selected != 7,
                    }"
                    @click="
                      selected = 7;
                      selectedBadgeTitle = 'At least 5-6 rooms';
                    "
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >At least 5-6 rooms</span
                    >
                  </div>
                </div>
                <div class="flex flex-col items-start space-y-4">
                  <div
                    class="
                      flex
                      rounded-full
                      items-center
                      space-x-2
                      py-2
                      px-6
                      cursor-pointer
                      ring-[#FEE37D]
                    "
                    :class="{
                      'bg-[#FECE1F] ': selected == 8,
                      'hover:bg-[#FFFAE9] hover:ring-1': selected != 8,
                    }"
                    @click="
                      selected = 8;
                      selectedBadgeTitle = '15 - 20 square meters / room';
                    "
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >15 - 20 square meters / room</span
                    >
                  </div>
                </div>
                <div class="flex flex-col items-start space-y-4">
                  <div
                    class="
                      flex
                      rounded-full
                      items-center
                      space-x-2
                      py-2
                      px-6
                      cursor-pointer
                      ring-[#FEE37D]
                    "
                    :class="{
                      'bg-[#FECE1F] ': selected == 9,
                      'hover:bg-[#FFFAE9] hover:ring-1': selected != 9,
                    }"
                    @click="
                      selected = 9;
                      selectedBadgeTitle = 'Garden and/or a terrace';
                    "
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >Garden and/or a terrace</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center order-first lg:order-last py-20 lg:py-0 " :class="{'-space-x-11':selected == 5}">
          <div class="relative -z-20" v-if="selected == 5">
            <div
              class="
                lg:w-[64px] w-[34px]
                lg:h-[64px] h-[34px]
                rounded-full
                bg-[#FECE1F]
                absolute
                lg:-left-10 -left-4
                lg:-top-7 -top-3 z-10
              "
            ></div>
            <div
              class="
                lg:w-[250px] w-[150px]
                lg:h-[350px] h-[218px]
                rounded-2xl
                overflow-hidden
                bg-gray-600
                relative
              "
            >
              <img src="~/assets/img/before.png" class=" w-full h-full" alt="Before">
              <div
                class="
                  bg-white
                  text-primary-100
                  font-medium
                  lg:text-lg text-sm
                  py-2
                  px-4
                  rounded-lg
                  absolute
                  left-4
                  bottom-3
                "
              >
               Before
              </div>
            </div>
          </div>
          <div class="relative">
            <div
              class="
                lg:w-[120px] w-[64px]
                lg:h-[120px] h-[64px]
                rounded-full
                bg-[#AFC1D4]
                absolute
                lg:-right-10 -right-5
                lg:-top-10 -top-5
                -z-10
              "
            ></div>
            <div
              class="
                lg:w-[120px] w-[64px]
                lg:h-[120px] h-[64px]
                rounded-full
                bg-[#FECE1F]
                absolute
                lg:-left-10 -left-5
                lg:-bottom-10 -bottom-5
                -z-10
              "
            ></div>
            <div
              class="
                lg:w-[350px]  w-[251px]
                lg:h-[450px]  h-[318px]
                rounded-2xl
                overflow-hidden
                bg-gray-400
                relative
              "
            >
              <img :src="require('~/assets/img/'+selected+'.png')" class=" w-full h-full" :alt="selectedBadgeTitle">
              <div
                class="
                  bg-white
                  text-primary-100
                  font-medium
                  lg:text-lg text-sm
                  py-2
                  px-4
                  rounded-lg
                  absolute
                  left-4
                  bottom-3
                "
              >
                {{ selectedBadgeTitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bgImage from "@/assets/img/secondsection.png";
import IconCheck from "@/components/Icons/IconCheck.vue";
export default {
  data() {
    return {
      bgImage,
      selected: 1,
      selectedBadgeTitle: "One doorbell",
    };
  },
  components: {
    IconCheck,
  },
};
</script>

