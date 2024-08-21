export default defineEventHandler((event) => {
  // 設定允許的來源
  setHeader(event, "Access-Control-Allow-Origin", "*");
  // 允許的 HTTP 方法
  setHeader(
    event,
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  // 允許的 headers
  setHeader(event, "Access-Control-Allow-Headers", "*");

  // 處理 OPTIONS 預檢請求
});
