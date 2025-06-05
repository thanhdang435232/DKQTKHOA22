function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  PropertiesService.getScriptProperties().setProperty('lastMessage', data.message);
  return ContentService.createTextOutput("OK");
}

function doGet() {
  const msg = PropertiesService.getScriptProperties().getProperty('lastMessage') || "Chưa có tin nhắn";
  return ContentService.createTextOutput(msg);
}
