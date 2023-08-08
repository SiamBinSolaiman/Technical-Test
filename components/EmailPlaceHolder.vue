<template>
  <div class="container mx-auto">
    <div class="w-full md:flex justify-center items-center md:space-x-9  mb-32">
      <input
        class="outline-0 border-2 pl-2 py-7 font-bold rounded-lg lg:text-lg text-sm md:w-[400px] w-full bg-[#F5F5F5] md:mb-0 mb-8"
        v-model="email"
        type="email"
        placeholder="Enter your email"
      />
      <div class="">
        <button
          class="md:w-32 w-full md:py-7 py-4 h-auto rounded-lg text-center lg:text-lg text-sm flex items-center justify-center font-semibold  transition  text-white hover:text-primary hover:font-bold bg-primary hover:bg-transparent border-2 border-transparent hover:border-primary duration-200 ease-in"
        >
          Get Started
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
      inputEmail: "black",
    };
  },
  methods: {
    changeBg() {
      this.inputEmail = "white";
    },
    revertBack() {
      this.inputEmail = "black";
    },
  },
};
</script>
