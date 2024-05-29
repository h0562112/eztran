<template>
    <div class="dfco fg px-5">
        <div class="dfco fg mContainer">
            <div class="noShrink pb-10"></div>
            <div class="noShrink">
                <div class="text-h5 pb-3 font-weight-bold">
                    <button @click="pushTo('/trainingprogram')"><v-icon color="blue">mdi-chevron-left</v-icon></button>
                    課程規劃/環境設置
                </div>
                <div class="text-h5 pb-3">NUXT 3 Server side 團隊實作</div>
                <div class="text-title pb-3">2024 創準整合數位科技教育訓練</div>
                <div class="border-b"></div>
                <div>
                    <div class="text-title pb-3">資源列表</div>
                    <table class="fill-available thisTable text-subtitle-2">
                        <thead>
                            <tr>
                                <th>項次</th>
                                <th>標題</th>
                                <th>備註</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div>Gitlab</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://about.gitlab.com/"
                                        target="_blank">https://about.gitlab.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>Git</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    <div>IDE - VSCode</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://code.visualstudio.com/"
                                        target="_blank">https://code.visualstudio.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    <div>postman</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://www.postman.com/"
                                        target="_blank">https://www.postman.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    <div>Node.js</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://nodejs.org/en"
                                        target="_blank">https://nodejs.org/en</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
                                </td>
                                <td>
                                    <div>Nuxt3</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://nuxt.com/" target="_blank">https://nuxt.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    7
                                </td>
                                <td>
                                    <div>MySQL (optional)</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://www.mysql.com/"
                                        target="_blank">https://www.mysql.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    8
                                </td>
                                <td>
                                    <div>SSDT</div>
                                </td>
                                <td>

                                    <a class="atag" href="https://www.heidisql.com/" target="_blank">heidisql -
                                        https://www.heidisql.com/</a><br>

                                    <a class="atag" href="https://www.mysql.com/products/workbench/"
                                        target="_blank">MySQL Workbench -
                                        https://www.mysql.com/products/workbench/</a><br>

                                    <a class="atag" href="https://www.navicat.com/cht/products/" target="_blank">Navicat
                                        -
                                        https://www.navicat.com/cht/products/</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="border-b"></div>
                <div>
                    <div class="text-title pb-3">專案資源</div>
                    <table class="fill-available thisTable text-subtitle-2">
                        <thead>
                            <tr>
                                <th>項次</th>
                                <th>標題</th>
                                <th>備註</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div>Git repo</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://gitlab.com/Estab-Zenith/240528_eztrainprogram.git"
                                        target="_blank">https://gitlab.com/Estab-Zenith/240528_eztrainprogram.git</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>Test Site</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://chen4.btagers.com/"
                                        target="_blank">https://chen4.btagers.com/</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div class="text-title pb-3">啟動專案</div>
                    <table class="fill-available thisTable text-subtitle-2">
                        <thead>
                            <tr>
                                <th>項次</th>
                                <th>標題</th>
                                <th>備註</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div>Git repo</div>
                                </td>
                                <td>
                                    <div class="code">
                                        git clone { YOUTR REPO } <br>
                                        git commit -m { MESSAGE}<br>
                                        git branch -b { NEW BRACH }<br>
                                        git checkout { NEW BRACH }<br>
                                        git fetch<br>
                                        git pull<br>
                                        git push
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>Nuxt setup</div>
                                </td>
                                <td>
                                    <div class="code">
                                        yarn | npm install <br>
                                        npm run dev <br>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div class="text-title pb-3">疑難排解</div>
                    <table class="fill-available thisTable text-subtitle-2">
                        <thead>
                            <tr>
                                <th>項次</th>
                                <th>標題</th>
                                <th>備註</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    <div>Gitlab SSH issue</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://sinyilin.github.io/git/20191024/1014042378/"
                                        target="_blank">https://sinyilin.github.io/git/20191024/1014042378/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>NUXT 3 相容性啟動問題</div>
                                </td>
                                <td>
                                    <div>
                                        yarn<br>
                                        <a class="atag" href="https://yarnpkg.com/"
                                            target="_blank">https://yarnpkg.com/</a>
                                    </div>
                                    <div>
                                        nvm<br>
                                        <a class="atag" href="https://www.casper.tw/development/2022/01/10/install-nvm/"
                                            target="_blank">https://www.casper.tw/development/2022/01/10/install-nvm/</a>
                                    </div>
                                    <div>
                                        rimraf (optional)<br>
                                        <a class="atag" href="https://www.npmjs.com/package/rimraf/"
                                            target="_blank">https://www.npmjs.com/package/rimraf/</a>
                                    </div>
                                </td>
                                <td>
                                    <code></code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="noShrink pb-10"></div>
        </div>
    </div>
</template>
<script setup lang="js">
onBeforeMount(() => {
    // const router = useRouter();
    // router.push('/trainingprogram');
})
//page
definePageMeta({
    layout: 'default'
})
//
const pushTo = (path) => {
    const router = useRouter();
    router.push(path);
}
</script>
<style lang="scss" scoped>
.thisTable {
    border-collapse: collapse;

    tr {
        td {
            border-bottom: 1px solid #000;
            padding: 2px 4px;
        }

        th {
            border-bottom: 2px solid #000;
            font-weight: bold;
            text-align: left;
        }
    }
}

.atag {
    color: blue !important;
    text-decoration: underline !important;
}
</style>