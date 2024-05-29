<template>
    <div class="dfco fg px-5">
        <div class="dfco fg mContainer">
            <div class="noShrink pb-10"></div>
            <div class="noShrink">
                <div class="text-h5 pb-3">NUXT 3 Server side 團隊實作</div>
                <div class="text-title pb-3">2024 創準整合數位科技教育訓練</div>
                <div>
                    <div class="text-h5 pb-3 font-weight-bold">Syllabus</div>
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
                                    <div>課程規劃/環境設置 <button @click="pushTo('/trainingprogram/20240528')"><v-icon
                                                color="blue">mdi-link</v-icon></button></div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>Gitlab申請</li>
                                            <li>join team repo</li>
                                            <li>create personal branch</li>
                                            <li>MySQL setup</li>
                                            <li>Nuxt 3 project setup</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    2024/05/28
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>NUXT 3 API建置 (1)</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>MySQL 連接</li>
                                            <li>NUXT 3 框架</li>
                                            <li>RestFul API</li>
                                            <li>API開發基本單位 CRUDD</li>
                                            <li>實作 Create (GUID 時區)</li>
                                            <li>實作 Get Detail</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    <div>NUXT 3 API建置 (2)</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>實作 Update</li>
                                            <li>實作 Delete (與資料留存/資源回收桶)</li>
                                            <li>Change Log、Error Log</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    <div>NUXT 3 API建置 (3)</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>SQL 語法簡介</li>
                                            <li>實作 Read (Get List)</li>
                                            <li>數據總筆數</li>
                                            <li>數據分頁</li>
                                            <li>數據篩選</li>
                                            <li>數據排序</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    5
                                </td>
                                <td>
                                    <div>NUXT 3 API建置 (4)</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>帳戶管理 (數據傳輸加解密)</li>
                                            <li>登入驗證以及Token</li>
                                            <li>API 整合 Token驗證</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
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
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    <div>2024 創準整合數位科技教育訓練 課程共筆</div>
                                </td>
                                <td>
                                    <a class="atag"
                                        href="https://docs.google.com/document/d/1XoDpeQ7PctZcUOdCNdqRBhy4BbZbhj0Rxvqx4m2o1Sc/edit?usp=sharing"
                                        target="_blank">https://docs.google.com/document/d/1XoDpeQ7PctZcUOdCNdqRBhy4BbZbhj0Rxvqx4m2o1Sc/edit?usp=sharing</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    <div>2024 創準整合數位科技教育訓練 課程共筆</div>
                                </td>
                                <td>
                                    <div class="code">
                                        DB_HOST=220.132.127.152<br>
                                        DB_PORT=3307<br>
                                        DB_NAME=240529eztrainprogram_dev<br>
                                        DB_USER=240529eztrainprogram<br>
                                        DB_PASSWORD=240529eztrainprogram
                                    </div>
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
</style>