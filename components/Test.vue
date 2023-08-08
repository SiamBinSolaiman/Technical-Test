<template>
    <div class="bg-[#FAFAFA]">
      <div class="container mx-auto">
        <p class="text-3xl font-bold text-primary text-center pt-20">Testimonials</p>
  
        <div class="slider-container">
          <div class="slider-grid" :style="`grid-template-columns: repeat(${visibleItems}, 1fr);`">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="border-2 w-full px-2 py-10 hover:border-white hover:bg-white hover:drop-shadow-xl duration-200 ease-out mb-9"
              v-show="index >= currentSlide && index < currentSlide + visibleItems"
            >
              <SvgStars class="flex items-center justify-center" />
              <p class="flex items-center justify-center text-center pt-10">
                {{ testimonial.text }}
              </p>
              <div class="flex items-center justify-center pt-10 space-x-3">
                <img
                  :src="testimonial.imageSrc"
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full overflow-hidden"
                />
                <div>
                  <p>{{ testimonial.name }}</p>
                  <p>{{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="flex justify-center items-center space-x-3 pb-20">
          <button
            class="border-2 border-primary flex items-center justify-center w-10 h-10 rounded-full stroke-[#42454A] hover:bg-primary hover:stroke-white"
            @click="prevSlide"
          >
            <SvgTestimonialLeftArrow />
          </button>
          <button
            class="border-2 border-primary flex items-center justify-center w-10 h-10 rounded-full stroke-[#42454A] hover:bg-primary hover:stroke-white"
            @click="nextSlide"
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
        testimonials: [
          {
            text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
            imageSrc: "/images/person1.png",
            name: "Serhiy Hipskyy 100",
            company: "CEO Universal",
          },
          {
            text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
            imageSrc: "/images/person1.png",
            name: "Justus Menke",
            company: "CEO Eronaman",
          },
          {
            text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
            imageSrc: "/images/person2.png",
            name: "Britain Eriksen",
            company: "CEO Universal",
          },
          {
            text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
            imageSrc: "/images/person3.png",
            name: "Siam ",
            company: "CEO ",
          },
          {
            text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
            imageSrc: "/images/person1.png",
            name: "Solaiman",
            company: "CMO",
          },

          // Add more testimonials here
        ],
        currentSlide: 0,
        visibleItems: 3,
      };
    },
    methods: {
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide -= 1;
        }
      },
      nextSlide() {
        if (this.currentSlide + this.visibleItems < this.testimonials.length) {
          this.currentSlide += 1;
        }
      },
    },
  };
  </script>
  
  <style>
/* Slider grid styles */
.slider-container {
  overflow: hidden;
}

.slider-grid {
  display: flex;
  /* flex-wrap: wrap; */
  transition: transform 0.9s ease-in-out;
  gap: 20px;
}

/* Individual testimonial styles */
.border-2 {
  border: 2px solid ; /* You can customize the border style */
}

/* Button styles */
button.border-primary {
  border-color: #42454A; /* Customize the button border color */
}

/* Additional styles for responsiveness */
@media (max-width: 768px) {
  .slider-grid {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: transform 2s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%); /* Change the direction if needed */
}
</style>