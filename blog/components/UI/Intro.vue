<template>
    <section class="intro">
        <div class="container">
            <h2> {{ title }} </h2>
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.intro {
    width: 100%;
    // margin: 5px 0;
    // padding: 30px 0;
    text-align: center;
    color: white;
    background-color: #37f78d;
    h2 {
        font-size: 50px;
    }
}
</style>