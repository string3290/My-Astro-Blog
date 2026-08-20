import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 必須引進 glob 載入器

const blog = defineCollection({
  // 明確指定抓取 src/content/blog/ 目錄下所有 .md 檔案
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  // 關鍵修復：這裡必須傳入 ({ image }) 才能解構出 image 函式
  schema: ({ image }) =>
    z.object({
        title: z.string().default('無標題文章'),
        description: z.string().optional().default(''),
        // 自動將各種文字或 1000 年這種異常年份轉為合法日期，避免編譯中斷
        pubDate: z.coerce.date().optional().default(() => new Date()),
        heroImage: image().or(z.string()).optional(), // 允許圖片物件或字串網址
   }),
});

export const collections = { blog };