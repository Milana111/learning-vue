<template>
    <section class="not-found">
        <div class="container">
            <div class="not-found_wrapper">
                <h1 class="title"> Error 404: page not found </h1>
                <nuxt-link to="/">Back to the Home page? </nuxt-link>
            </div>
        </div>
    </section>

</template>

<style lang="scss">
.not-found_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
}

</style>