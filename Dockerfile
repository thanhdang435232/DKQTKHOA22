# Sử dụng image Node.js chính thức
FROM node:18-alpine

# Đổi sang thư mục app
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install --production

# Sao chép mã nguồn
COPY . .

# Xác định cổng lắng nghe
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "server.js"]
