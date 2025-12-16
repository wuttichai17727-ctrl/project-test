// สำหรับการนำเข้าไฟล์ภาพ SVG เป็น URL
declare module '*.jpeg' {
  const content: any; // content อาจเป็น string (URL)
  export default content;
}
declare module '*.jpg' {
  const content: any; // content อาจเป็น string (URL)
  export default content;
}

// หรือถ้าคุณต้องการใช้ SVG เป็น React Component (ขึ้นอยู่กับการตั้งค่า Webpack/Vite)
/*
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
*/