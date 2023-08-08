<template>
  <div class="container mx-auto flex flex-wrap pb-40">
    <swiper
      :slidesPerView="swiperSlidesPerView"
      :spaceBetween="30"
      :navigation="true"
      :modules="modules"
      ref="swiperRef"
      class="mySwiper"
    >
      <swiper-slide
        ><div
          class="border-2 w-full py-10 px-2 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure.
          </p>
          <div class="flex items-center justify-center pt-10 space-x-3">
            <img
              src="/images/person2.png"
              alt=""
              class="w-12 h-12 rounded-full overflow-hidden"
            />
            <div>
              <p>Justus Menke</p>
              <p>CEO Eronaman</p>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div
          class="border-2 w-full py-10 px-2 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure.
          </p>
          <div class="flex items-center justify-center pt-10 space-x-3">
            <img
              src="/images/person2.png"
              alt=""
              class="w-12 h-12 rounded-full overflow-hidden"
            />
            <div>
              <p>Justus Menke</p>
              <p>CEO Eronaman</p>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div
          class="border-2 w-full py-10 px-2 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure.
          </p>
          <div class="flex items-center justify-center pt-10 space-x-3">
            <img
              src="/images/person2.png"
              alt=""
              class="w-12 h-12 rounded-full overflow-hidden"
            />
            <div>
              <p>Justus Menke</p>
              <p>CEO Eronaman</p>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div
          class="border-2 w-full py-10 px-2 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure.
          </p>
          <div class="flex items-center justify-center pt-10 space-x-3">
            <img
              src="/images/person2.png"
              alt=""
              class="w-12 h-12 rounded-full overflow-hidden"
            />
            <div>
              <p>Justus Menke</p>
              <p>CEO Eronaman</p>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div
          class="border-2 w-full py-10 px-2 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure.
          </p>
          <div class="flex items-center justify-center pt-10 space-x-3">
            <img
              src="/images/person2.png"
              alt=""
              class="w-12 h-12 rounded-full overflow-hidden"
            />
            <div>
              <p>Siam</p>
              <p>CEO Eronaman</p>
            </div>
          </div>
        </div></swiper-slide
      >
      <div class="flex justify-center items-center space-x-3 pb-20">
        <button
          @click="goToPrevSlide"
          class="border-2 border-primary flex items-center justify-center w-10 h-10 rounded-full stroke-[#42454A] hover:bg-primary hover:stroke-white"
        >
          <SvgTestimonialLeftArrow />
        </button>
        <button
          @click="goToNextSlide"
          class="border-2 border-primary flex items-center justify-center w-10 h-10 rounded-full stroke-[#42454A] hover:bg-primary hover:stroke-white"
        >
          <SvgTestimonialRightArrow />
        </button>
      </div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      swiperSlidesPerView: 3,
      swiperInstance: null,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  },
  mounted() {
    // this.initSwiper();
    this.setSlidesPerView();
    window.addEventListener("resize", this.setSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setSlidesPerView);
    this.destroySwiper();
  },
  methods: {
    initSwiper() {
      this.swiperInstance = new Swiper(this.$refs.swiperRef, {
        slidesPerView: this.swiperSlidesPerView,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },

    destroySwiper() {
      if (this.swiperInstance) {
        this.swiperInstance.destroy();
      }
    },
    setSlidesPerView() {
      // Set slidesPerView based on the screen width
      if (window.innerWidth <= 768) {
        this.swiperSlidesPerView = 1;
      } else {
        this.swiperSlidesPerView = 3;
      }

      // Update Swiper instance with new slidesPerView
      if (this.swiperInstance) {
        this.swiperInstance.params.slidesPerView = this.swiperSlidesPerView;
        this.swiperInstance.update();
      }
    },
    goToPrevSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    goToNextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
  },
};
</script>
<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

/* body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 48px;
  height: 48px;
  object-fit: cover;
}
.swiper-button-next {
  border: 2px solid red;
  border-radius: 100%;

  margin-top: 150px;
  margin-right: 400px;
}
.swiper-button-prev {
  /* display: none; */
  border: 40px;
  border-color: black;
  border-radius: 100%;

  /* position: absolute; */
  margin-top: 150px;
  margin-left: 400px;
}
.swiper-wrapper {
  position: relative;
}
</style>
