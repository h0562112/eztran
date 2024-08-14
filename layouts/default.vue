<template>
  <v-app sytle="width:100vw" v-resize="onresize" v-scroll="onScroll">
  default layout
    <div class="dfco" :style="`min-height:${fullheight};${fix100vh ? `height:${fullheight}` : ''}`">

      <slot></slot>
    </div>
    <!-- LOAD COVER -->
    <div v-if="unLoaded" class="bg-white loadCover" :style="`height:${fullheight}`">
      <div class="ff dfcc">
        <div>
          <div class="dfcc pb-3">
            <!-- <v-avatar rounded="0">
              <v-img src="~/assets/img/LOGO.png"></v-img>
            </v-avatar> -->
          </div>
          <div class="dfcc">
            <div style="width:80px">
              <v-progress-linear indeterminate color="primary"></v-progress-linear>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup lang="js">
import { nextTick } from "vue"
import _ from "lodash";
import { useuiStore } from '~/store/ui'
const ui = useuiStore();
const { fullheight, fix100vh, windowW, scrollTop, preloadImgList, unLoaded } = storeToRefs(ui);
//
onMounted(async () => {
  let func = async () => {
    await preloadImg();
    await checkWindowsW();
    await getScrollTop();
    await getfullheight();
    await new Promise(res => {
      setTimeout(() => {
        res()
      }, 300);
    })
  };
  unLoaded.value = true;
  await func();
  unLoaded.value = false;
  //
})
//
const onresize = () => {
  checkWindowsW();
  getfullheight();
}
const onScroll = () => {
  getScrollTop();
}
//
const preloadImg = async () => {
  let taskList = [];
  _.forEach(preloadImgList.value, (src) => {
    taskList.push(
      new Promise((res) => {
        var img = new Image();
        img.src = src;
        img.onload = () => {
          res();
        };
      })
    );
  });
  taskList.push(
    new Promise((res) => {
      setTimeout(() => {
        res();
      }, 300);
    })
  );
  //
  let loadBreak = false;
  await new Promise((res) => {
    {
      Promise.all(taskList).then(() => {
        if (loadBreak) return;
        res();
        return loadBreak = true;
      });
    }
    {
      setTimeout(() => {
        if (loadBreak) return;
        res();
        return loadBreak = true;
      }, 3000);
    }
  });
}
const checkWindowsW = async () => {
  if (!window) return;
  windowW.value = window.innerWidth;
  fullheight.value = `${window.innerHeight}px`;
  await nextTick();
}
const getfullheight = async () => {
  await nextTick();
  //
  if (!window) return;
  if (!window.innerHeight) return;
  fullheight.value = `${window.innerHeight}px`;
}
const getScrollTop = async () => {
  if (!window) {
    return;
  }
  if (!document) {
    return;
  }
  let scrollAll = document.documentElement.scrollHeight || document.body.scrollHeight;
  let clientH = document.documentElement.clientHeight;
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  let _scrollTop = currentScroll;
  if (_scrollTop < 0) _scrollTop = 0;
  scrollTop.value = _scrollTop;
  await nextTick();
}
</script>

<style lang="scss" scoped>
.loadCover {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 204;
}
</style>