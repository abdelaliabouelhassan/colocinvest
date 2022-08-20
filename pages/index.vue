<template>
  <div class="relative">
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />

    <div
     v-if="showScrollTop"
     @click="scrollTop"
      class="
        w-[40px]
        h-[40px]
        rounded-full
        flex
        bg-[#FECE1F]
        hover:bg-opacity-80 hover:text-opacity-80
        cursor-pointer fixed right-5 bottom-5 z-40
      "
    >
      <svg
        class="m-auto"
        width="18"
        height="9"
        viewBox="0 0 18 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9201 8.05063L10.4001 1.53062C9.63008 0.760625 8.37008 0.760625 7.60008 1.53062L1.08008 8.05063"
          stroke="#1A1A1A"
          stroke-width="1.3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>



<script>
import FirstSection from "@/components/sections/FirstSection.vue";
import SecondSection from "@/components/sections/SecondSection.vue";
import ThirdSection from "@/components/sections/ThirdSection.vue";
import FourthSection from "@/components/sections/FourthSection.vue";
export default {
  layout: "default",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection
  },
  data(){
    return {
      showScrollTop: false,
    }
  },
  methods:{
   scrollTop(){
     window.scrollTo({
       top: 0,
       behavior: "smooth"
     })
   }
  },
  mounted(){
    window.addEventListener("scroll", () => {
      this.showScrollTop = window.scrollY > 100
    })
  },
};
</script>