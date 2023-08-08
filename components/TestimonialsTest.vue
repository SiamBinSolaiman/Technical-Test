<template>
  <div class="bg-[#FAFAFA]">
    <div class="container mx-auto">
      <p class="text-3xl font-bold text-primary text-center pt-20">
        Testimonials
      </p>

      <div class="grid lg:grid-cols-3 grid-cols-1 md:gap-x-9 pt-20 md:px-20 py-16">
        <div
          class="border-2 w-full px-2 py-10 border-primary hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10 ">
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
              <p>CEO Universal</p>
            </div>
          </div>
        </div>
        <div
          class="border-2 w-full py-10 px-2 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
        >
          <SvgStars class="flex items-center justify-center" />
          <p class="flex items-center justify-center text-center pt-10 ">
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
        </div>
        <div
          class="border-2 px-2 w-full py-10 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
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
              <p>Britain Eriksen</p>
              <p>CEO Universal</p>
            </div>
          </div>
        </div>
        <div
          class="border-2 px-2 w-full py-10 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
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
              <p>Britain Eriksen</p>
              <p>CEO Universal</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center space-x-3 pb-20">
        <button
          class="border-2 border-primary flex items-center justify-center w-10 h-10 rounded-full stroke-[#42454A] hover:bg-primary hover:stroke-white"
        >
          <SvgTestimonialLeftArrow />
        </button>
        <button
          class="border-2 border-primary flex items-center justify-center w-10 h-10 rounded-full stroke-[#42454A] hover:bg-primary hover:stroke-white"
        >
          <SvgTestimonialRightArrow />
        </button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    colorChange() {
     
    },
  },
};
</script>