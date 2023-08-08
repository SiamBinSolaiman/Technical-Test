<template>
  <div class="bg-[#FAFAFA]">
    <div class="container mx-auto">
      <p class="text-3xl font-bold text-primary text-center pt-20 pb-20">
        Testimonials
      </p>
      <div class="flex flex-wrap pb-40">
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
                  src="/images/person1.png"
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
                  <p>Serhiy Hipskyy</p>
                  <p>CEO Universal</p>
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
                  src="/images/person3.png"
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
                  src="/images/person1.png"
                  alt=""
                  class="w-12 h-12 rounded-full overflow-hidden"
                />
                <div>
                  <p>Serhiy Hipskyy</p>
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
          <!-- <div class="flex justify-center items-center space-x-3 pb-20">
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
          </div> -->
        </swiper>
      </div>
    </div>
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


.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
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

/* .swiper-slide img {
  display: block;
  width: 48px;
  height: 48px;
  object-fit: cover;
} */
.swiper-button-prev {
  border: 2px solid rgb(0, 0, 0);
  border-radius: 100%;
  padding: 30px;
margin: 100px;
  color: black;
  margin-top: 150px;
  margin-left: 500px;
}
.swiper-button-next {
  /* display: none; */
  border: 2px solid rgb(0, 0, 0);
  border-radius: 100%;
  padding: 30px;
  margin: 100px;
  color: black;
  /* position: absolute; */
  margin-top: 150px;
  margin-right: 500px;
}
.swiper-button-next:hover{
    background-color:rgb(0, 0, 0);
    color:white;
}
.swiper-button-prev:hover{
    background-color:rgb(0, 0, 0);
    color:white;
}
.swiper-wrapper {
  position: relative;
}
@media (max-width: 768px) {
  .swiper{
    padding-bottom: 0;

  }
  
  @media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: flex;
    position: static;
    margin: 50px;
    margin-left: 300px;
    
 
    margin-top: 800px;
  }
  .swiper-button-prev {
    margin-top: 10px;
  }
  .swiper-button-next {
    margin-top: 10px;
  }
}
}
</style>
