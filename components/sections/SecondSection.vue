<template>
  <section
    :style="{ backgroundImage: `url(${bgImage})` }"
    class="w-full"
    id="WhatImages"
  >
    <div class="w-full max-w-8xl m-auto px-4 pt-10 lg:pt-28 pb-32">
      <div class="flex-col items-center space-y-2 flex lg:hidden">
        <h1 class="text-primary-100 font-bold font-Vollkorn text-[28px]">
          What are we looking for?
        </h1>
        <span class="text-base text-[#414141] font-medium"
          >The most interesting projects generally have…</span
        >
      </div>
      <div
        class="
          w-full
          flex
          lg:flex-row
          flex-col
          items-center
          lg:items-start lg:justify-between
        "
      >
        <div class="flex flex-col items-start space-y-4">
          <div class="flex-col items-start space-y-2 hidden lg:flex">
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
                @click="handelSelect(1, 'One doorbell')"
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
                <Houses
                  :selected="selected"
                  :selectedBadgeTitle="selectedBadgeTitle"
                  class="lg:hidden"
                />
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
                @click="handelSelect(2, 'Wide facade')"
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
                <Houses
                  :selected="selected"
                  :selectedBadgeTitle="selectedBadgeTitle"
                  class="lg:hidden"
                />
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
                @click="handelSelect(3, 'Great location')"
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
                <Houses
                  :selected="selected"
                  :selectedBadgeTitle="selectedBadgeTitle"
                  class="lg:hidden"
                />
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
                @click="handelSelect(4, 'Three stories high')"
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
                <Houses
                  :selected="selected"
                  :selectedBadgeTitle="selectedBadgeTitle"
                  class="lg:hidden"
                />
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
                @click="handelSelect(5, 'After')"
              >
                <IconCheck />
                <span class="lg:text-lg text-sm text-[#414141] font-normal whitespace-nowrap"
                  >To be renovated ( NO new constructions )</span
                >
              </div>
              <div class="max-w-[283px] w-full pl-10" v-show="selected == 5">
                <p class="text-sm text-[#414141] font-normal">
                  All of our projects need to be renovated to restructure the
                  buildings in to a cohousing so we might aswel buy a building
                  that needs renovation anyways.
                </p>
                <Houses
                  :selected="selected"
                  :selectedBadgeTitle="selectedBadgeTitle"
                  class="lg:hidden"
                />
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
                @click="handelSelect(6, '300 square feet')"
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
                    @click="handelSelect(6, '300 square feet')"
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >300 square feet</span
                    >
                  </div>
                  <div class="max-w-[283px] w-full pl-10" v-if="selected == 6">
                    <Houses
                      :selected="selected"
                      :selectedBadgeTitle="selectedBadgeTitle"
                      class="lg:hidden"
                    />
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
                    @click="handelSelect(7, 'At least 5-6 rooms')"
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >At least 5-6 rooms</span
                    >
                  </div>
                  <div class="max-w-[283px] w-full pl-10" v-if="selected == 7">
                    <Houses
                      :selected="selected"
                      :selectedBadgeTitle="selectedBadgeTitle"
                      class="lg:hidden"
                    />
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
                    @click="handelSelect(8, '15 - 20 square meters / room')"
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >15 - 20 square meters / room</span
                    >
                  </div>
                  <div class="max-w-[283px] w-full pl-10" v-if="selected == 8">
                    <Houses
                      :selected="selected"
                      :selectedBadgeTitle="selectedBadgeTitle"
                      class="lg:hidden"
                    />
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
                    @click="handelSelect(9, 'Garden and/or a terrace')"
                  >
                    <IconCheck />
                    <span class="lg:text-lg text-sm text-[#414141] font-normal"
                      >Garden and/or a terrace</span
                    >
                  </div>
                  <div class="max-w-[283px] w-full pl-10" v-if="selected == 9">
                    <Houses
                      :selected="selected"
                      :selectedBadgeTitle="selectedBadgeTitle"
                      class="lg:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Houses
          :selected="selected"
          :selectedBadgeTitle="selectedBadgeTitle"
          class="hidden lg:flex"
        />
      </div>
    </div>
  </section>
</template>

<script>
import bgImage from "@/assets/img/secondsection.png";
import IconCheck from "@/components/Icons/IconCheck.vue";
import Houses from "@/components/includes/Houses.vue";
export default {
  data() {
    return {
      bgImage,
      selected: 1,
      selectedBadgeTitle: "One doorbell",
    };
  },
  methods: {
    goUp() {
      window.scrollTo({
        top: document.getElementById("WhatImages").offsetTop,
        behavior: "smooth",
      });
    },
    handelSelect(index, text) {
      this.selected = index;
      this.selectedBadgeTitle = text;
      if (window.innerWidth > 1024) {
        this.goUp();
      }
    },
  },
  components: {
    IconCheck,
    Houses,
  },
};
</script>

