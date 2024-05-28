<template>
    <div class="dfco fg px-5">
        <div class="dfco fg mContainer">
            <div class="noShrink pb-10"></div>
            <div class="noShrink">
                <div class="text-h5 pb-3 font-weight-bold">
                    <button @click="pushTo('/trainingprogram')"><v-icon color="blue">mdi-chevron-left</v-icon></button>
                    Syllabus
                </div>
                <div class="text-h5 pb-3">NUXT 3 Server side 團隊實作</div>
                <div class="text-title pb-3">2024 創準整合數位科技教育訓練</div>
                <div class="border-b"></div>
                <div>
                    <table class="fill-available thisTable text-subtitle-2">
                        <thead>
                            <tr>
                                <th>項次</th>
                                <th>主題</th>
                                <th>日期</th>
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
                                    <a class="atag" href="https://www.mysql.com/"
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
                                    <div>Nuxt3</div>
                                </td>
                                <td>
                                    <a class="atag" href="https://nuxt.com/" target="_blank">https://nuxt.com/</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    6
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
                                    7
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
                    <table class="fill-available thisTable text-subtitle-2">
                        <thead>
                            <tr>
                                <th>項次</th>
                                <th>主題</th>
                                <th>日期</th>
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
                                    <a class="atag" href="https://www.mysql.com/"
                                        target="_blank">https://about.gitlab.com/</a>
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