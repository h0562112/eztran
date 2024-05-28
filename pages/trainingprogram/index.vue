<template>
    <div class="dfco fg px-5">
        <div class="dfco fg mContainer">
            <div class="noShrink pb-10"></div>
            <div class="noShrink">
                <div class="text-h5 pb-3 font-weight-bold">Syllabus</div>
                <div class="text-h5 pb-3">NUXT 3 Server side 團隊實作</div>
                <div class="text-title pb-3">2024 創準整合數位科技教育訓練</div>
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