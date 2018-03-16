<template>
    <nav></nav>
    <div class="main-container">
        <router-view></router-view>
    </div>
    <footer></footer>
</template>

<script>
    import footer from '~/view/layout/footer.vue';
    import nav from '~/view/layout/nav.vue';

    export default {
        name: "app",
        components: {
            footer,nav
        },
    }
</script>

<style scoped>

</style>