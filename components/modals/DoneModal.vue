<template>
  <div
    class="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          space-y-8
          px-10
          py-8
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          lg:max-w-lg
          sm:align-middle sm:max-w-md sm:w-full
          w-full
        "
      >
        <div class="w-full flex">
          <div class="m-auto">
            <lottie-player
             class=" md:pr-0 pr-36"
              autoplay
              loop
              style="width: 400px"
              src="https://assets6.lottiefiles.com/packages/lf20_s03mfrde.json"
              speed="1"
              debug
            ></lottie-player>
            <div class="flex flex-col items-center space-y-1 pr-[136px] lg:pr-0">
            <div class=" flex flex-col items-center space-y-2">
                  <span
                class="
                  lg:text-2xl text-[22px] text-primary-100 
                  font-bold
                  text-center
                "
                >Thank you</span
              >
              <span class=" text-lg text-[#414141] font-normal">Request submitted</span>
            </div>
            
              <div class="pt-4">
                <button
                  @click="Done"
                  class="
                    text-mainback
                    py-2
                    px-6
                    rounded-md
                    bg-[#FECE1F]
                    hover:bg-opacity-75 
                    font-normal text-sm
                  "
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  methods: {
    Done() {
      this.$root.$emit('closeModal')
    },
  },
}
</script>