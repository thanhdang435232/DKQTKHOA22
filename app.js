// Hàm tải tin nhắn mới nhất từ server
async function fetchMessage() {
  try {
    const response = await fetch("https://script.google.com/macros/s/ABC123/exec");  // hoặc http://100.x.x.x:8000/get
    const text = await response.text(); // vì GAS trả về text, không phải JSON
    document.getElementById("message").innerText = text;
  } catch (error) {
    console.error("Lỗi khi tải tin nhắn:", error);
  }
}

// Tải mỗi 2 giây
setInterval(fetchMessage, 2000);

// Gọi lần đầu tiên ngay lập tức
fetchMessage();
