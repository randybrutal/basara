<template lang="pug">
    .app-wrapper
        Navbar
        transition(name="fade")
            HeaderBar(v-if="routeName === 'Home'")
        transition(name="fade")
            router-view
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import HeaderBar from '@/components/HeaderBar.vue';

@Component({
    components: {
        Navbar,
        HeaderBar
        // Sidebar,
        // AppMain
    }
})
export default class Layout extends Vue {
    protected trans = false;

    protected routeName = '';

    protected created() {
        if (this.$route.name) {
            this.routeName = this.$route.name;
        }
    }

    @Watch('$route')
    protected routeChange(val: any) {
        this.routeName = val.name;
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
