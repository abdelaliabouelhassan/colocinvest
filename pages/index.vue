<template>
  <div>
    <FirstSection />
    <SecondSection />
  </div>
</template>



<script>
import FirstSection from "@/components/sections/FirstSection.vue";
import SecondSection from "@/components/sections/SecondSection.vue";
export default {
  layout: "default",
  components: {
    FirstSection,
    SecondSection,
  },
};
</script>