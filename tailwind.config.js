// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // *** สำคัญมาก: กำหนด content ให้ชี้ไปที่ไฟล์โค้ดของคุณ ***
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}", // เปลี่ยนตามโครงสร้างไฟล์ของคุณ
  ],
  theme: {
    extend: {
        screen:{
            xs:"450px"
        }
    },
  },
  plugins: [],
}