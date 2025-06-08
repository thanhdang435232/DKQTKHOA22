const express = require("express");
const app = express();

app.use(express.json());

// API nhận dữ liệu cảm biến
app.post("/api/data", (req, res) => {
  console.log("Dữ liệu nhận được:", req.body);
  res.status(200).send("Data received");
});

// Giao diện thử nghiệm
app.get("/", (req, res) => {
  res.send("Server đang chạy!");
});

// Lắng nghe cổng
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App đang chạy trên port ${PORT}`);
});
