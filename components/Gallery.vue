<template>
  <div id="gallery">
    <div class="container mx-auto">
      <div>
        <p class="text-3xl font-bold text-primary text-center">Gallery</p>
        <p class="text-primary text-center text-lg mt-7">
          View gallery of our products and make yourself satisfied with our
          creation.
        </p>
      </div>
      <div>
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-4">
          <div>
            <div class="mt-64 relative">
              <p class="absolute md:top-5 md:left-11 top-2 left-4 font-bold text-2xl text-primary">
                Scooter
              </p>
              <img src="/images/gallery1.png" alt="" class="w-full" />
            </div>
            <div class="mx-20  mt-28" >
              <div
                class="border-2 border-primary flex items-center justify-center rounded-lg bg-white group hover:bg-primary cursor-pointer duration-200 ease-in"
              >
                <button
                  class="py-5 text-primary md:text-xl text-md font-bold group-hover:text-white"
                >
                Battery Images
                </button>
              </div>
              <div
                class="border-2 border-primary flex items-center justify-center mt-4 rounded-lg bg-white group hover:bg-primary cursor-pointer duration-200 ease-in"
              >
                <button
                  class="py-5 text-primary md:text-xl text-md font-bold group-hover:text-white"
                >
                Spare Parts Images
                </button>
              </div>
              <div
                class="border-2 border-primary flex items-center justify-center mt-4 rounded-lg bg-white group hover:bg-primary cursor-pointer duration-200 ease-in"
              >
                <button
                  class="py-5 text-primary md:text-xl text-md font-bold group-hover:text-white"
                >
                Charging Cable Images
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="mt-32 flex items-center justify-center relative">
              <p class="absolute md:top-8 md:left-28 top-2 left-4 font-bold text-2xl text-primary">
                Built Quality
              </p>
              <img src="/images/gallery2.png" alt="" />
            </div>
            <div class="mt-24 flex items-center justify-center relative">
              <p class="absolute md:top-8 md:left-28 top-2 left-4 font-bold text-2xl text-primary">
                Parts
              </p>
              <img src="/images/gallery3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
