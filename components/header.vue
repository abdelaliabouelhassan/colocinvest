<template>
  <div class="w-full bg-white shadow-4xl p-4 fixed inset-x-0 z-50">
    <div class="max-w-8xl m-auto w-full flex justify-between items-center">
      <a href="/">
        <Logo />
      </a>
      <div>
        <button
          @click="GetStarted"
          class="
            lg:text-lg
            text-sm
            font-bold
            text-primary-100
            bg-white
            border border-primary-100
            rounded-md
            lg:w-[194px]
            w-[110px]
            h-[40px]
            lg:h-[60px]
            hover:bg-primary-100 hover:text-white
          "
        >
          Get started
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
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
