<template lang="pug">
    div.navbar
        vs-navbar(
            v-model="activeItem"
            class="nabarx"
        )
            vs-navbar-item(index="0")
                a(href="#/Home") Home
            vs-navbar-item(index="1")
                a(href="#/Gallery") Gallery
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
    protected activeItem = 0;
}
</script>
<style scoped lang="scss">
    .navbar /deep/{
        height: 44px;
        box-shadow: -1px 1px 10px 1px #242424;
        -webkit-box-shadow: -1px 1px 10px 1px #242424;
        -moz-box-shadow: -1px 1px 10px 1px #242424;
        -o-box-shadow: -1px 1px 10px 1px #242424;
        .vs-navbar{
            .vs-con-items {
                margin: 0 auto;
            }
        }
        .vs-navbar-content {
            border-radius: 0;
        }
    }
</style>
