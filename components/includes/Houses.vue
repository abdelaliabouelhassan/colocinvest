<template>
      <div  class="flex items-center order-first lg:order-last py-10 lg:py-0 pr-10 " :class="{'-space-x-14 ml-[-53px] lg:ml-0 lg:-space-x-11':selected == 5}">
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
</template>


<script>
export default {
    props: {
        selected: {
            type: Number,
            default: 1
        },
        selectedBadgeTitle: {
            type: String,
            default: 'After'
        },
    },
}
</script>