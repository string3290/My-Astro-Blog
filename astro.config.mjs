import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 關閉靜態圖片未找到時的崩潰攔截，或是將靜態資源交由 public/ 處理
  image: {
    domains: ['tw.scottsu.net'], // 允許保留原本 WordPress 的圖片外鏈
  },
  experimental: {
    // 若特定圖片遺失，不讓 build 直接潰敗
  }
});