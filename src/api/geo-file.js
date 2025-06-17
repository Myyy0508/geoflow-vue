import _axios from "@/utils/_axios";

export function list(params) {
    return _axios({
        url: '/geo-file/list',
        method: 'get',
        params: {
            fileName: params.fileName,
            fileType: params.fileType
        }
    })
}

export function page(params) {
    return _axios({
        url: '/geo-file/page',
        method: 'get',
        params: {
            pageNum: params.pageNum || 1,
            pageSize: params.pageSize || 10,
            fileName: params.fileName,
            fileType: params.fileType
        }
    })
}

export function previewTiff(id) {
    return _axios.get(`/geo-file/preview/tiff/${id}`, {
        responseType: 'blob' // 非常重要，告诉 axios 返回二进制流
    })
}

export function deleteGeoFile(id){
    return _axios.delete("/geo-file/delete", {
        params: {
            id
        }
    })
}

export function getMetadata(id){
    return _axios.get(`/geo-file/metadata/${id}`)
}

export function getHistogram(id, band, binSize)
{
    return _axios.get('/geo-file/compute-histogram', {
        params: {
            id,
            band,
            binSize
        }
    })
}

export function isSupport(fileName){
    return _axios.get('/geo-file/is-support', {
        params: {
            fileName
        }
    })
}

export function downloadGeoFile(fileName) {
    return _axios.get('/geo-file/download', {
        params: { fileName },
        responseType: 'blob' 
    })
}
