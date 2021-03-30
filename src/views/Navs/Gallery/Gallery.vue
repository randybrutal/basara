<template lang="pug">
    div.about
        vs-card(
            type="2"
            v-for="item in rawData.photoset"
            :key="item.primary"
        )
            template(#title)
                h3 {{ item.title._content }}
            template(#img)
                img(:src="item.primary_photo_extras.url_m" alt="")
            template(#text)
                p {{ item.description._content }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAlbum } from '@/api';

@Component
export default class Gallery extends Vue {
    protected rawData = {};

    protected created() {
        this.getAlbumGo();
    }

    protected async getAlbumGo() {
        const { data } = await getAlbum({
            user_id: '192557662@N05',
            primary_photo_extras: 'owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_m, url_o'
        });
        if (data) {
            this.rawData = data.photosets;
        }
    }
}
</script>
<style scoped lang="scss">
    .about /deep/{
        width: 100%;
        height: 100%;
        overflow: auto;
        .img-wrap {
            width: 100%;
        }
        .vs-image {
            width: 20%;
            .imag-blur {
                left: 0;
            }
        }
    }
</style>
