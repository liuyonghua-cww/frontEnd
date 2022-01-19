<template>
    <div id="app">
        <button @click="click">下载</button>
        <img id="downImg" src="" style="display: none;"/>
    </div>
</template>

<script>
import { service, get } from './request1/request';
import axios from "axios";
import JSZip from 'jszip';
import FileSaver from 'file-saver';

const download = require('downloadjs');
window.download111 = download;
export default {
    name: '',
    data() {
        return {
            service,
            get,
        };
    },
    methods: {
        // 581
        // https://www.makeapie.com/chart/get/xG3rZAFEqu
        async click() {
            for (let i = 200; i < 250; i++) {
                await this.begin(i);
            }
        },
        async begin(i) {
            const res = await this.service({
                url: `chart/list?builtinTags%5B%5D=category-work&sortBy=rank&pageSize=32&pageNumber=${ i }&author=all`,
                method: 'get',
            });
            console.log('page:', i);
            await this.beginDownload(res.data.data.charts);

        },

        async beginDownload(data) {

            const res1 = await Promise.all(data.map(async item => {
                return this.service({
                    url: `chart/get/${ item.cid }`,
                    method: 'get',
                });
            }));
            const zip = new JSZip();
            const imageArr = [];
            const imageNameArr = [];
            for (const res of res1) {
                await zip.file(`${ res.data.data.cid }.txt`, res.data.data.code, { binary: false });
                delete res.data.data.code;
                await zip.file(`${ res.data.data.cid }.json`, JSON.stringify(res.data.data, '', 4), { binary: false });

                imageArr.push(res.data.data.thumbnailURL.replace('https://www.makeapie.com/', ''));
                imageNameArr.push(res.data.data.cid);
            }
            const imageDataArr = await Promise.all(imageArr.map(item => {
                return axios.get(item, { responseType: 'blob' }).catch(e=> {
                    return e
                })
            }))

            for (let i = 0; i < imageDataArr.length; i++) {
                const item = imageDataArr[i];
                // 当前图片不存在 不进行保存
                if (!item.data) {
                    continue;
                }
                const imageBase64 = await this.webImgToBase64(item.data);
                const img_arr = imageBase64.split(',');
                await zip.file(`${ imageNameArr[i] }.png`, img_arr[1], {base64: true}); // 根据base64数据在压缩包中生成jpg数据
            }

            await zip.generateAsync({ type: 'blob' }).then((zipData) => {
                FileSaver.saveAs(zipData, `${new Date().toLocaleString()}`);
            });


        },

        async webImgToBase64(blob) {
            const a = new FileReader();
            return await new Promise(resolve => {
                a.onload = (e) => {
                    resolve(e.target.result)
                }
                a.readAsDataURL(blob);
            })


        }

    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
