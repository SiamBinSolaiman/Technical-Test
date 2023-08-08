<template>
  <div id="homepage">
    <div class="mt-32 md:min-h-screen">
      <div>
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div class="">
            <div
              class="container mx-auto lg:order-first order-last lg:mt-0 mt-12"
            >
              <span
                class="xl:text-[95px] lg:text-[65px] text-[50px] text-primary"
              >
                LET'S RIDE
              </span>

              <span
                class="xl:text-[95px] lg:text-[65px] text-[50px] text-primary font-bold"
                >THE FUTURE.
              </span>
              <div class="border-b-4 border-gray-800 lg:w-1/3"></div>
              <div class="mt-20 lg:w-2/3 w-full">
                <p class="text-xl text-gray-800">
                  Simple and sleek design with users in mind.
                </p>

                <div class="grid md:grid-cols-2 grid-cols-1 gap-x-10 mt-10">
                  <button
                    class="flex items-center space-x-3 md:mb-0 mb-3 bg-white border-2 border-transparent group hover:rounded-lg hover:bg-primary duration-300 ease-in"
                  >
                    <SvgBuyNow class="w-20 bg-primary group-hover:animate-bounce group-hover:bg-transparent"/>
                    <p class="text-xl text-gray-800 group-hover:text-white">
                      Buy now
                    </p>
                  </button>
                  <button
                    class="flex items-center space-x-3   bg-white border-2 border-transparent group hover:rounded-lg  duration-300 ease-in"
                  >
                    <p class="text-xl text-gray-800 ">
                      Watch our video how it works
                    </p>
                    <SvgPlay class=" bg-white rounded-full group-hover:animate-spin"  />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:order-last order-first">
            <div class="relative">
              <SvgPictureBg
                class="flex justify-end xl:h-[558px] w-full lg:h-[410px] md:h-[310px] h-[260px]"
              />
              <div>
                <img
                :src="imageSources[currentImageIndex]"
                  alt=""
                  class="md:px-0   absolute xl:-top-12 lg:-top-0 md:-top-20 -top-12 md:right-[65px] right-[40px] xl:w-[800px] lg:w-[500px] md:w-[500px] w-[350px] h-auto container mx-auto"
                />
              </div>
              <div class="flex justify-end container mx-auto mt-9">
                <div class="flex items-center justify-center">
                  <p class="md:text-[105px] text-[75px] font-bold ">0{{ currentImageIndex + 1 }}</p>
                  <!-- <SvgCountInHeader  /> -->
                  <div class="flex items-center justify-center">
                    <div
                      class="grid grid-cols-2 md:w-44 w-28 border-2 rounded-3xl border-gray-900 overflow-hidden"
                    >
                      <button  @click="prevImage"
                        class="col-span-1 flex items-center justify-center border-r-2 border-gray-900 lg:py-4 py-2 hover:bg-gray-300 duration-300 ease-in"
                      >
                        <SvgLeftArrowInButton />
                      </button>
                      <button   @click="nextImage"
                        class="col-span-1 flex items-center justify-center lg:py-4 py-2 hover:bg-gray-300 duration-300 ease-in"
                      >
                        <SvgRightArrowButton />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container mx-auto grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 xl:gap-x-12 lg:gap-x-9 md:gap-x-5 mt-11">
            <div
              class="col-span-1 w-full  bg-white drop-shadow-xl rounded-lg mb-7 hover:-translate-y-1 duration-200 ease-in"
            >
              <div>
                <p
                  class="flex items-center justify-center font-bold xl:text-3xl lg:text-2xl text-3xl  text-primary xl:pt-9 lg:pt-7 pt-9"
                >
                  105 lbs
                </p>
                <p
                  class="flex items-center justify-center xl:text-lg lg:text-base text-lg text-primary xl:pt-9 xl:pb-9 lg:pt-7 lg:pb-7 pt-9 pb-9"
                >
                  Net Weight
                </p>
              </div>
            </div>
            <div class="col-span-1 w-full  bg-white drop-shadow-xl  rounded-lg mb-7 hover:-translate-y-2 duration-200 ease-in">
              <p
                class="flex items-center justify-center font-bold xl:text-3xl lg:text-2xl text-3xl text-primary xl:pt-9 lg:pt-7 pt-9"
              >
                26 mph
              </p>
              <p
                class="flex items-center justify-center xl:text-lg lg:text-base text-lg text-primary xl:pt-9 xl:pb-9 lg:pt-7 lg:pb-7 pt-9 pb-9"
              >
                Top Speed
              </p>
            </div>
            <div class="col-span-1 w-full bg-white drop-shadow-xl rounded-lg mb-7 hover:-translate-y-2 duration-200 ease-in">
              <p
                class="flex items-center justify-center font-bold xl:text-3xl lg:text-2xl text-3xl text-primary xl:pt-9 lg:pt-7 pt-9"
              >
                38 miles
              </p>
              <p
                class="flex items-center justify-center xl:text-lg lg:text-base text-lg text-primary xl:pt-9 xl:pb-9 lg:pt-7 lg:pb-7 pt-9 pb-9"
              >
                Max Range
              </p>
            </div>
            <div class="col-span-1 w-full  bg-white drop-shadow-xl  rounded-lg mb-7 hover:-translate-y-2 duration-200 ease-in">
              <p
                class="flex items-center justify-center font-bold xl:text-3xl lg:text-2xl text-3xl text-primary xl:pt-9 lg:pt-7 pt-9"
              >
                89 nm
              </p>
              <p
                class="flex items-center justify-center xl:text-lg lg:text-base text-lg text-primary xl:pt-9 xl:pb-9 lg:pt-7 lg:pb-7 pt-9 pb-9"
              >
                Max Torques
              </p>
            </div>
            <div class="col-span-1 w-full  bg-white drop-shadow-xl  rounded-lg mb-7 hover:-translate-y-2 duration-200 ease-in">
              <p
                class="flex items-center justify-center font-bold xl:text-3xl lg:text-2xl text-3xl text-primary xl:pt-9 lg:pt-7 pt-9"
              >
                22% slope
              </p>
              <p
                class="flex items-center justify-center xl:text-lg lg:text-base text-lg text-primary xl:pt-9 xl:pb-9 lg:pt-7 lg:pb-7 pt-9 pb-9"
              >
                Hill Climbing
              </p>
            </div>
            <div class="col-span-1 w-full  bg-white drop-shadow-xl  rounded-lg mb-7 hover:-translate-y-2 duration-200 ease-in">
              <p
                class="flex items-center justify-center font-bold xl:text-3xl lg:text-2xl text-3xl text-primary xl:pt-9 lg:pt-7 pt-9"
              >
                2x
              </p>
              <p
                class="flex items-center justify-center text-center xl:text-lg lg:text-base text-lg text-primary xl:pt-9 xl:pb-9 lg:pt-7 lg:pb-7 pt-9 pb-9"
              >
                Hydralic Disc Brakes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coverImage from "../assets/images/new.png";

export default {
  data() {
    return {
      currentImageIndex: 1,
      currentNumberIndex: 0,
      imageSources: [
        "/images/blue.png",
        "/images/image.png",
        "/images/red.png"
        // Add more image paths as needed
      ]
    };
  },
  methods: {
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.imageSources.length) %
        this.imageSources.length;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imageSources.length;
    },
    prevNumber() {
      this.currentNumberIndex =
        (this.currentNumberIndex - 1 + this.imageSources.length) %
        this.imageSources.length;
    },
    nextNumber() {
      this.currentNumberIndex =
        (this.currentNumberIndex + 1) % this.imageSources.length;
    }
  }
};


</script>
<style scoped>

.custom-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateX(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.otp-bg {
  background: url(/assets/images/new.png);
  background-position: center center;
  background-size: cover;
}
.font-outline-2 {
    -webkit-text-stroke: 2px black;
  }
  .font-outline-4 {
    -webkit-text-stroke: 4px black;
  }
.banner-bg {
  background: linear-gradient(to left, #ffffff 40%, #ffffff 30%, #ffffff 100%);
}
@media only screen and (min-device-width: 320px) and (max-device-width: 768px) {
  /* Styles */
  .banner-bg {
    background: linear-gradient(
      to left,
      #ffffff 20%,

      #ffffff 0%,

      #ffffff 0%,

      #ffffff 0%
    );
  }
}
.transparent-text {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5); /* Transparent background */
    padding: 5px;
    border: 2px solid #000; /* Solid black border */
    font-size: 95px;
    font-weight: bold;
    color: transparent; /* Transparent text color */
    -webkit-background-clip: text; /* Apply background to only the text */
    background-clip: text; /* Apply background to only the text */
  }

</style>
