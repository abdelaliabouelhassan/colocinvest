<template>
  <section
    class="w-full main-bg"
  >
    <div class="w-full max-w-[1520px] m-auto px-4 py-20 space-y-20">
     <div class=" w-full flex flex-col lg:items-start items-center space-y-4 lg:space-y-0 ">
         <h1 class="text-primary-100 font-bold font-Vollkorn lg:text-5xl text-[28px] ">
        What people say
      </h1>
      <span class=" text-base font-normal text-[#414141]  lg:hidden text-center">People describe how is the process goes with them</span>
     </div>

      <div class="w-full flex lg:flex-row flex-col space-y-8 lg:space-y-0 items-center lg:justify-between">
        <div class="lg:flex lg:items-center lg:space-x-20">
          <div class="w-[455px] h-[455px] bg-[#FEE37D] rounded-2xl relative hidden xl:block">
            <div
              class="
                w-[463px]
                h-[464px]
                rounded-2xl
                overflow-hidden
                absolute
                top-6
                left-6
                bg-gray-400
              "
            >
              <img
                src="~/assets/img/whatsay.png"
                class="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-col lg:items-start items-center space-y-4">
            <div class="max-w-[721px] relative space-y-4">
              <div>
                <svg
                  width="41"
                  height="35"
                  viewBox="0 0 41 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.28031 35C3.52031 34.28 2.20031 33.16 1.32031 31.64C0.440311 30.12 0.00030899 27.68 0.00030899 24.32C0.00030899 20.32 0.960312 16.2 2.88031 11.96C4.72031 7.8 7.32031 4.08 10.6803 0.799995C12.0403 0.719997 13.3203 0.84 14.5203 1.16C15.6403 1.56 16.7203 2.04 17.7603 2.6C15.7603 4.76 14.3203 6.88 13.4403 8.96C12.4803 11.12 12.0003 13.12 12.0003 14.96C12.0003 16.64 12.4803 17.96 13.4403 18.92C14.4003 19.88 16.0403 20.44 18.3603 20.6C18.4403 22.6 18.3603 24.48 18.1203 26.24C17.8803 28.08 17.4803 29.76 16.9203 31.28C12.3603 31.68 8.48031 32.92 5.28031 35ZM26.8803 34.88C25.0403 34.16 23.7203 33 22.9203 31.4C22.1203 29.88 21.7203 27.48 21.7203 24.2C21.7203 20.2 22.6403 16.2 24.4803 12.2C26.2403 8.2 28.6803 4.6 31.8003 1.4C33.1603 1.32 34.4403 1.44 35.6403 1.76C36.7603 2.16 37.8003 2.64 38.7603 3.2C36.9203 5.28 35.5603 7.28 34.6803 9.2C33.7203 11.2 33.2403 13.12 33.2403 14.96C33.2403 16.64 33.8003 17.96 34.9203 18.92C36.0403 19.88 37.8403 20.44 40.3203 20.6C40.3203 22.6 40.2403 24.4 40.0803 26C39.8403 27.68 39.4403 29.4 38.8803 31.16C36.4003 31.4 34.1603 31.8 32.1603 32.36C30.0803 33 28.3203 33.84 26.8803 34.88Z"
                    fill="#FFEBA3"
                  />
                </svg>
              </div>
              <p class="text-[25px]   font-normal text-[#414141] hidden lg:block ">
                 {{items[active].text}}
              </p>
              <p class=" text-sm font-medium text-center text-[#414141]  lg:hidden ">
                 {{items[active].text}}
              </p>
              <div class="text-right float-right">
                <svg
                  width="41"
                  height="35"
                  viewBox="0 0 41 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.7197 0C37.4797 0.72 38.7997 1.84 39.6797 3.36C40.5597 4.88 40.9997 7.32 40.9997 10.68C40.9997 14.68 40.0397 18.8 38.1197 23.04C36.2797 27.2 33.6797 30.92 30.3197 34.2C28.9597 34.28 27.6797 34.16 26.4797 33.84C25.3597 33.44 24.2797 32.96 23.2397 32.4C25.2397 30.24 26.6797 28.12 27.5597 26.04C28.5197 23.88 28.9997 21.88 28.9997 20.04C28.9997 18.36 28.5197 17.04 27.5597 16.08C26.5997 15.12 24.9597 14.56 22.6397 14.4C22.5597 12.4 22.6397 10.52 22.8797 8.76C23.1197 6.92 23.5197 5.24 24.0797 3.72C28.6397 3.32 32.5197 2.08 35.7197 0ZM14.1197 0.119999C15.9597 0.839999 17.2797 2 18.0797 3.6C18.8797 5.12 19.2797 7.52 19.2797 10.8C19.2797 14.8 18.3597 18.8 16.5197 22.8C14.7597 26.8 12.3197 30.4 9.19969 33.6C7.83969 33.68 6.55969 33.56 5.35969 33.24C4.23969 32.84 3.19969 32.36 2.23969 31.8C4.07969 29.72 5.43969 27.72 6.31969 25.8C7.27969 23.8 7.75969 21.88 7.75969 20.04C7.75969 18.36 7.19969 17.04 6.07969 16.08C4.95969 15.12 3.15969 14.56 0.679688 14.4C0.679688 12.4 0.759688 10.6 0.919688 9C1.15969 7.32 1.55969 5.6 2.11969 3.84C4.59969 3.6 6.83969 3.2 8.83969 2.64C10.9197 2 12.6797 1.16 14.1197 0.119999Z"
                    fill="#FFEBA3"
                  />
                </svg>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="
                  lg:w-[90px] w-[56px]
                  lg:h-[90px] h-[56px]
                  rounded-full
                  bg-gray-400
                  overflow-hidden
                "
              >
                <img
                  :src="items[active].image"
                  class="w-full h-full object-cover"
                  :alt="items[active].name"
                />
              </div>
              <div class="flex flex-col items-start space-y-2">
                <span
                  class="text-primary-100 font-semibold font-Vollkorn text-base lg:text-2xl"
                  >{{items[active].name}}</span
                >
                <span class="lg:text-lg text-sm font-normal text-[#414141]">{{items[active].career}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex  flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-4">
          <div
           @click="active = 0"
            class="
              lg:w-6 w-3
              lg:h-6 h-3
              rounded-full
              border border-[#FECE1F]
              cursor-pointer
              hover:bg-[#FECE1F]
            "
            :class="{'bg-[#FECE1F]':active == 0}"
          ></div>
          <div

           @click="active = 1"
            class="
                lg:w-6 w-3
              lg:h-6 h-3
              rounded-full
              border border-[#FECE1F]
              cursor-pointer
            "
            :class="{'bg-[#FECE1F]':active == 1}"
          ></div>
          <div
           @click="active = 2"
            class="
                lg:w-6 w-3
              lg:h-6 h-3
              rounded-full
              border border-[#FECE1F]
              cursor-pointer
              hover:bg-[#FECE1F]
            "
            :class="{'bg-[#FECE1F]':active == 2}"
          ></div>
          <div
           @click="active = 3"
            class="
               lg:w-6 w-3
              lg:h-6 h-3
              rounded-full
              border border-[#FECE1F]
              cursor-pointer
              hover:bg-[#FECE1F]
            "
            :class="{'bg-[#FECE1F]':active == 3}"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        {
          name: "Zoë Buyle",
          text: "My name is Zoë Buyle, I am a student psychology in Ghent and like any student can use some extra ‘pocket money’. I saw the add from Coloc by accident and knew that my uncle who lived in the city centre of Ghent was planning on selling his house. I got him in touch with Coloc by registering his house and just three weeks later I received €1.000 through the dashboard.",
          image:
            "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWdlbnR8ZW58MHx8MHx8&w=1000&q=80",
          career:"Student"
        },
        {
          name: "rico fhos ",
          text: "lorme ipsum dolor sit amet, consectetur adipiscing elit.",
          image:
            "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
        career:"software engineer"
        },
        {
          name: "jhin doe",
          text: "lorme ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://img.freepik.com/free-photo/suspicious-bearded-man-looks-doubtfully-curves-lips-being-indecisive-makes-grimace_273609-8966.jpg?w=2000",
            career:"doctor"
      },
        {
          name: "tacos suse",
          text: "g elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
          career:"freelancer"
       },
      ],
    };
  },
};
</script>