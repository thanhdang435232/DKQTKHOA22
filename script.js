async function fetchData() {
  try {
    const response = await fetch("https://dkqt.onrender.com/api/get-data"); 
    const data = await response.json();

    const list = document.getElementById("data-list");
    list.innerHTML = ""; // Xóa dữ liệu cũ

    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.sensor_id}: ${item.value} | ${new Date(item.timestamp).toLocaleString()}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Lỗi lấy dữ liệu:", error);
  }
}

fetchData();
setInterval(fetchData, 5000); // Cập nhật mỗi 5 giây
