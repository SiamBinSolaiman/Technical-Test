<template>
  <div>
    <NavBar />

    <!-- Header -->
    <div>
      <Header class="mt-44" />
    </div>
    <div>
      <ProductInformation class="mt-20" />
    </div>
    <div>
      <Gallery class="mt-20" />
    </div>
    <div>
      <Colors class="mt-20 mb-52" />
    </div>
    <div>
      <Testimonial class="mt-20" />
    </div>
    <div>
      <SubscribeToNewsletter class="mt-20" />
    </div>

    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
