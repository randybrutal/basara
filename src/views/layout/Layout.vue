<template lang="pug">
    .app-wrapper
        Navbar
        transition(name="fade")
            router-view
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
    components: {
        Navbar
        // Sidebar,
        // AppMain
    }
})
export default class Layout extends Vue {
    protected trans = false;
    @Watch('$route')
    protected routeChange() {
        this.trans = !this.trans;
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    min-width: 1100px;
    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
    .fade-enter {
        opacity: 0;
        transform: translateX(-10px);
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s;
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateX(-100px);
    }
}
</style>
