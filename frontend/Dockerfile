# 使用 Node.js 22 作為基底映像
FROM node:22-slim AS build

# 安裝 pnpm
RUN npm install -g pnpm

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN pnpm install

# 複製 React 專案檔案
COPY . .

# 編譯 React 應用
RUN pnpm run build

# 確認 build 目錄是否存在
RUN ls -l /app/dist
# 使用 Node.js 作為 Web 伺服器提供靜態檔案
FROM node:22-slim

# 安裝 pnpm
RUN npm install -g pnpm@latest-10

# 設定 pnpm 的全域 bin 目錄
ENV PNPM_HOME=/root/.pnpm
ENV PATH=$PNPM_HOME:$PATH

# 設定工作目錄
WORKDIR /app

# 複製編譯後的檔案到容器中
COPY --from=build /app/dist /app/dist

# 安裝 http-server，這是一個用來提供靜態檔案的簡單 Node.js Web 伺服器
RUN pnpm install -g http-server

# 開放容器的 3000 端口
EXPOSE 3000

# 啟動 http-server 來提供 React 靜態檔案
CMD ["http-server", "dist", "-p", "3000"]
