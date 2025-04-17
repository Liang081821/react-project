// tailwind.config.ts

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // 確認這裡的路徑正確
  theme: {
    extend: {
      colors: {
        primary: "#B6B66A",
        light: "#D3D3D3",
        dark: "#C87A3A",
        green: "#5A7F4E",
      },
    },
  },
  plugins: [],
};

export default config;
