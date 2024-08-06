<template>
    <div class="dfco fg px-5">
        <div class="dfco fg mContainer">
            <div class="noShrink">
                <div class="text-h5 pb-3">NUXT 3 架構及前後台交互串接實作</div>
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
                                    <div>NUXT 3路由及架構了解</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>app.vue、layouts、Page、components</li>
                                            <li>middleware</li>
                                            <li>生命週期：server side、client side</li>
                                            <li>細部拆解前端生命週期：useAsyncData、useFetch、OnMounted、onUnmounted</li>
                                            <li>路由相關：useRouter、useRoute</li>
                                            <li>頁面轉跳實作</li>
                                            <li>頁面及param、query夾帶實作</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>實作頁面及前端功能</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>vue框架：html、css、js概要</li>
                                            <li>基礎元件：ref、computed、(Methods)、watch</li>
                                            <li>實作前端計算機</li>
                                            <li>components互動：props、defineExpose、emit</li>
                                            <li>實作跨元件互動(計算值滿足 > 1000 跳獎勵)</li>
                                            <li>全域參數元件：pinia、store(state、action...)可順帶帶入物件導向class結構，常用get
                                                set概念(this、super...)</li>
                                            <li>跨元件互動以store實作</li>
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
                                    <div>前端登入</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>composables服務簡介</li>
                                            <li>fetch取資料(RestFulAPI、CRUD)</li>
                                            <li>登入資料store管理、cookie自動登入及管理(考量資安，至少不能存密碼)</li>
                                            <li>需登入權限頁面設置(非權限轉回登入middelware)</li>
                                            <li>登入登出全實作</li>
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
                                    <div>詞作三方登入</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>登入、取code、取token、refresh token</li>
                                            <li>以迪卡儂專案為主體完整介紹規劃</li>
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
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="noShrink pb-10"></div>
            <div class="noShrink">
                <div class="text-h5 pb-3">NUXT 架站實作</div>
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
                                    <div>環境設置/內網架設</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>Git repo、環境設置</li>
                                            <li>Nuxt build/ Nuxt start</li>
                                            <li>IP、port、TCP/IP、IPv4路由概念</li>
                                            <li>防火牆概念</li>
                                            <li>衍伸：cors、白名單...</li>
                                            <li>實作目標：內網API存取</li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    <div>Docker架站</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>WSL、Docker環境設置</li>
                                            <li>Docker build、Docker run;image、container</li>
                                            <li>內外port概念(虛擬路由、反向代理)</li>
                                            <li>雲端伺服器通識</li>
                                            <li>雲端VM SSH連線</li>
                                            <li>常用Linuxt command</li>
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
                                    <div>外網架站</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>Docker repo、Docker pull、Docker push</li>
                                            <li>架設雲端MySQL Server</li>
                                            <li>雲端路由架構設置</li>
                                            <li>雲端防火牆規則設置</li>
                                            <li>雲端MySQL連線</li>
                                            <li>NUXT API網站雲端架設</li>
                                            <li>實作目標：外網API存取</li>
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
                                    <div>Domain申請、SSL申請、反向代理</div>
                                    <div class="pl-5">
                                        <ul>
                                            <li>Domain概論、DNS設置</li>
                                            <li>SSL概論、CSR檔案產生、(選)本地openSSL產檔</li>
                                            <li>Nginx概論</li>
                                            <li>Nginx安裝(Docker安裝/本地安裝)</li>
                                            <li>Nginx config檔案設置</li>
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
                        </tbody>
                    </table>
                </div>
            </div>
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