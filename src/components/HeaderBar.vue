<template lang="pug">
    div.headerbar
        video.video-style(
            autoplay
            muted
            loop
        )
            <source src="https://live.staticflickr.com/video/51085366482/e41c671299/1080p.mp4?s=eyJpIjo1MTA4NTM2NjQ4MiwiZSI6MTYxNzI0NzE1MCwicyI6IjJmY2RlOWUxODQ1ZjI4ZjkwNmQwNzExYThmY2QyNmU0NDAyYTlmMTYiLCJ2IjoxfQ" type="video/mp4">
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class HeaderBar extends Vue {
    protected active = 'Home';

    protected created() {
        this.active = this.$route.meta.upStair;
    }

    @Watch('$route')
    protected routeChange(val: any) {
        this.active = val.meta.upStair;
    }
}
</script>
<style scoped lang="scss">
    .headerbar /deep/{
        width: 100%;
        // max-height: 675px;
        // height: 200px;
        // overflow: hidden;
        .video-style {
            width: 100%;
            height: 100%;
        }
    }
</style>
