<template>
  <div class="fixed top-0 z-50 w-full bg-white">
    <!-- <div class=" "> -->
    <nav class="pt-7 border-b-2">
      <div class="container mx-auto mb-6">
        <div class="flex items-center justify-between">
          <!-- main-logo -->
          <div class="flex items-center">
            <div class="flex-shrink">
              <a  href="#products">
                <SvgLogo />
              </a>
            </div>
          </div>
          <!-- nav menu -->

          <div
            class="hidden lg:flex lg:items-center justify-center h-full space-x-12"
          >
            <div></div>
            <div class="h-full flex items-center relative">
              <div>
                <a href="#products"  >
                  <div   @click="handleActiveArrow1"
                    class="text-black flex items-center justify-center hover:-translate-y-1 duration-200 ease-in"
                  >
                    Products <SvgDropArrow class="pl-2" v-if="arrow1"/>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <a href="#gallery" >
                <div  @click="handleActiveArrow2"
                  class="text-black flex items-center justify-center hover:-translate-y-1 duration-200 ease-in"
                >
                  Gallery <SvgDropArrow class="pl-2"  v-if="arrow2" />
                </div>
              </a>
            </div>
            <!-- /// Create new event /// -->
            <div>
              <a href="#contact" >
                <div  @click="handleActiveArrow3"
                  class="text-black flex items-center justify-center hover:-translate-y-1 duration-200 ease-in"
                >
                  Contact <SvgDropArrow class="pl-2"  v-if="arrow3" />
                </div>
              </a>
            </div>

            <!-- </div> -->
          </div>
          <div class="hidden lg:flex space-x-12">
            <button
              class="w-24 text-black rounded-lg hover:text-white bg-white hover:bg-primary hover:drop-shadow-md duration-200 ease-in"
            >
              <p class="py-2">Log In</p>
            </button>
            <button
              class="w-24 text-black rounded-lg hover:text-white bg-white hover:bg-primary hover:drop-shadow-md duration-200 ease-in"
            >
              <p class="py-2">Sign Up</p>
            </button>
          </div>
          <div
            class="mr-2 md:mr-3 flex flex-row items-center space-x-4 lg:hidden"
          >
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="ml-2 items-center justify-center rounded-md text-white bg-primary hover:text-primary focus:outline-none focus:bg-black focus:text-white"
            >
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="shadow-lg" :class="[isOpen ? '' : 'hidden', 'xl:hidden']">
        <div class="container px-2 pt-2 pb-3 sm:px-3">
          <a href="#products"  class="block px-3 py-2 rounded-md text-base"
            >Products</a
          >

          <a
          href="#gallery" 
            class="mt-1 block px-3 py-2 rounded-md text-base"
            >Gallery</a
          >

          <a
          href="#contact" 
            class="mt-1 block px-3 py-2 rounded-md text-base"
            >Contact
          </a>

          <button
            class=" text-black rounded-lg mt-1 block px-3 hover:text-white bg-white hover:bg-primary hover:drop-shadow-md duration-200 ease-in"
          >
            <p class="py-2">Log In</p>
          </button>
          <button
            class=" text-black rounded-lg mt-1 block px-3 hover:text-white bg-white hover:bg-primary hover:drop-shadow-md duration-200 ease-in"
          >
            <p class="py-2">Sign Up</p>
          </button>
        </div>
      </div>
    </nav>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const arrow1= ref(false);
const arrow2= ref(false);
const arrow3= ref(false);
const isOpen = ref(false);
const handleActiveArrow1 = () => {
  arrow1.value = ! arrow1.value;
  arrow2.value = false;
  arrow3.value = false;
};
const handleActiveArrow2 = () => {
  arrow1.value = false;
  arrow3.value = false;
  arrow2.value =  !arrow2.value;
};
const handleActiveArrow3 = () => {
  arrow3.value = ! arrow3.value;
  arrow1.value = false;
  arrow2.value = false;
};

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const updateScroll = () => {
  scrollPosition.value = window.scrollY;
};

const handleStartProject = () => {
  router.push("/contact");
};
</script>

<!-- <style scoped>
.change_color {
  background-color: white;
}

.active-link-style {
  color: black;
}

/* .nav-link {
      /* background-color: #f99b06; }*/
</style> -->
