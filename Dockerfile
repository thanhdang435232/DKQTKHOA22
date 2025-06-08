# Sử dụng image Node.js phiên bản 18 (Alpine - nhẹ hơn)
FROM node:18-alpine

# Đặt thư mục làm việc chính là /app
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có) vào thư mục /app
COPY package*.json ./

# Cài đặt các thư viện cần thiết (dependencies)
RUN npm install --production

# Sao chép toàn bộ code còn lại (server.js, các file khác) vào /app
COPY . .

# Khai báo cổng lắng nghe của server là 3000
EXPOSE 3000

# Lệnh chạy ứng dụng khi container được khởi động
CMD ["node", "server.js"]
