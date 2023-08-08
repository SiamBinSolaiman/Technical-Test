<template>
  <div class="h-auto">
    <div class="">
      <p class="text-3xl font-bold text-primary text-center">Colors</p>
      <p class="text-primary text-center text-lg mt-7">
        Checkout our products colors.
      </p>

      <div
        class="md:relative mt-20 "
        :class="
          activeImage == '0'
            ? ' bg-[#3Bc46F]'
            : activeImage == '1'
            ? 'bg-[#37A7C1]'
            : activeImage == '2'
            ? 'bg-[#D52422]'
            : activeImage == '3'
            ? 'bg-[#171717]'
            : ''
        "
      >
       
        <img
          v-if="activeImage === 0"
          src="/images/green.png"
          alt=""
          class="w-full"
        />
        <img
          v-if="activeImage === 1"
          src="/images/blue.png"
          alt=""
          class="w-full"
        />
        <img
          v-if="activeImage === 2"
          src="/images/red.png"
          alt=""
          class="w-full"
        />
        <img
          v-if="activeImage === 3"
          src="/images/black.png"
          alt=""
          class="w-full"
        />

        <div
          class="grid md:grid-cols-4 grid-cols-2 md:gap-6 md:absolute xl:-bottom-52 lg:-bottom-40 md:-bottom-28  md:mt-0 mt-16"
        >
          <div
            @click="handleActiveImage(0)"
            class="relative h-auto hover:-translate-y-2 duration-200 ease-in "
          >
            <img src="/images/green.png" alt="" class="w-full h-full cursor-pointer" />
            <p
              class="xl:text-[60px] lg:text-[50px]  text-4xl absolute xl:bottom-[90px] xl:right-16 lg:bottom-[65px] lg:right-12 bottom-[50px] md:right-9 md:bottom-[40px] right-11 font-bold text-white text-opacity-40"
            >
              01
            </p>
          </div>
          <div
            @click="handleActiveImage(1)"
            class="relative h-auto hover:-translate-y-2 duration-200 ease-in "
          >
            <img src="/images/blue.png" alt="" class="cursor-pointer w-full h-full" />
            <p
              class="xl:text-[60px] lg:text-[50px]  text-4xl absolute xl:bottom-[90px] xl:right-16 lg:bottom-[65px] lg:right-12 bottom-[50px] md:right-9 md:bottom-[40px] right-11 font-bold text-white text-opacity-40"
            >
              01
            </p>
          </div>
          <div
            @click="handleActiveImage(2)"
            class="relative h-auto hover:-translate-y-2 duration-200 ease-in "
          >
            <img src="/images/red.png" alt="" class="cursor-pointer w-full h-full" />
            <p
              class="xl:text-[60px] lg:text-[50px]  text-4xl absolute xl:bottom-[90px] xl:right-16 lg:bottom-[65px] lg:right-12 bottom-[50px] md:right-9 md:bottom-[40px] right-11 font-bold text-white text-opacity-40"
            >
              01
            </p>
          </div>
          <div
            @click="handleActiveImage(3)"
            class="relative h-auto hover:-translate-y-2 duration-200 ease-in"
          >
            <img src="/images/black.png" alt="" class="cursor-pointer w-full h-full" />
            <p
              class="xl:text-[60px] lg:text-[50px]  text-4xl absolute xl:bottom-[90px] xl:right-14 lg:bottom-[65px] lg:right-12 bottom-[50px] md:right-9 md:bottom-[40px] right-11 font-bold text-white text-opacity-40"
            >
              01
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  data() {
    return {
      activeImage: 0,
    };
  },
  methods: {
    handleActiveImage(index) {
      this.activeImage = index;
    },
  },
};
</script>
