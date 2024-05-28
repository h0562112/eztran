import { defineStore } from 'pinia'

export const useuiStore = defineStore('ui', {
    state: () => ({
        scrollTop: 0,
        windowW: null,
        fix100vh: false,
        // 畫面一出來就需要有的圖 READ ONLY
        preloadImgList: [
        ],
        //
        unLoaded: true,
        fullheight: '100vh',
        //
        appBarH: 0
    }),
    actions: {
        // @ts-expect-error
        setscrollTop(value) {
            this.scrollTop = value;
        },
        // @ts-expect-error
        setwindowW(value) {
            this.windowW = value;
        },
        // @ts-expect-error
        setfix100vh(value) {
            this.fix100vh = value;
        },
        // @ts-expect-error
        setpreloadImgList(value) {
            this.preloadImgList = value;
        },
        // @ts-expect-error
        setunLoaded(value) {
            this.unLoaded = value;
        },
        // @ts-expect-error
        setfullheight(value) {
            this.fullheight = value;
        },
        // @ts-expect-error
        setappBarH(value) {
            this.appBarH = value;
        },
    },
})