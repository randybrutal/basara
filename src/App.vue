<template lang="pug">
    div#app
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    protected created() {
        this.showBtn();
    }

    protected isIos() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    }

    protected showBtn() {
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && ((window as any).navigator.standalone);

        // Checks if should display install popup notification:
        if (this.isIos() && !isInStandaloneMode()) {
            this.showIosInstall();
        }
    }

    protected showIosInstall() {
        const iosPrompt: any = document.querySelector('.ios-prompt');
        iosPrompt.style.display = 'block';
        iosPrompt.addEventListener('click', () => {
            iosPrompt.style.display = 'none';
        });
    }
}
</script>

<style lang="scss">
@import '~@/style/index';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
