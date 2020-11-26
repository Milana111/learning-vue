<template>
  <div class="wrapper-content wrapper-content--fixed">
  <section class="about">
      <div class="container">
          <h1 class="title">About my blog:</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <!-- <client-only> замена деприкейтед <no-ssr>-->
          <Intro title="Lorem Ipsum dolor sit amet!" />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <!-- </client-only> -->
          <img src="@/assets/img/img.jpeg">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  </section>
  </div>
</template>




<style lang="scss">
.about {
    text-align: center;
    p {
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

</style>