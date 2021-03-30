<template lang="pug">
    .app-wrapper
        Navbar
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({
    components: {
        Navbar
        // Sidebar,
        // AppMain
    }
})
export default class Layout extends Vue {

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
}

.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 2001;
}
</style>
