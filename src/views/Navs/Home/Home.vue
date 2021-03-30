<template lang="pug">
    div.home
        CascadeGallery(
            pageWidth="80%"
            :barNumber="4"
            :imgData="imgData"
        )
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { getAllPhoto } from '@/api';
import CascadeGallery from '@/components/CascadeGallery.vue';

@Component({
    components: {
        CascadeGallery
    }
})
export default class Home extends Vue {
    protected allData = {};
    protected imgData: any = [];

    protected created() {
        this.getAllPhotoGo();
    }

    protected async getAllPhotoGo() {
        const { data } = await getAllPhoto({
            page: 1,
            extras: 'o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o, owner_name, date_taken, views',
            in_gallery: 1,
            format: 'json',
            nojsoncallback: 1,
            per_page: 30
        });
        if (data) {
            this.allData = data;
            data.photos.photo.forEach((item: any, index: any) => {
                this.imgData.push({
                    id: index,
                    src: item.url_o
                });
            });
        }
    }
}
</script>
