import request from '@/api/request'; // 引入封裝好的axios

const param = {
    user_id: '192557662@N05',
    api_key: '0118739b4b2355a8271ad2c3b6655cbb',
    format: 'json',
    nojsoncallback: 1
};
// 取相簿
export const getAlbum = (paramCell: any) => request({
    method: 'get',
    params: {
        method: 'flickr.photosets.getList',
        ...param,
        ...paramCell
    }
});

// 依相簿取照片
export const getAlbumPhotoList = (paramCell: any) => request({
    method: 'get',
    params: {
        method: 'flickr.photosets.getPhotos',
        ...param,
        ...paramCell
    }
});

// 取全部照片
export const getAllPhoto = (paramCell: any) => request({
    method: 'get',
    params: {
        method: 'flickr.photos.search',
        ...param,
        ...paramCell
    }
});

// 取照片資訊
export const getAllContext = (paramCell: any) => request({
    method: 'get',
    params: {
        method: 'flickr.photos.getAllContexts',
        ...param,
        ...paramCell
    }
});
