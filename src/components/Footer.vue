<template lang="pug">
    div.footer
        span © 2021 copyright. 一本
        div
            v-icon(name="facebook")
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
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
    .footer {
        color: #FFF;
        font-size: 12px;
    }
</style>
